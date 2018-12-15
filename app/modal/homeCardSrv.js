app.factory("homeCardSrv", function ($q, $http) {


    function HomeCard(homeCard) {
        this.id = homeCard.id;
        this.name = homeCard.name;
        this.description = homeCard.description;
        this.imgUrl = homeCard.imgUrl;
        this.pageLink = homeCard.pageLink;
        this.roleId = homeCard.roleId;
    }

    function getHomeCardOptions(ruleId) {
        var async = $q.defer();
        var homeCards = [];
        var getHomeCardsURL = "http://my-json-server.typicode.com/smadip/SmadiHaofa/homeCards?roleId=" + ruleId;

        $http.get(getHomeCardsURL).then(function (response) {
            var homeCards = [];
            for (var i = 0; i < response.data.length; i++) {
                var homeCard = new HomeCard(response.data[i]);
                homeCards.push(homeCard);
            }
            if (ruleId == 2) {
                var getHomeCardsURL = "http://my-json-server.typicode.com/smadip/SmadiHaofa/homeCards?roleId=" + 3;
                $http.get(getHomeCardsURL).then(function (response) {
                    for (var i = 0; i < response.data.length; i++) {
                        var homeCard = new HomeCard(response.data[i]);
                        homeCards.push(homeCard);
                    }
                })
            }

            async.resolve(homeCards);
        }, function (error) {
            async.reject(error);
        });
        return async.promise;
    }

    return {
        getHomeCardOptions: getHomeCardOptions,
    }
})