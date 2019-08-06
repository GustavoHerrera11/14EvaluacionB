var World = angular.module("Clima",[])
World.controller("Warcraft", function($rootScope, $scope, $http){
	$http({
		method: "GET",
		url:"https://us.api.blizzard.com/data/wow/creature-type/1?namespace=static-us&locale=en_US&access_token=11122001"
	}).then(function callbacksucces(snapshot){
		$scope.criatura=[];
		console.log(snapshot)
		$scope.criatura.push(snapshot)
	})
})