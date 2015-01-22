//app.directive('rss_feed', function () {
//    return {
//        restrict: 'A',
//        template: "<div>{{rss_data.length}}</div>",
//        scope: {
//            data: '@rss_data'
//        },
//        link: function ($scope, $element, $attrs) {
//        }
//    };
//});

//app.directive('rss-feed', function () {
//    return {
//        restrict: 'E',
//        scope:{
//            name:'bind'
//        },
//        template: '<span>Hello {{name}}</span>'
//
//    }
//});
app.directive('feedItem', function() {
    return {
        restrict: 'AE',
        transclude : false,
        scope:{
            data: "="
        },
        link : function($scope, $element, $attrs) {
        },
//        replace: 'true', //template: '<h3>Hello World!!</h3>'
        templateUrl: 'templates/feed_item.html'
    };
});