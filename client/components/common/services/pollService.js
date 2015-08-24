/**
 * Created by josh on 8/24/15.
 */

angular.module('app.service.pollservice', [
    'app.model.poll'
]).service('pollService', function(Poll, $http, $q){

    var service = this,
        polls = [new Poll("Poll 1"), new Poll("Poll 2")],
        URLS = {
            FETCH: 'data.json'
        };

    service.getPollList = function(){
        return (polls) ? $q.when(polls) : $http.get(URLS.FETCH).then(cacheResults);
    };

    function extractData(result){
        return result.data;
    }

    function cacheResults(result){
        polls = extractData(result);
        return polls;
    }

    // Placeholders till persistent post to db/flatfile is added

    service.addPollPlaceholder = function(title){
        // Need the backend to handle post request -- All you Jer
        polls.push(new Poll(title));
    };

    service.getPollsPlaceholder = function(){
        return polls;
    };
});