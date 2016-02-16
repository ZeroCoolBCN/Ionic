angular.module('starter.service', [ ])



    .factory("testService", ['$soap',function($soap){
        var base_urls = "http://www.webservicex.net/geoipservice.asmx";
        $soap.setCredentials("username","password");
        var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        return {
            GetGeoIP: function(IPAddress){
                return $soap.post(base_urls,"GetGeoIP", {IPAddress: IPAddress},config);
            }
        }
    }])

    .factory("testCountry", ['$soap',function($soap){
        var base_urlssse = "http://www.webservicex.com/globalweather.asmx";
        $soap.setCredentials("username","password");
        var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        return {
            GetCitiesByCountry: function(CountryName){
                return $soap.post(base_urlssse,"GetCitiesByCountry", {CountryName: CountryName},config);
            }
        }
    }])

    .factory("testCountryAll", ['$soap',function($soap){
        var base_urlss = "http://www.webservicex.com/globalweather.asmx";
        $soap.setCredentials("username","password");
        var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        return {
            GetWeather: function(City,Counters){
                return $soap.post(base_urlss,"GetWeather", {CityName:City,CountryName: Counters},config);
            }
        }
    }])
