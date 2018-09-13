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
    content:
    `<p><b>TODO:</b> add description of team members</p>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis leo nulla, ac tristique tortor tempus a. Aenean vel tempor elit, a scelerisque tortor. Curabitur orci dolor, rhoncus interdum tortor et, fringilla maximus tortor. Etiam vitae mi nisl. Curabitur ullamcorper erat eu orci ornare, at tempus sem rhoncus. Vestibulum tincidunt lobortis lorem cursus cursus. Nullam quis congue justo, nec egestas leo. Aenean vel interdum justo. Fusce eleifend est at lacus rutrum congue. Mauris porta non ante a placerat. Phasellus porttitor vitae orci a pharetra. Fusce posuere et massa non sodales. Sed finibus augue nec eros malesuada tempor. Mauris viverra, ante id tempor accumsan, orci turpis mollis velit, eu dignissim lacus neque sed ipsum. Curabitur ut urna libero. Maecenas porta mollis feugiat.</p>
    <p>Sed sapien erat, cursus vel enim sit amet, convallis posuere mi. Nam non odio non velit ullamcorper tincidunt. Cras congue tortor ac purus varius, eget faucibus nisi varius. Sed in orci turpis. Curabitur ac sem ac odio malesuada volutpat. Aliquam porta ante augue, eu congue arcu consectetur vitae. Suspendisse ullamcorper sed odio nec eleifend.</p>
    <p>Donec elementum tincidunt nisi, vitae posuere augue. Sed scelerisque vestibulum ligula, a pretium tellus egestas eu. Curabitur aliquam pellentesque pellentesque. Quisque fringilla nisi ante, dictum finibus velit blandit sit amet. Mauris a accumsan sapien, nec elementum nibh. Donec sit amet nunc id leo pretium pharetra quis quis quam. Sed ut gravida risus, vitae commodo risus. Aliquam in facilisis erat, dictum auctor ante. Nunc consequat mauris lectus, eget dignissim nibh fringilla ut. Nunc vulputate auctor elit. Maecenas erat tellus, cursus vitae dolor quis, consectetur convallis nunc. Sed tristique vitae mi sed luctus. Duis laoreet sapien ut eros condimentum convallis a vel quam. Aenean elementum, odio a dapibus suscipit, nunc lorem bibendum mi, quis facilisis magna erat ac orci. Donec eros magna, placerat sed urna ullamcorper, convallis vehicula nisi. Phasellus vitae ipsum id ipsum tempus ornare.</p>
    <p>In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ultrices nec nibh sed tempus. Integer vel tincidunt mi. Vivamus eget eros nec mi porta varius non sit amet ante. Donec venenatis urna tellus, id cursus ex commodo vel. Cras aliquet velit dui, id interdum ex viverra mattis. Sed vehicula ultricies ligula quis finibus. In in malesuada mauris. Integer egestas ligula vel mollis venenatis. Sed tincidunt nunc vel enim accumsan, id posuere augue efficitur. Nulla elementum risus eget mauris molestie, vel sollicitudin dui auctor. Nulla egestas purus ac mauris malesuada iaculis. Nullam et consectetur nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ultrices turpis ac tellus tempus, eget aliquam mi dictum.</p>
    <p>Phasellus in sem sed lectus varius commodo et nec sapien. Donec gravida semper purus. Praesent cursus leo et leo consequat dictum. Fusce magna libero, porttitor sit amet dapibus ut, ultricies quis ex. Sed pretium ultricies mauris in ullamcorper. Vestibulum leo nisi, consequat sit amet mi eu, blandit cursus nisi. Nulla suscipit lacinia libero, ac bibendum risus.</p>
    <p>End.</p>
    `
}

appServices.factory('PostService', function($http) {
    return {
        findAllPublished: function() {
            return new Promise((resolve, reject) =>
                resolve([Object.assign({}, post1)])
            );
        },

        read: function(id) {
            console.log(id);
            return new Promise((resolve, reject) =>
                resolve(Object.assign({}, post1))
            );
        },
    };
});