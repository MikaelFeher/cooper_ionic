angular.module('starter.controllers', [])

.controller('AppCtrl', function ($rootScope,
                                 $scope,
                                 $ionicModal,
                                 $timeout,
                                 $auth,
                                 $ionicLoading) {

  $rootScope.$on('auth:login-success', function(ev, user) {
    $scope.currentUser = angular.extend(user, $auth.retrieveData('auth_headers'));
  });

  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };
  $scope.doLogin = function () {
    $ionicLoading.show({
     template: 'Logging in...'
    });
    $auth.submitLogin($scope.loginData)
    .then(function (resp) {
      // handle success response
      $ionicLoading.hide();
      $scope.closeLogin();
    })
    .catch(function (error) {
      // handle error response
      $ionicLoading.hide();
      $scope.errorMessage = error;
    });
  };

})
.controller('SignupController', function($scope, $auth) {
  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {
        // handle success response
      })
      .catch(function(resp) {
        // handle error response
      });
  };
})

.controller('TestController', function($scope) {
  $scope.gender = ['Male', 'Female'];
  $scope.ageValues = {
   min: 13,
   max: 60,
   value: 20
  };
  $scope.distanceValues = {
    min: 1000,
    max: 3500,
    value: 1000
  };
  $scope.data = {};
  $scope.calculateCooper = function() {
    var person = new Person({
      gender: $scope.data.gender,
      age: $scope.data.age,
      distance: $scope.data.distance
    });
    person.cooper_result($scope.data);
    $scope.person = person;
    console.log($scope.person);
  };
})

.controller('DataCtrl', function($scope, $stateParams){
  $scope.$on('$ionicView.enter', function () {
    $scope.savedDataCollection = $stateParams.savedDataCollection;
  });
})

.controller('PerformanceCtrl', function($scope, performaceData, $ionicLoading, $ionicPopup){

  $scope.saveData = function(person){
    var data = {performace_data: {data: {message: person.message}}};
    $ionicLoading.show({
      template: 'Saving...'
    });
    performaceData.save(data, function(response){
      $ionicLoading.hide();
      $scope.showAlert('Sucess', response.message);
    }, function(error){
      $ionicLoading.hide();
      $scope.showAlert('Failure', error.statusText);
    });
  };
  $scope.retrieveData = function(){
    $ionicLoading.show({
        template: 'Retrieving data...'
    });
    performaceData.query({}, function(response){
      $state.go('app.data', {savedDataCollection: response.entries});
      $ionicLoading.hide();
    }, function(error){
      $ionicLoading.hide();
      $scope.showAlert('Failure', error.statusText);
    });
  };

  $scope.showAlert = function(message, content) {
    var alertPopup = $ionicPopup.alert({
      title: message,
      template: content
    });
    alertPopup.then(function(res) {
    // Place some action here if needed...
    });
  };
});
