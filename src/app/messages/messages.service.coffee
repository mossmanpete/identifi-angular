# Messages service used to communicate with Messages REST endpoints
angular.module('identifiAngular').factory 'Messages', [
  '$resource'
  '$location'
  ($resource, $location) ->
    path = $location.absUrl()
    host = if path.match /\/ip[nf]s\// then 'https://identi.fi/' else ''
    $resource host + 'api/messages/:id'
]
