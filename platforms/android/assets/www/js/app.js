// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','angularSoap','starter.service','starter.controller'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        })
    })

    .config(function($httpProvider, $urlRouterProvider, $httpProvider,$stateProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'MainCtrl'
            })

            //--------------------------------------

            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/dashboard.html'
                    }
                },
                authStatus: false
            })
            .state('app.todos', {
                url: '/todos',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/todos.html',
                        controller: 'MainCtrl'
                    }
                },

            })
            //--------------------------------------


            .state('app.ip', {
                url: '/ip',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/ip.html',
                        controller: 'MainCtrl'
                    }
                },

            })


        $urlRouterProvider.otherwise('/app/dashboard');
    })




