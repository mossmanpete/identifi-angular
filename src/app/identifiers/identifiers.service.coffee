# Identifiers service used to communicate Identifiers REST endpoints
angular.module('identifiAngular').factory 'Identifiers', [
  '$resource'
  ($resource) ->
    $resource 'api/id/:idType/:idValue/:method', {},
      connections:
        action: 'GET'
        params: method: 'connections'
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
        isArray: true
]
