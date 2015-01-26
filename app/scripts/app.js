'use strict';

/**
 * @ngdoc overview
 * @name dynamicRoutesApp
 * @description
 * # dynamicRoutesApp
 *
 * Main module of the application.
 */
angular
  .module('dynamicRoutesApp', [
    'ui.router', 'CustomRouting'
  ])
    .run(function($rootScope){
        // using rootScope is a bad choice but works for this Demo
        $rootScope.primaryList=[];

    })
  .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/main.html",
                controller: "MainCtrl"
            });

  });
