angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app.html","<nav class=\"navbar navbar-inverse navbar-static-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" ng-click=\"navbarCollapsed = !navbarCollapsed\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\" ng-class=\"{collapse: navbarCollapsed}\">\n            <ul class=\"nav navbar-nav\">\n                <li ui-sref-active=\"active\">\n                    <a ui-sref=\"app.dashboard\" class=\"item-content\">\n                        <span class=\"glyphicon glyphicon-dashboard\"></span>\n                        <span>Dashboard</span>\n                    </a>\n                </li>\n                <li ui-sref-active=\"active\">\n                    <a ui-sref=\"app.profile\" class=\"item-content\">\n                        <span class=\"glyphicon glyphicon-user\"></span>\n                        <span>Profile</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"container\">\n    <ui-view/>\n</div>\n");
$templateCache.put("components/dashboard/dashboard.html","<div class=\"row\">\n    <div class=\"col-md-12 col-lg-4\" ng-repeat=\"franchise in $ctrl.franchises\">\n        <app-franchise franchise=\"franchise\"></app-franchise>\n    </div>\n</div>\n");
$templateCache.put("components/franchise/franchise.html","<div class=\"panel panel-default\">\n    <div class=\"panel-body row app-franchise\">\n        <div class=\"col-xs-12 col-md-2 col-lg-12 app-franchise-cover-container\">\n            <img src=\"{{vm.franchise.cover}}\" class=\"app-franchise-cover img-thumbnail img-responsive center-block\" />\n        </div>\n        <div class=\"col-xs-12 col-md-10 col-lg-12\">\n            <h3>{{vm.franchise.name}}</h3>\n            <p>{{vm.franchise.description}}</p>\n        </div>\n        <div class=\"col-xs-12\">\n            <table class=\"panel-body table table-hover\">\n                <thead>\n                    <tr>\n                        <th>Title</th>\n                        <th>Release date</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr ng-repeat=\"movie in vm.franchise.movies\">\n                        <td>{{movie.title}}</td>\n                        <td>{{movie.releaseDate}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("components/profile/profile.html","<div class=\"panel panel-default\">\n  <div class=\"panel-body row app-profile-container\">\n      <div class=\"app-profile-background\"></div>\n      <div class=\"col-sm-12 col-md-2 col-lg-2 app-profile-container\">\n          <img src=\"assets/mcfly.jpg\" class=\"app-profile-picture img-responsive img-thumbnail\">\n      </div>\n      <div class=\"col-sm-12 col-md-10 col-lg-10\">\n          <h2>Marty McFly</h2>\n          <table class=\"table table-hover app-profile-data\">\n              <tr>\n                <th>Date of birth</th>\n                <td>June 12, 1968</td>\n              </tr>\n              <tr>\n                <th>Birthplace</th>\n                <td>Hill Valley, CA</td>\n              </tr>\n              <tr>\n                <th>Occupation</th>\n                <td>Time traveler</td>\n              </tr>\n              <tr>\n                <th>Aliases</th>\n                <td>Calvin Klein, Clint Eastwood</td>\n              </tr>\n          </table>\n      </div>\n  </div>\n</div>\n");}]);