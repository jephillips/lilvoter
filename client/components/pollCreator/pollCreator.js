/**
 * Created by josh on 8/29/15.
 */

var CreateController = function(pollService, $state){
    var ctrl = this;

    ctrl.create = function(){

    };

    ctrl.options = [{position: 0}];
    ctrl.title = '';

    ctrl.removeOption = function(option){
        ctrl.options.splice(option.position, 1)
        updatePositions();
    };

    ctrl.addOption = function(){
        ctrl.options.push({position: ctrl.options.length});
        console.log(ctrl.options);
    };

    ctrl.submit = function(){
        if(ctrl.title != ''){
        pollService.addPoll(ctrl.title, ctrl.options)
        $state.go('home');
        } else {
            alert("Title must not be empty")
        }
    };

    function updatePositions(){
        for(var i = 0; i<ctrl.options.length; i++){
            ctrl.options[i].position = i;
        }
    }
};

export default angular => {
    angular.module('app.create', ['app.service.pollservice'])
    .controller('CreateController', CreateController)
}