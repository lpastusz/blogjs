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