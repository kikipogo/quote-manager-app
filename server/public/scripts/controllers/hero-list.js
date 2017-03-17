app.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');

    var self = this;
    var hero = { list: [] };

    getHero();

    function getHero(){
      $http({
        method: 'GET',
        url: '/heroes'
      }).then(function(response){
        console.log(response.data);
        self.heroList = response.data;
      });
    }//end function

   self.deleteHero = function deleteHero(heroId){
      console.log('delete was clicked');
      console.log(heroId);
      $http({
        method: 'DELETE',
        url: '/heroes/' + heroId
      }).then(function(response){
        getHero();
      })
    }

}]);
