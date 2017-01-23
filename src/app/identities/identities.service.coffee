# Identities service used to communicate Identities REST endpoints
angular.module('identifiAngular').factory 'Identities', [
  '$resource', '$location'
  ($resource, $location) ->
    path = $location.absUrl()
    host = if path.match /\/ip[nf]s\// then 'https://identi.fi/' else '' # TODO: http mixed content
    $resource host + 'api/identities/:idType/:idValue/:method', {},
      connecting_msgs:
        action: 'GET'
        params: method: 'connecting_msgs'
        isArray: true
]
