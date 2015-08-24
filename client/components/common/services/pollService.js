/**
 * Created by josh on 8/24/15.
 */

angular.module('app.service.pollservice', [
    'app.model.poll'
]).service('pollService', function(Poll){

    var service = this,
        polls = [new Poll("Poll 1"), new Poll("Poll 2")];

    service.getPolls = function(){
        return polls;
    };

    service.addPoll = function(title){

        polls.push(new Poll(title));
    }

});