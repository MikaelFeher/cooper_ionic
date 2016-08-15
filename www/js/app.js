angular.module('starter', ['ionic', 'starter.controllers', 'ng-token-auth'])
  .constant('API_URL', 'https://ca-cooper-api.herokuapp.com/api/v1')

.config(function ($authProvider, API_URL) {
   $authProvider.configure({
     apiUrl: API_URL
   });
 })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about/about.html'
      }
    }
  })
  .state('app.registration', {
    url: '/registration',
    views: {
      'menuContent': {
        templateUrl: 'templates/registration/registration.html',
        controller: 'SignupController'
      }
    }
  })
  .state('app.test', {
   url: '/test',
   views: {
     'menuContent': {
       templateUrl: 'templates/test/test.html',
       controller: 'TestController'
     }
   }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/about');
});
