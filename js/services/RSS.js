app.service('RSS', ['$rootScope', function($rootScope){
    /* Main rss feed data service */
    var feed, temp;
    temp = localStorage.getItem('RSS_APP');

    if(temp){
        feed = angular.fromJson(temp);
    }
    else {
        feed = [
            { id: 0, url: "http://www.feedforall.com/sample.xml", history: 0, active: true },
            { id: 1, url: "http://www.feedforall.com/sample-feed.xml", history: 0, active: false },
            { id: 2, url: "http://www.feedforall.com/blog-feed.xml", history: 0, active: false },
            { id: 3, url: "http://www.rss-specifications.com/blog-feed.xml", history: 0, active: false }
        ];
    }
    var service = {
        feeds: feed,
        addFeed: function (url) {
            url["id"] = _.max(_.pluck(service.feeds, 'id')) * 1 + 1;
            url["history"] = 0;
            url["active"] = false;
            service.feeds.push(url);
            $rootScope.$broadcast('RSS.update');
        },
        removeFeed: function (feed_id) {
            _.remove(service.feeds, function (val) {
                return val.id == feed_id;
            });
            $rootScope.$broadcast('RSS.update');
        },
        changeActive: function(id){
            for(var i=0;i<service.feeds.length;i++){
                service.feeds[i].active = service.feeds[i].id == id;
            }
            $rootScope.$broadcast('RSS.update');
        },
        contains_url: function(url){
            return _.contains(_.pluck(service.feeds, 'url'), url);
        },
        contains_id: function(id){
            return _.contains(_.pluck(service.feeds, 'id'), id);
        }
    };
    return service;
}]);