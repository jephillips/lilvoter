/**
 * Created by josh on 8/24/15.
 */

var PollManagerController = function(pollService){
    var controller = this;

    controller.polls = pollService.getPolls();

    controller.savePoll = function(poll){
        pollService.addPoll(poll);
        // will need to move to promise once we add in async
        controller.polls = pollService.getPolls();
    }
};

angular.module('app.pollmanager', [
    'app.service.pollservice'
]).controller('PollManagerController', PollManagerController);