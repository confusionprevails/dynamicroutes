'use strict';

/**
 * @ngdoc function
 * @name dynamicRoutesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dynamicRoutesApp
 */
angular.module('dynamicRoutesApp')
  .controller('MainCtrl', function ($scope, customRouter, $rootScope) {
    $scope.message = 'You can Build new Routes for Controllers';
        $scope.list=$rootScope.primaryList;

       // Idea is to pass the new custom route to the customRouter
        $scope.addNewRoute = function(){
            var obj = {
                url:$scope.url,
                templateUrl:$scope.templateUrl,
                controller:$scope.controller
            };
            var name = $scope.stateName;
            //create new routeObj
            var routeObj = {name:name, info:obj};
            console.log(routeObj);
            $scope.list.push(routeObj);
            customRouter.addRoute(routeObj);

            $scope.stateName=null, $scope.url=null, $scope.templateUrl=null, $scope.controller=null;
        }
  }).controller('State1Ctrl', function ($scope) {
        $scope.message = 'This is State1 Ctrl';
    }).controller('State2Ctrl', function ($scope) {
        $scope.message = 'This is State2 Ctrl';
    }).controller('State3Ctrl', function ($scope) {
        $scope.message = 'This is State3 Ctrl';
    }).controller('State4Ctrl', function ($scope) {
        $scope.message = 'This is State4 Ctrl';
    });
