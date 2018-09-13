'use strict';

var app = angular.module('app', ['ngRoute', 'appControllers', 'appServices', 'appDirectives']);

var appServices = angular.module('appServices', []);
var appControllers = angular.module('appControllers', []);
var appDirectives = angular.module('appDirectives', []);

app.config(['$locationProvider', '$routeProvider', 
  function($location, $routeProvider) {
    $routeProvider.
        when('/list', {
            templateUrl: 'partials/post.list.html',
            controller: 'PostListCtrl'
        }).
        when('/:id', {
            templateUrl: 'partials/post.view.html',
            controller: 'PostViewCtrl'
        }).
        otherwise({
            redirectTo: '/list'
        });
}]);

app.filter('trustAs', ['$sce', 
        function($sce) {
            return function (input, type) {
                if (typeof input === "string") {
                    return $sce.trustAs(type || 'html', input);
                }
                console.log("trustAs filter. Error. input isn't a string");
                return "";
            };
        }
    ]);