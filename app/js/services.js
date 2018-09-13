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