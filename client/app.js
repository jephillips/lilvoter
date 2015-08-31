/**
 * Created by josh on 8/24/15.
 */
const angular = require('angular');
const appModule = angular.module('app', [
    require('ui-router'),
    'app.pollmanager',
    'app.vote',
    'app.results',
    'app.create',
    'app.model.poll',
    'app.service.pollservice'
]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'components/pollManager/pollManager.html',
            controller: 'PollManagerController as managerCtrl'
        })
        .state('vote', {
            url: '/vote/{id}',
            templateUrl: 'components/vote/vote.html',
            controller: 'VoteController as voteCtrl'
        })
        .state('results', {
            url: '/results/{id}',
            templateUrl: 'components/results/results.html',
            controller: 'ResultsController as resultsCtrl'
        })
        .state('create', {
            url: '/create',
            templateUrl: 'components/pollCreator/pollCreator.html',
            controller: 'CreateController as createCtrl'
        });

    $urlRouterProvider.otherwise('/home')
});

require('./components/components')(appModule, angular);