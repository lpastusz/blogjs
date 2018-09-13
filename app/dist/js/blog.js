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
appControllers.controller('PostListCtrl', ['$scope', '$sce', 'PostService',
    function PostListCtrl($scope, $sce, PostService) {

        $scope.posts = [];

        PostService.findAllPublished().then(function(data) {
            for (var postKey in data) {
                data[postKey].content = $sce.trustAsHtml(data[postKey].content);
            }

            $scope.posts = data;  
            $scope.$apply();          
        }).catch(function(error) {
            console.log(error);
        });
    }
]);

appControllers.controller('PostViewCtrl', ['$scope', '$routeParams', '$location', '$sce', 'PostService',
    function PostViewCtrl($scope, $routeParams, $location, $sce, PostService) {

        $scope.post = {};
        var id = $routeParams.id;

        PostService.read(id).then(function(data) {
            data.content = $sce.trustAsHtml(data.content);
            $scope.post = data;
            $scope.$apply();
        }).catch(function(error) {
            console.log(error);
        });

    }
]);
appDirectives.directive('displayMessage', function() {
	return {
		restrict: 'E',
		scope: {
        	messageType: '=type',
        	message: '=data'
      	},
		template: '<div class="alert {{messageType}}">{{message}}</div>',
		link: function (scope, element, attributes) {
            scope.$watch(attributes, function (value) {
            	console.log(attributes);
            	console.log(value);
            	console.log(element[0]);
                element[0].children.hide(); 
            });
        }
	}
});
appServices.factory('AuthenticationService', function() {
    var auth = {
        isAuthenticated: true,
        isAdmin: false
    }
    return auth;
});

const post1 = {
    _id: '1',
    title: 'Team description',
    created: new Date(1536876996289),
    content: '<p><b>TODO:</b> add description of team members</p>'
}

appServices.factory('PostService', function($http) {
    return {
        findAllPublished: function() {
            return new Promise((resolve, reject) =>
                resolve([post1])
            );
        },

        read: function(id) {
            console.log(id);
            return new Promise((resolve, reject) =>
                resolve(post1)
            );
        },
    };
});