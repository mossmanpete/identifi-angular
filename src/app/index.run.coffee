angular.module 'identifiAngular'
  .run ($log, $rootScope, $state) ->
    'ngInject'
    $log.debug 'runBlock end'
    $rootScope.$on '$stateChangeSuccess', (event, current, previous) ->
      $rootScope.pageTitle = $state.current.title || 'Identifi'
      console.log "routechange"
