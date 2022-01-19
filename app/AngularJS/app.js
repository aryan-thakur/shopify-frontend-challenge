var app = angular.module("mainApp", ["ngRoute", "angularCSS"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'mainController',
      templateUrl: './AngularJS/Views/mainView.html',
      css: './Styles/mainStyle.css'
    })
    .otherwise({
      redirectTo: '/'
    });
});
app.constant('apikey', {key: 'T4zUlE3JA0B8FLsMYaXeqTlkJUQvADFs1IxkSqL4'});
//need to upload this key to github for this app to work on github pages
