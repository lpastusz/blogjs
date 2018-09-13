'use strict';

var app = angular.module('app', ['ngRoute', 'appControllers', 'appServices', 'appDirectives']);

var appServices = angular.module('appServices', []);
var appControllers = angular.module('appControllers', []);
var appDirectives = angular.module('appDirectives', []);

app.config(['$locationProvider', '$routeProvider', 
  function($location, $routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/post.list.html',
            controller: 'PostListCtrl'
        }).
        when('/post/:id', {
            templateUrl: 'partials/post.view.html',
            controller: 'PostViewCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);