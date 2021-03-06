/**
 * Created by josh on 8/24/15.
 */

var PollManagerController = function (pollService, $state) {
    var controller = this;

    pollService.getPollList()
        .then(function (result) {
            controller.polls = result;
        });

    controller.createPoll = function(){
        $state.go('create')
    }

    // Doesn't persist yet
    controller.savePoll = function (poll) {
        if (!poll) {
            alert("You must enter a value!");
        } else {
            pollService.addPollPlaceholder(poll);
            // will need to move to promise once we add in async
            pollService.getPollsPlaceholder();
            controller.inputBox = '';
        }
    }
};

export default angular => {
    angular.module('app.pollmanager', [
        'app.service.pollservice'
    ]).controller('PollManagerController', PollManagerController);
}