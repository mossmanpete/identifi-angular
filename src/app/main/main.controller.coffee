'use strict'
angular.module('identifiAngular').controller 'MainController', [
  '$scope'
  '$rootScope'
  '$location'
  '$http'
  '$state'
  'Identities',
  'config',

  #'Authentication'
  #'Menus'
  #'Persona'
  ($scope, $rootScope, $location, $http, $state, Identities, config) -> # Authentication, Menus, Persona
    ###
    Persona.watch
      loggedInUser: Authentication.user.email
      onlogin: (assertion) ->
        $http.post('/auth/persona', assertion: assertion).then ->
          location.reload()
          # FIXME
                        onlogout: ->
    ###
    $scope.authentication = {} # Authentication
    $scope.queryTerm = ''
    $scope.filters = config.defaultFilters

    $scope.addAttribute = ->
      $location.path '#/identities/create/' + $scope.queryTerm

    $scope.login = ->
      Persona.request()

    $scope.logout = ->
      Persona.logout()

    $scope.removeFocus = (event) ->
      event.currentTarget.blur()

    $scope.logoClicked = ->
      $scope.queryTerm = ''
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

    $scope.processMessages = (messages, msgOptions) ->
      for key of messages
        if isNaN(key)
          continue
        msg = messages[key]
        msg[k] = v for k, v of msgOptions
        msg.data = KJUR.jws.JWS.parse(msg.jws).payloadObj
        gravatarEmail = msg.authorEmail
        if msg.authorEmail == ''
          gravatarEmail = msg.data.author[0][0] + msg.data.author[0][1]
        msg.gravatar = CryptoJS.MD5(gravatarEmail).toString()
        msg.linkToAuthor = msg.data.author[0]
        i = undefined
        i = 0
        while i < msg.data.author.length
          if config.uniqueAttributeTypes.indexOf(msg.data.author[i][0]) > -1
            msg.linkToAuthor = msg.data.author[i]
            break
          i++
        msg.linkToRecipient = msg.data.recipient[0]
        i = 0
        while i < msg.data.recipient.length
          if config.uniqueAttributeTypes.indexOf(msg.data.recipient[i][0]) > -1
            msg.linkToRecipient = msg.data.recipient[i]
            break
          i++
        signedData = msg.data
        alpha = undefined
        msg.iconStyle = ''
        msg.hasSuccess = ''
        msg.bgColor = ''
        msg.iconCount = new Array(1)
        switch signedData.type
          when 'verify_identity'
            msg.iconStyle = 'glyphicon glyphicon-ok positive'
            msg.hasSuccess = 'has-success'
          when 'connection'
            msg.iconStyle = 'glyphicon glyphicon-ok positive'
            msg.hasSuccess = 'has-success'
          when 'unverify_identity'
            msg.iconStyle = 'glyphicon glyphicon-remove negative'
            msg.hasSuccess = 'has-error'
          when 'rating'
            rating = signedData.rating
            neutralRating = (signedData.minRating + signedData.maxRating) / 2
            maxRatingDiff = signedData.maxRating - neutralRating
            minRatingDiff = signedData.minRating - neutralRating
            if rating > neutralRating
              msg.iconStyle = 'glyphicon glyphicon-thumbs-up positive'
              msg.iconCount = if maxRatingDiff < 2 then msg.iconCount else new Array(Math.ceil(3 * rating / maxRatingDiff))
              alpha = (rating - neutralRating - 0.5) / maxRatingDiff / 1.25 + 0.2
              msg.bgColor = 'background-color: rgba(223,240,216,' + alpha + ');'
            else if rating < neutralRating
              msg.iconStyle = 'glyphicon glyphicon-thumbs-down negative'
              msg.iconCount = if minRatingDiff > -2 then msg.iconCount else new Array(Math.ceil(3 * rating / minRatingDiff))
              alpha = (rating - neutralRating + 0.5) / minRatingDiff / 1.25 + 0.2
              msg.bgColor = 'background-color:rgba(242,222,222,' + alpha + ');'
            else
              msg.iconStyle = 'glyphicon glyphicon-question-sign neutral'

    # Collapsing the menu after navigation
    $scope.$on '$stateChangeSuccess', ->
      $scope.isCollapsed = false

    $scope.search = (query, limit) ->
      $rootScope.pageTitle = ''
      Identities.query angular.extend({ search_value: query or $scope.queryTerm or '' },
          { limit: if limit then limit else 20 }, if $scope.filters.maxDistance > -1 then $rootScope.viewpoint else {}), (identities) ->
        $scope.identities = []
        angular.forEach identities, (row) ->
          identity = {}
          angular.forEach row, (attr) ->
            if !attr.linkTo # and ApplicationConfiguration.uniqueAttributeTypes.indexOf(id.name) > -1
              attr.linkTo = { type: attr.attr, value: attr.val }
            switch attr.attr
              when 'email'
                identity.email = attr.val
                identity.gravatar = CryptoJS.MD5(attr.val).toString()
              when 'name'
                identity.name = attr.val
              when 'nickname'
                identity.nickname = attr.val
              when 'bitcoin', 'bitcoin_address'
                identity.bitcoin = attr.val
              when 'url'
                if attr.val.indexOf('twitter.com/') > -1
                  identity.twitter = attr.val.split('twitter.com/')[1]
                if attr.val.indexOf('facebook.com/') > -1
                  identity.facebook = attr.val.split('facebook.com/')[1]
                if attr.val.indexOf('plus.google.com/') > -1
                  identity.googlePlus = attr.val.split('plus.google.com/')[1]
            if !identity.linkTo
              identity.linkTo = { type: attr.attr, value: attr.val }
            if !identity.gravatar
              identity.gravatar = CryptoJS.MD5(attr.val).toString()
            if !identity.name
              identity.name = attr.val
          $scope.identities.push(identity)
        if identities.length > 0
          identities.activeKey = 0
          identities.active = true
        console.log $scope.identities

    $scope.searchChanged = (query) ->
      console.log "searchChanged"
      $scope.search query, 3

    $scope.searchKeydown = (event) ->
      console.log "searchKeydown"
      switch (if event then event.which else -1)
        when 38
          event.preventDefault()
          if $scope.identities.activeKey > 0
            $scope.filteredIdentities[$scope.identities.activeKey].active = false
            $scope.filteredIdentities[$scope.identities.activeKey - 1].active = true
            $scope.identities.activeKey--
          scrollTo document.getElementById('result' + $scope.identities.activeKey)
        when 40
          event.preventDefault()
          if $scope.identities.activeKey < ($scope.filteredIdentities.length || 0) - 1
            $scope.filteredIdentities[$scope.identities.activeKey].active = false
            $scope.filteredIdentities[$scope.identities.activeKey + 1].active = true
            $scope.identities.activeKey++
          scrollTo document.getElementById('result' + $scope.identities.activeKey)
        when 13
          event.preventDefault()
          id = $scope.identities[$scope.identities.activeKey]
          $state.go 'identities.show', { type: id.linkTo.name, value: id.linkTo.value }
        when -1
          clearTimeout $scope.timer
          $scope.queryTerm = ''
          $scope.search()
        when 33, 34, 35, 36, 37, 39
        else
          el = angular.element(event.currentTarget)
          clearTimeout $scope.timer
          wait = setTimeout((->
            $scope.queryTerm = el.val()
            $scope.search()
            return
          ), 300)
          $scope.timer = wait
          break

    $scope.dropdownSearchSelect = (suggestion) ->
      console.log(suggestion)
      $state.go('identities.show', { type: suggestion.linkTo.type, value: suggestion.linkTo.value })
      $scope.queryTerm = ''
]
