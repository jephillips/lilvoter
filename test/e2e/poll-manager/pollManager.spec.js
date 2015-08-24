/**
 * Created by josh on 8/24/15.
 */
describe("Poll Manager", function () {
    describe('save button', function () {
        var button,
            input,
            pollList;

        beforeEach(function () {
            button = element(by.id('save-button'));
            input = element(by.id('title-input'));
            //pollList = element.all(by.repeater('poll in managerCtrl.polls').column('poll.title').map(function(element){
            //    return element.getText()}))
        });

        // Need to learn how to test repeater
        //it("should add a new element to polls when clicked", function () {
        //
        //    input.sendKeys('New item');
        //    button.click();
        //
        //    console.log("Poll List")
        //    console.log(pollList);
        //
        //    expect(pollList.toContain('New item'));
        //});

        it("should clear the input once save is clicked", function () {

            input.sendKeys('Hello');
            button.click();
            expect(input.getText()).toBe('');
        })


    })
});