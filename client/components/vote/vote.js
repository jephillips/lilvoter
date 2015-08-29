/**
 * Created by josh on 8/29/15.
 */

var VoteController = function (pollService, $stateParams) {
    var ctrl = this;

    console.log($stateParams);
    ctrl.currentItem = pollService.getPollById($stateParams.id)

};

export default angular => {
    angular.module('app.vote', ['app.service.pollservice'])
    .controller('VoteController', VoteController);
}