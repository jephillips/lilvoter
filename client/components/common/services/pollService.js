/**
 * Created by josh on 8/24/15.
 */

export default angular => {
    angular.module('app.service.pollservice', [
    'app.model.poll'
]).service('pollService', function (Poll, $http, $q) {

        var service = this,
            polls = [],
            URLS = {
                FETCH: 'http://localhost:3000/polls',
                POST: 'http://localhost:3000/polls',
                PUT: 'http://localhost:3000/polls'
            };

        service.getPollList = function () {
            //            return (polls) ? $q.when(polls) : $http.get(URLS.FETCH).then(cacheResults); //TODO: add a error callback if request failed
            return $http.get(URLS.FETCH).then(cacheResults)

        };

        // Temporary implementation
        service.getPollById = function (id) {
            return $http.get(URLS.FETCH + '/' + id).then(function (res) {
                return res.data;
            });
        };

        function extractData(result) {
            return result.data;
        }

        function cacheResults(result) {
            polls = extractData(result);
            return polls;
        }

        service.addPoll = function (title, options) {
            var poll = new Poll(title, options);
            return $http.post(URLS.POST, poll).then(function (data) {
                polls.push(poll);
            });

        };

        service.getPollsPlaceholder = function () {
            //        return polls;
            return $http.get(URLS.FETCH).then(cacheResults);
        };

        service.submitVote = function (pollid, choiceid) {
            var data = {
                userChoice: choiceid
            };
            return $http.put(URLS.PUT + '/' + pollid + '/vote', data).then(function (res) {
                return res.data;
            })
        };

    });
}