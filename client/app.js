/**
 * Created by josh on 8/24/15.
 */


angular.module('app', [
    'ui.router',
    'app.pollmanager'
]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'components/pollManager/pollManager.html',
            controller: 'PollManagerController as mngrCtrl'
        });

    $urlRouterProvider.otherwise('/')
});