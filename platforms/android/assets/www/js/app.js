// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','angularSoap'])

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

    .config(function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })

    .factory("testService", ['$soap',function($soap){
        var base_url = "http://www.webservicex.net/geoipservice.asmx";
        var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        return {
            GetCitiesByCountry: function(IPAddress){
                return $soap.post(base_url,"GetGeoIP", {IPAddress: IPAddress},config);
            }
        }
    }])

    .controller('MainCtrl', function($scope, testService) {
        $scope.country ={
            ip:''
        }
        $scope.SoapClient = function(){

            testService.GetCitiesByCountry($scope.country.ip).then(function(response){
                $scope.response = response;
            });
        }


    })

