/**
 * Created by josh on 8/24/15.
 */

var PollManagerController = function(pollService){
    var controller = this;

    controller.polls = pollService.getPolls();
};

angular.module('app.pollmanager', [
    'app.service.pollservice'
]).controller('PollManagerController', PollManagerController);