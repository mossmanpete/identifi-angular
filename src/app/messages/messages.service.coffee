# Messages service used to communicate with Messages REST endpoints
angular.module('identifiAngular').factory 'Messages', [
  '$resource'
  ($resource) ->
    $resource 'api/messages/:id',
      update:
        method: 'PUT'
      get:
        method: 'GET'
        isArray: false
]
