interface ProfileController {
    ();
}

interface ProfileComponent {
    templateUrl: 'components/profile/profile.html',
    controller: [
        ProfileController
    ];
}

export var profile: ProfileComponent = {
    templateUrl: 'components/profile/profile.html',
    controller: [
        function () {
        }
    ]
};
