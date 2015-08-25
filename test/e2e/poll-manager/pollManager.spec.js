/**
 * Created by josh on 8/24/15.
 */

function PollManagerPage(){
    this.button = element(by.id('save-button'));
    this.input = element(by.id('title-input'));
    this.pollList = element.all(by.repeater('poll in managerCtrl.polls'));

    this.get = function(){
        browser.get('/')
    };

    this.clickButton = function(){
     this.button.click();
    }

    this.sendInput = function(input){
        this.input.sendKeys(input)
    }
}


describe("Poll Manager", function () {

    var page = new PollManagerPage();

    describe('save button', function () {

        beforeEach(function () {
            page.get();
        });

        it("should add a new element to polls when clicked", function () {

            page.sendInput('New item');
            page.clickButton();

            expect(page.pollList.get(2).getText()).toContain('New item');
        });

        it("should clear the input once save is clicked", function () {

            page.sendInput('Cleared Text');
            page.clickButton();
            expect(page.input.getText()).toBe('');
        })


    })
});