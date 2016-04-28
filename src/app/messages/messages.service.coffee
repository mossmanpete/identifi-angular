# Messages service used to communicate with Messages REST endpoints
angular.module('identifiAngular').factory 'Messages', [
  '$resource'
  ($resource) ->
    $resource 'api/messages/:messageId', { messageId: '@_id' },
      update:
        method: 'PUT'
]
