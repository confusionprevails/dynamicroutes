# dynamicRoutes

**[confusionprevails.com](http://confusionprevails.com)**

## Primary Goal
This is a demonstration on how to create dynamic routes/states using AngularJS and Angular UI-Router.
While working on an angular app, I had a requirement to generate UI-Router states at runtime and it took me a while to understand how
this can be achieved.

You can create new routes (or states) at runtime and provide this new route (or state) to the App.

## Idea
For dynamic routes (or states) to work, we have to introduce a new Angular Provider - customRouterProvider.
This customRouteProvider has an instance of $stateProvider and this allows us to add new states from any controller (the controller 
defines its dependency on customRouterProvider).

## How to run it
* Clone the repo
* npm install
* bower install
* grunt serve

The app was generated using Yoeman

## Documentation
app/scripts/controller/main.js

* this file contains $scope.addNewRoute()
* this method invokes customRouter.addRoute(<routeObject>)

routeObject structure:

```javascript
{
    name: 'contains name of the state',
    info: {
                'url' : 'url of the state',
                'templateUrl' : 'path to html template',
                'controller' : 'controller name attached with this state'
          }

}

```

Once you run the app you should be able to create the following states at runtime-

* state1
* state2
* state3
* state4

For simplicity the main.js controller file already has 4 different controllers and the project comes with 4 different html view templates
 to be used with these state defined above. 

Code provided in this demo is easy to follow, so go ahead and use it :)

## Dependencies
The code makes use of  
[Angular UI-Router](https://github.com/angular-ui/ui-router)

