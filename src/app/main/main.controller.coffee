'use strict'
angular.module('identifiAngular').controller 'MainController', [
  '$scope'
  '$rootScope'
  '$location'
  '$http'
  '$state'
  'Identities',

  #'Authentication'
  #'Menus'
  #'Persona'
  ($scope, $rootScope, $location, $http, $state, Identities) -> # Authentication, Menus, Persona
    ###
    Persona.watch
      loggedInUser: Authentication.user.email
      onlogin: (assertion) ->
        $http.post('/auth/persona', assertion: assertion).then ->
          location.reload()
          # FIXME
                        onlogout: ->
    ###
    $scope.query = term: ''

    $scope.addAttribute = ->
      $location.path '#/identities/create/' + $scope.query.term

    $scope.login = ->
      Persona.request()

    $scope.logout = ->
      Persona.logout()

    $scope.logoClicked = ->
      $scope.query.term = ''
      $scope.searchKeydown()

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

    # Collapsing the menu after navigation
    $scope.$on '$stateChangeSuccess', ->
      $scope.isCollapsed = false

    # TODO: move to a common base controller
    $scope.search = (query, limit) ->
      $rootScope.pageTitle = ''
      Identities.query angular.extend({ search_value: query or $scope.queryTerm or '' },
          { limit: if limit then limit else 20 }, if $rootScope.filters.maxDistance > -1 then $rootScope.viewpoint else {}), (res) ->
        $scope.identities = res
        if $scope.identities.length > 0
          $scope.identities.activeKey = 0
          $scope.identities[0].active = true
        i = 0
        while i < $scope.identities.length
          id = $scope.identities[i]
          if !id.linkTo # and ApplicationConfiguration.uniqueAttributeTypes.indexOf(id.name) > -1
            id.linkTo = { type: id.name, value: id.value }
          switch id.name
            when 'email'
              id.email = id.value
              id.gravatar = CryptoJS.MD5(id.value).toString()
            when 'name'
              id.name = id.value
            when 'nickname'
              id.nickname = id.value
            when 'bitcoin', 'bitcoin_address'
              id.bitcoin = id.value
            when 'url'
              if id.value.indexOf('twitter.com/') > -1
                id.twitter = id.value.split('twitter.com/')[1]
              if id.value.indexOf('facebook.com/') > -1
                id.facebook = id.value.split('facebook.com/')[1]
              if id.value.indexOf('plus.google.com/') > -1
                id.googlePlus = id.value.split('plus.google.com/')[1]
          if !id.linkTo
            id.linkTo = { type: id.name, value: id.value }
          if !id.gravatar
            id.gravatar = CryptoJS.MD5(id.value).toString()
          if !id.name
            if id.nickname
              id.name = id.nickname
            else
              id.name = id.value
          i++

    $scope.searchChanged = (query) ->
      $scope.search query, 3

    $scope.searchKeydown = (e) ->
      $scope.$root.$broadcast 'SearchKeydown', event: e

    $scope.dropdownSearchSelect = (suggestion) ->
      console.log(suggestion)
      $state.go('identities.show', { type: suggestion.type, value: suggestion.value })
      $scope.queryTerm = ''
]
