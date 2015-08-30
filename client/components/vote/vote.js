/**
 * Created by josh on 8/29/15.
 */

var VoteController = function (pollService, $stateParams, $state) {
    var ctrl = this;

    pollService.getPollById($stateParams.id)
        .then(function (result) {
            ctrl.currentPoll = result;
        });

    ctrl.submit = function(){
        console.log('Submit');
        if (ctrl.choice){
            $state.go('home');
        } else {
            alert('You must select an option!');
        }
    }

};

export default angular => {
    angular.module('app.vote', ['app.service.pollservice'])
    .controller('VoteController', VoteController);
}