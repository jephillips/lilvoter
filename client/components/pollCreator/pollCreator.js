/**
 * Created by josh on 8/29/15.
 */

var CreateController = function(pollService){
    var ctrl = this;

    ctrl.create = function(){

    };

    ctrl.options = [];
    ctrl.title = '';

    ctrl.removeOption = function(option){
        ctrl.options.splice(option.position, 1)
    };

    ctrl.addOption = function(){
        ctrl.options.push({position: ctrl.options.length});
        console.log(ctrl.options);
    }

    ctrl.submit = function(){
        pollService.addPoll(ctrl.title, ctrl.options)
    }
};

export default angular => {
    angular.module('app.create', ['app.service.pollservice'])
    .controller('CreateController', CreateController)
}