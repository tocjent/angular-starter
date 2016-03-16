import { dashboard } from './components/dashboard/dashboard';
import { profile } from './components/profile/profile';
import { franchise } from './components/franchise/franchise';
import { franchiseService } from './services/franchise/franchise';

angular.module('app', ['ui.router', 'templates'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        (
            $stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider
        ) => {
            $stateProvider
                .state('app', {
                    abstract: true,
                    templateUrl: 'app.html'
                })
                .state('app.dashboard', {
                    url: '/dashboard',
                    template: '<app-dashboard/>'
                })
                .state('app.profile', {
                    url: '/profile',
                    template: '<app-profile/>'
                });

            $urlRouterProvider.otherwise('/dashboard');
        }
    ])
    .service('appFranchiseService', franchiseService)
    .component('appFranchise', franchise)
    .component('appDashboard', dashboard)
    .component('appProfile', profile);
