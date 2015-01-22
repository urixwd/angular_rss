app.controller('FeedController', ['$scope', '$http', '$routeParams', 'RSS', 'FeedService', function($scope, $http, $routeParams, RSS, FeedService) {
    $scope.id = $routeParams.id;
    var temp = _.find(RSS.feeds, function(feed){
        return feed.id == $scope.id;
    });
    if(!temp){
        $scope.url = "not exists... probably deleted.";
        return ;
    }
    $scope.url = temp.url;
    $scope.feed_data = null;
    $scope.loadFeed = function(e){
        FeedService.parseFeed($scope.url).then(function(res){
            //console.log(res.data.responseData.feed.entries);
            $scope.feed_data = res.data.responseData.feed.entries;
        });
    };
    $scope.loadFeed();
}]);