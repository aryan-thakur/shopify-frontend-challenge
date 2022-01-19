app.directive('post', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './AngularJS/Directives/Views/post.html',
    link: function(scope, element, attrs) {
      scope.openImage = (url) => {window.open(url, '_blank');}
    },
    transclude: true
  };
});
