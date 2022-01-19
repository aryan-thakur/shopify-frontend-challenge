app.controller('mainController', function($scope, $http, $route, imageService, apikey) {
$scope.loader = false;

//initialize the application with the following date
$scope.init = () => {
  $scope.search = new Date(2022,0,1);
  $scope.triggerCall({});
}

//function to take UTC month and return a month number ranging 1-12 (as a string)
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

//main function to trigger the API call
$scope.triggerCall = (e) => {
  //create a correctly formatted date for the API
  const earthdate = $scope.search.getFullYear().toString()+'-'+makeMonth($scope.search.getUTCMonth())+'-'+$scope.search.getUTCDate().toString();
  //start loading screen
  $scope.loader = true;
  //on response, populate appropriate array if successful. Whether successful or not, stop loading screen once API responds.
  imageService.getjsonData(earthdate, apikey.key).then((data) => {$scope.loader= false; $scope.photos = data.data.photos;}, ()=>{$scope.loader=false; console.log("error!")});
}
})
