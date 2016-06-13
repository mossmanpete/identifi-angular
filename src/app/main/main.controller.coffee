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
    $scope.previousSearchValue = ''
    $scope.filters = config.defaultFilters
    $scope.ids = { list: [] }

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

    $scope.filters = $scope.filters or config.defaultFilters
    if $scope.authentication.user
      $scope.viewpoint =
        viewpointName: $scope.authentication.user.displayName
        viewpointType: 'email'
        viewpointValue: $scope.authentication.user.email
    else
      $scope.viewpoint = $scope.viewpoint or config.defaultViewpoint


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
        msg.gravatar = CryptoJS.MD5(msg.data.author[0][1]).toString()
        msg.linkToAuthor = msg.data.author[0]
        i = undefined
        i = 0
        while i < msg.data.author.length
          if config.uniqueAttributeTypes.indexOf(msg.data.author[i][0]) > -1
            msg.linkToAuthor = msg.data.author[i]
          else if msg.data.author[i][0] in ['name', 'nickname']
            msg.authorName = msg.data.author[i][1]
          i++
        msg.linkToRecipient = msg.data.recipient[0]
        i = 0
        while i < msg.data.recipient.length
          if config.uniqueAttributeTypes.indexOf(msg.data.recipient[i][0]) > -1
            msg.linkToRecipient = msg.data.recipient[i]
          else if msg.data.recipient[i][0] in ['name', 'nickname']
            msg.recipientName = msg.data.recipient[i][1]
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

    scrollTo = (el) ->
      if !el
        return
      pos = el.getBoundingClientRect()
      if pos.top
        if pos.top - 60 < window.pageYOffset
          window.scrollTo 0, pos.top - 60
        else if pos.bottom > window.pageYOffset + (window.innerHeight or document.documentElement.clientHeight)
          window.scrollTo 0, pos.bottom - (window.innerHeight or document.documentElement.clientHeight) + 15
      return

    $scope.search = (query, limit) ->
      searchValue = query or $scope.queryTerm or ''
      if searchValue != $scope.previousSearchValue
        $scope.filters.offset = 0
        $scope.ids.list = []
        $scope.ids.finished = false
      $scope.previousSearchValue = searchValue
      $rootScope.pageTitle = ''
      limit = limit or 20
      q = Identities.query angular.extend({ search_value: searchValue },
          { limit: limit, offset: $scope.filters.offset }, if $scope.filters.max_distance > -1 then $scope.viewpoint else {}), (identities) ->
        $scope.ids.list = $scope.ids.list or []
        angular.forEach identities, (row) ->
          identity = {}
          angular.forEach row, (attr) ->
            if identity.distance == undefined and parseInt(attr.dist) >= 0
              identity.distance = attr.dist
              console.log attr.dist
            switch attr.attr
              when 'email'
                identity.email = attr.val
                identity.gravatar = CryptoJS.MD5(attr.val).toString()
              when 'name'
                identity.name = attr.val
              when 'nickname'
                identity.nickname = attr.val
                identity.name = attr.val if !identity.name
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
            identity.name = row[0].val
          $scope.ids.list.push(identity)
        if identities.length > 0
          $scope.ids.activeKey = 0
          $scope.ids.list[0].active = true
        $scope.filters.offset = $scope.filters.offset + identities.length
        if identities.length < limit
          $scope.ids.finished = true
      $scope.ids.query = q
      return q.$promise.then ->
        return $scope.ids.list

    $scope.searchKeydown = (event) ->
      console.log "searchKeydown"
      switch (if event then event.which else -1)
        when 38
          event.preventDefault()
          if $scope.ids.activeKey > 0
            $scope.ids.list[$scope.ids.activeKey].active = false
            $scope.ids.list[$scope.ids.activeKey - 1].active = true
            $scope.ids.activeKey--
          scrollTo document.getElementById('result' + $scope.ids.activeKey)
        when 40
          event.preventDefault()
          if $scope.ids.activeKey < ($scope.ids.list.length || 0) - 1
            $scope.ids.list[$scope.ids.activeKey].active = false
            $scope.ids.list[$scope.ids.activeKey + 1].active = true
            $scope.ids.activeKey++
          scrollTo document.getElementById('result' + $scope.ids.activeKey)
        when 13
          event.preventDefault()
          id = $scope.ids.list[$scope.ids.activeKey]
          $state.go 'identities.show', { type: id.linkTo.type, value: id.linkTo.value }
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

    $scope.dropdownSearchSelect = (item) ->
      $state.go('identities.show', { type: item.linkTo.type, value: item.linkTo.value })
      $scope.queryTerm = ''
]
