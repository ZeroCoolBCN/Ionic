angular.module('starter.controller', [ ])
    .controller('MainCtrl', function($scope, testService,testCountry,testCountryAll) {
        $scope.entrada ={
            ip:'',
            pais:'',
            ciudad:''
        }
        $scope.SoapClient = function(){

            testService.GetGeoIP($scope.entrada.ip).then(function(response){
                $scope.responseIP = response;
            });
        }

        $scope.SoapCountry = function(){
            testCountry.GetCitiesByCountry($scope.entrada.pais).then(function(response){
                $scope.responsePais = response;
            });
        }

        $scope.SoapCountryAll = function(){
            testCountryAll.GetWeather($scope.entrada.ciudad,$scope.entrada.pais).then(function(response){
                $scope.responseALL = response;
            });
        }



    })
