/**
 * Created by josh on 8/24/15.
 */

export default angular => {
    angular.module('app.service.pollservice', [
    'app.model.poll'
]).service('pollService', function (Poll, $http, $q) {

        var service = this,
            polls = [new Poll("Poll 1"), new Poll("Poll 2")],
            URLS = {
                //            FETCH: 'data.json'
                FETCH: 'http://localhost:3000/polls',
                POST: 'http://localhost:3000/polls'
            };

        service.getPollList = function () {
            //        return (polls) ? $q.when(polls) : $http.get(URLS.FETCH).then(cacheResults); //TODO: add a error callback if request failed
            return $http.get(URLS.FETCH).then(cacheResults)

        };

        // Temporary implementation
        service.getPollById = function(id){
            return new Poll('Mock Poll')
        };

        function extractData(result) {
            return result.data;
        }

        function cacheResults(result) {
            console.log('result is:');
            console.log(result);
            polls = extractData(result);
            console.log('polls is:');
            console.log(polls);
            return polls;
        }

        // Placeholders till persistent post to db/flatfile is added

        service.addPoll = function (title, options) {
            // Need the backend to handle post request -- All you Jer
            //        polls.push(new Poll(title));
            var poll = new Poll(title, options);
            return $http.post(URLS.FETCH, poll).then(function (data) {
                console.log('successful POST of:');
                console.log(poll);
                polls.push(poll);
            });

        };

        service.getPollsPlaceholder = function () {
            //        return polls;
            return $http.get(URLS.FETCH).then(cacheResults);
        };
    });
}