# Identities service used to communicate Identities REST endpoints
angular.module('identifiAngular').factory 'Identities', [
  '$resource'
  ($resource) ->
    $resource 'api/identities/:idType/:idValue/:method', {},
      connections:
        action: 'GET'
        params: method: 'verifications'
        isArray: true
      sent:
        action: 'GET'
        params: method: 'sent'
        isArray: true
      received:
        action: 'GET'
        params: method: 'received'
        isArray: true
      trustpaths:
        action: 'GET'
        params: method: 'trustpaths'
        isArray: true
      getname:
        action: 'GET'
        params: method: 'getname'
      connecting_msgs:
        action: 'GET'
        params: method: 'connecting_msgs'
        isArray: true
      stats:
        action: 'GET'
        params: method: 'stats'
        isArray: false
]
