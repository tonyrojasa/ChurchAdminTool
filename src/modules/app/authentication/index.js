'use strict';

module.exports =
    angular.module('ChurchAdminTool.authentication', [
        //load your foo submodules here, e.g.:
        //require('./bar').name
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/authentication/login.html',
                controller: 'authenticationController'
            });
    })
    .controller('authenticationController', require('./authenticationController'));