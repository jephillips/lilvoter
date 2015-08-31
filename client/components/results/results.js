/**
 * Created by josh on 8/30/15.
 */

function ResultsController(pollService, $stateParams){
    var ctrl = this;

    pollService.getPollById($stateParams.id)
        .then(function (result) {
            ctrl.currentPoll = result;
            console.log(ctrl.currentPoll);
        });


}

export default angular => {
    angular.module('app.results', ['app.service.pollservice'])
        .controller('ResultsController', ResultsController);
}