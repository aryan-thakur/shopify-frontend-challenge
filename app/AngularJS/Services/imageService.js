app.factory('imageService', ['$http', function($http) {
  let apiObj = {};
  let apiEndpointBase = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";
  apiObj.getjsonData = (earthdate, key) => {
  let apiEndpoint = apiEndpointBase + 'earth_date=' + earthdate;
  apiEndpoint = apiEndpoint + "&api_key=" + key
  return $http.get(apiEndpoint, {withCredentials: false})
  .then((result) => {return result;},() => {return {};});};
  return apiObj;
}]);
