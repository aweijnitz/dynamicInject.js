var app = angular.module('app', []);

/**
 * Our mighty service.
 */
app.service('greeter', function(){
    this.greet = function(){
        return "Original Greet! Hello!";
    }
});

/**
 * Controls the injection of mock services and restoration of original implementations
 */
app.controller("InjectionController", function ($scope) {
    $scope.injectActive = false;
    $scope.toggleInject = function () {
      if($scope.injectActive) {
          // Replace service with mock
          app.service('greeter', function(){
              this.greet = function(){
                  return "Mock Greet! Allo!";
              }
          });
      } else {
          // Restore original service (re-inject)
      }
    };
});

app.controller("UserGreetServiceController", function (greeter, $scope) {
    $scope.greet = "";
    $scope.invokeServiceGreeter = function () {
        $scope.greet = greeter.greet();
    }
});


/**
 * Helper. Exposes current Angular version
 */
app.controller("VersionDisplay", function () {
    this.version = angular.version;
});
