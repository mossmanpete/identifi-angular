'use strict'
angular.module('identifiAngular').controller 'MainController', [
  '$scope'
  '$location'
  '$http'
  #'Authentication'
  #'Menus'
  #'Persona'
  ($scope, $location, $http) -> # Authentication, Menus, Persona
    ###
    Persona.watch
      loggedInUser: Authentication.user.email
      onlogin: (assertion) ->
        $http.post('/auth/persona', assertion: assertion).then ->
          location.reload()
          # FIXME
          return
        return
      onlogout: ->
    $scope.query = term: ''
    ###

    $scope.addIdentifier = ->
      $location.path '/id/create/' + $scope.query.term
      return

    $scope.login = ->
      Persona.request()
      return

    $scope.logout = ->
      Persona.logout()
      return

    $scope.logoClicked = ->
      $scope.query.term = ''
      $scope.searchKeydown()
      return

    ###
    $scope.authentication = Authentication
    if Authentication.user
      if Authentication.user.provider == 'persona'
        Authentication.user.idType = 'email'
      else
        Authentication.user.idType = 'url'
      switch Authentication.user.provider
        when 'persona'
          Authentication.user.idValue = Authentication.user.email
        when 'twitter'
          Authentication.user.idValue = 'https://twitter.com/' + Authentication.user.username
        else
          Authentication.user.idValue = Authentication.user.providerData.link
          break
    ###

    $scope.isCollapsed = false
    # $scope.menu = Menus.getMenu('topbar')

    $scope.toggleCollapsibleMenu = ->
      $scope.isCollapsed = !$scope.isCollapsed
      return

    # Collapsing the menu after navigation
    $scope.$on '$stateChangeSuccess', ->
      $scope.isCollapsed = false
      return

    $scope.searchChanged = ->
      $scope.$root.$broadcast 'StartSearch', queryTerm: $scope.query.term
      return

    $scope.isActive = (viewLocation) ->
      viewLocation == $location.path()

    $scope.searchKeydown = (e) ->
      $scope.$root.$broadcast 'SearchKeydown', event: e
      return

    return
]
