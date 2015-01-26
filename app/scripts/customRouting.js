'use strict';

angular.module('CustomRouting', ['ui.router'])
    .provider('customRouter', function ($stateProvider) {
        this.$get = function ($state) {
            return {
                addRoute: function (routeObj) {
                    if(routeObj){
                        if (!$state.get(routeObj.name)) {
                            $stateProvider.state(routeObj.name, routeObj.info);
                        }
                    }
                }
            }
        };
    });
/*
    .run(function (customRouter) {
        customRouter.addRoute();
    });*/