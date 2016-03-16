interface FranchiseController {
    (a, b, c);
}

interface FranchiseComponent {
    templateUrl: 'components/franchise/franchise.html',
    bindings: {
        franchise: '='
    },
    controllerAs: 'vm',
    controller: [
        FranchiseController
    ];
}

export var franchise: FranchiseComponent = {
    templateUrl: 'components/franchise/franchise.html',
    bindings: {
        franchise: '='
    },
    controllerAs: 'vm',
    controller: [
        function () {
        }
    ]
};
