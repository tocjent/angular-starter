/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var dashboard_1 = __webpack_require__(1);
	var profile_1 = __webpack_require__(2);
	var franchise_1 = __webpack_require__(3);
	var franchise_2 = __webpack_require__(4);
	angular.module('app', ['ui.router', 'templates'])
	    .config([
	    '$stateProvider',
	    '$urlRouterProvider',
	    function ($stateProvider, $urlRouterProvider) {
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
	    .service('appFranchiseService', franchise_2.franchiseService)
	    .component('appFranchise', franchise_1.franchise)
	    .component('appDashboard', dashboard_1.dashboard)
	    .component('appProfile', profile_1.profile);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	exports.dashboard = {
	    templateUrl: 'components/dashboard/dashboard.html',
	    controller: [
	        'appFranchiseService',
	        function (franchiseService) {
	            this.franchises = franchiseService.getAll();
	        }
	    ]
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	exports.profile = {
	    templateUrl: 'components/profile/profile.html',
	    controller: [
	        function () {
	        }
	    ]
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	exports.franchise = {
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


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	;
	;
	exports.franchiseService = function () { return ({
	    getAll: function () { return [
	        {
	            name: "Star Wars",
	            cover: "assets/star-wars.jpg",
	            description: "Star Wars is an American epic space opera franchise, centered on a film series created by George Lucas.",
	            movies: [
	                { title: "Star Wars: Episode IV - A New Hope", releaseDate: "1977" },
	                { title: "Star Wars: Episode V - The Empire Strikes Back", releaseDate: "1980" },
	                { title: "Star Wars: Episode VI - Return of the Jedi", releaseDate: "1983" },
	                { title: "Star Wars: Episode I - The Phantom Menace", releaseDate: "1999" },
	                { title: "Star Wars: Episode II - Attack of the Clones", releaseDate: "2002" },
	                { title: "Star Wars: Episode III - Revenge of the Sith", releaseDate: "2005" },
	                { title: "Star Wars: Episode VII - The Force Awakens", releaseDate: "2015" }
	            ]
	        },
	        {
	            name: "Harry Potter",
	            cover: "assets/potter.jpg",
	            description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.",
	            movies: [
	                { title: "Harry Potter and the Sorcerer's Stone", releaseDate: "2001" },
	                { title: "Harry Potter and the Chamber of Secrets", releaseDate: "2002" },
	                { title: "Harry Potter and the Prisoner of Azkaban", releaseDate: "2004" },
	                { title: "Harry Potter and the Goblet of Fire", releaseDate: "2005" },
	                { title: "Harry Potter and the Order of the Phoenix", releaseDate: "2007" },
	                { title: "Harry Potter and the Half-Blood Prince", releaseDate: "2009" },
	                { title: "Harry Potter and the Deathly Hollows, Part 1", releaseDate: "2010" },
	                { title: "Harry Potter and the Deathly Hollows, Part 2", releaseDate: "2011" }
	            ]
	        },
	        {
	            name: "Indiana Jones",
	            cover: "assets/jones.jpg",
	            description: "The Indiana Jones franchise is based on the adventures of a fictional archaeologist.",
	            movies: [
	                { title: "Raiders of the Lost Ark", releaseDate: "1981" },
	                { title: "Indiana Jones and the Template of Doom", releaseDate: "1984" },
	                { title: "Indiana Jones and the Last Crusade", releaseDate: "1989" },
	                { title: "Indiana Jones and the Kingdom of the Crystal Skull", releaseDate: "2008" }
	            ]
	        }
	    ]; }
	}); };


/***/ }
/******/ ]);