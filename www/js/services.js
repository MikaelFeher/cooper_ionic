angular.module('starter.services', [])

.factory('performaceData', function ($resource, API_URL) {
  return $resource(API_URL + '/data', {});
});
