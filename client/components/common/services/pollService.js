/**
 * Created by josh on 8/24/15.
 */

angular.module('app.service.pollservice', [
    'app.model.poll'
]).service('pollService', function(){

    var service = this,
        polls = [{title: 'Poll 1'}, {title: 'Poll 2'}];

    service.getPolls = function(){
        return polls;
    }

});