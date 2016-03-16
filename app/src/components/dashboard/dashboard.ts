import { FranchiseService } from '../../services/franchise/franchise';

interface DashboardController {
    (franchiseService: FranchiseService);
}

interface DashboardComponent {
    templateUrl: 'components/dashboard/dashboard.html',
    controller: [
        'appFranchiseService',
        DashboardController
    ];
}

export var dashboard: DashboardComponent = {
    templateUrl: 'components/dashboard/dashboard.html',
    controller: [
        'appFranchiseService',
        function (franchiseService) {
            this.franchises = franchiseService.getAll();
        }
    ]
};
