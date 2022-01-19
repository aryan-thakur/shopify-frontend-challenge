app.controller('mainController', function($scope, $http, $route, imageService, apikey) {
$scope.loader = false;
$scope.init = () => {
  $scope.search = new Date(2022,0,1);
  $scope.triggerCall({});
}
var makeMonth = (month) => {
  month = month+1;
  if(month < 10){
    return '0'+month.toString();
  }
  else{
    return month.toString();
  }
}
$scope.photos = [];
$scope.triggerCall = (e) => {
  const earthdate = $scope.search.getFullYear().toString()+'-'+makeMonth($scope.search.getUTCMonth())+'-'+$scope.search.getUTCDate().toString();
  $scope.loader = true;
  imageService.getjsonData(earthdate, apikey.key).then((data) => {$scope.loader= false; $scope.photos = data.data.photos;}, ()=>{$scope.loader=false; console.log("error!")});
}
})
