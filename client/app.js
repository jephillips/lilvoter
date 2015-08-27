/**
 * Created by josh on 8/24/15.
 */


const angular = require('angular');
const appModule = angular.module('app', [
    require('ui-router'),
    'app.pollmanager',
    'app.model.poll',
    'app.service.pollservice'
]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'components/pollManager/pollManager.html',
            controller: 'PollManagerController as managerCtrl'
        });

    $urlRouterProvider.otherwise('/')
});

require('./components/components')(appModule, angular);