/**
 * Created by josh on 8/24/15.
 */

var PollManagerPage = require('./PollManagerPage')

describe("Poll Manager", function () {

    var page = new PollManagerPage();

    describe('save button', function () {

        beforeEach(function () {
            page.get();
        });

        it("should add a new element to polls when clicked", function () {

            page.sendInput('New item');
            page.clickButton();

            // Check correct value
            expect(page.pollList.get(2).getText()).toContain('New item');
            // Check correct length
            page.pollList.then(function(result){
                expect(result.length).toBe(3);
            })
        });

        it("should clear the input once save is clicked", function () {

            page.sendInput('Cleared Text');
            page.clickButton();
            expect(page.input.getText()).toBe('');
        })

        it("should not save an empty string", function(){

            page.clickButton();
            browser.driver.switchTo().alert().accept();

            page.pollList.then(function(result){
                expect(result.length).toBe(2);
            })
        })


    })
});