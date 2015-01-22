app.controller('MenuCtrl', ['$scope', 'RSS', function($scope, RSS) {

    /* Left Menu Controll */
    $scope.feeds = RSS.feeds;
    $scope.$on('RSS.update', function(event){
        $scope.feeds = RSS.feeds;
        localStorage.setItem('RSS_APP', angular.toJson(RSS.feeds, false));
    });
    $scope.remove = function(feed_id){
        RSS.removeFeed(feed_id);
    };
    $scope.add = function(){
        if($scope.new_url.url.isURL() && !RSS.contains_url($scope.new_url.url)){
            RSS.addFeed(angular.copy($scope.new_url));
        }
    };
    $scope.goTo = function(id){
        RSS.changeActive(id);
    }
}]);