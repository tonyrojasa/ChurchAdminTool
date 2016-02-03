'use strict';

/**
 * @ngdoc overview
 * @name churchAdminToolApp
 * @description
 * # churchAdminToolApp
 *
 * Main module of the application.
 */
angular
    .module('churchAdminToolApp', [
        'ngAnimate',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'xeditable'
    ])
    .constant('_', window._)
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'scripts/home/components/home.html',
                controller: 'HomeCtrl as home'
            })
            .state('smallgroups', {
                url: '/smallgroups',
                templateUrl: 'scripts/smallGroups/components/smallGroups.html',
                controller: 'SmallGroupsCtrl as smallGroups'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'scripts/about/components/about.html',
                controller: 'AboutCtrl as about'
            });

        $urlRouterProvider.otherwise('/home');
    });