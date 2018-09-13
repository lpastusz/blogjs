appControllers.controller('PostListCtrl', ['$scope', '$sce', 'PostService',
    function PostListCtrl($scope, $sce, PostService) {

        $scope.posts = [];

        return PostService.findAllPublished().then(function(data) {
            for (var postKey in data) {
                if (data[postKey].content.length > 100) {
                    data[postKey].content = data[postKey].content.slice(0,90) + '...';
                }
                
            }

            $scope.$apply(() => {
                $scope.posts = data;  
            });          
        }).catch(function(error) {
            console.log(error);
        });
    }
]);

appControllers.controller('PostViewCtrl', ['$scope', '$routeParams', '$location', '$sce', 'PostService',
    function PostViewCtrl($scope, $routeParams, $location, $sce, PostService) {

        $scope.post = null;
        var id = $routeParams.id;

        return PostService.read(id).then(function(data) {
            $scope.$apply(() => {
                $scope.post = data;
            });
        }).catch(function(error) {
            console.log(error);
        });

    }
]);