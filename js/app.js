'use strict';
console.log("Scripts loading... ");

var app = angular.module("rss_app", ['ngRoute', 'ngSanitize'])
    .factory('FeedService',['$http',function($http){
        return {
            parseFeed : function(url){
                return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
            }
        }
    }])
    .controller('Welcome', ['$scope', '$http', '$routeParams', 'RSS', function($scope, $http, $routeParams, RSS) {
        //default...
    }])
    .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
        $routeProvider
        .when('/', {
            templateUrl: '/angular_rss/templates/default.html',
            controller: 'Welcome'
        })
        .when('/get_feed/:id', {
            templateUrl: '/angular_rss/templates/url_feed.html',
            controller: 'FeedController'
        })
        .otherwise({
            redirectTo: '/'
        });
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
app.run(['$rootScope', function($rootScope) {

}]);
