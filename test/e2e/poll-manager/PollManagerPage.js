/**
 * Created by josh on 8/25/15.
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

module.exports = PollManagerPage;