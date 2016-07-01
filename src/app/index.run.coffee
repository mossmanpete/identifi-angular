angular.module 'identifiAngular'
  .run ($log, $rootScope, $state, $stateParams, localStorageService) ->
    'ngInject'
    $log.debug 'runBlock end'
    $rootScope.$on '$stateChangeSuccess', (event, current, previous) ->
      $rootScope.pageTitle = $state.current.title || 'Identifi'
      localStorageService.set('state', current.name)
      localStorageService.set('stateParams', $stateParams)
