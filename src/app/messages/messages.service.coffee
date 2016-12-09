# Messages service used to communicate with Messages REST endpoints
angular.module('identifiAngular').factory 'Messages', [
  '$resource'
  '$location'
  ($resource, $location) ->
    path = $location.absUrl()
    host = if path.match /\/ipfs\// then 'http://identi.fi/' else '' # TODO: http mixed content
    $resource host + 'api/messages/:id'
]
