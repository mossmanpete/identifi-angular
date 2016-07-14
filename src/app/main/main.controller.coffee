'use strict'
angular.module('identifiAngular').controller 'MainController', [
  '$scope'
  '$rootScope'
  '$location'
  '$http'
  '$state'
  'Identities',
  'config',
  'localStorageService'
  '$uibModal'

  #'Authentication'
  #'Menus'
  #'Persona'
  ($scope, $rootScope, $location, $http, $state, Identities, config, localStorageService, $uibModal) -> # Authentication, Menus, Persona
    ###
    Persona.watch
      loggedInUser: Authentication.user.email
      onlogin: (assertion) ->
        $http.post('/auth/persona', assertion: assertion).then ->
          location.reload()
          # FIXME
                        onlogout: ->
    ###

    # set authentication
    $scope.authentication = {} # Authentication
    token = $location.search().token
    if token
      jws = KJUR.jws.JWS.parse(token).payloadObj
      $scope.authentication.token = token
      $scope.authentication.user = jws.user
      localStorageService.set('token', token)
      previousState = localStorageService.get('state') || 'identities.list'
      previousStateParams = localStorageService.get('stateParams') || {}
      $state.go(previousState, previousStateParams)
    else
      token = localStorageService.get('token')
      if token
        jws = KJUR.jws.JWS.parse(token).payloadObj
        $scope.authentication.token = token
        $scope.authentication.user = jws.user

    $scope.query = {}
    $scope.query.term = ''
    $scope.previousSearchValue = ''
    $scope.ids = { list: [] }

    $scope.phoneRegex = /^\+?\d+$/

    $scope.setPageTitle = (title) ->
      $rootScope.pageTitle = 'Identifi'
      if (title)
        $rootScope.pageTitle += ' - ' + title

    $http.get('/api').then (res) ->
      $scope.nodeInfo = res.data
      if res.data.keyID
        $scope.filters.viewpoint_name = 'keyID'
        $scope.filters.viewpoint_value = res.data.keyID
    .finally ->
      $scope.apiReady = true

    $scope.newMessage =
      rating: 1
      comment: ''
    $scope.newVerification =
      type: ''
      value: ''
    # Create new Message
    $scope.create = (event, params, id) ->
      event.stopPropagation() if event
      # Create new Message object
      message =
        context: 'identifi'

      if params.type == 'rating'
        angular.extend message,
          maxRating: 3
          minRating: -3
      angular.extend message, params
      options =
        headers:
          'Authorization': 'Bearer ' + $scope.authentication.token
      r = $http.post('/api/messages', message, options)
      r.then ((response) ->
        # Clear form fields
        $scope.newMessage.comment = ''
        $scope.newMessage.rating = 1
        $scope.newVerification.type = ''
        $scope.newVerification.value = ''
        $scope.$root.$broadcast 'MessageAdded',
          message: response.data
          id: id
        return
      ), (errorResponse) ->
        $scope.error = errorResponse.data || JSON.stringify(errorResponse)
        return
      return r

    $scope.addAttribute = ->
      $location.path '#/identities/create/' + $scope.query.term

    $scope.login = ->
      $scope.filters.max_distance = -1 # because the user doesn't have a trust index yet

    $scope.logout = ->
      $scope.filters.max_distance = 0
      $scope.authentication = {}
      localStorageService.clearAll()
      $state.go('identities.list')

    $scope.removeFocus = (event) ->
      event.currentTarget.blur()

    $scope.logoClicked = ->
      if $state.is 'identities.list'
        if $scope.query.term != ''
          $scope.query.term = ''
          $scope.search()
      else
        $scope.query.term = ''
        $state.go 'identities.list'

    $scope.setMsgRawData = (msg) ->
      showRawData =
        hash: msg.hash
        data: msg.data
        priority: msg.priority
        jws: msg.jws
      msg.strData = JSON.stringify(showRawData, undefined, 2)

    $scope.openMessage = (event, message, size) ->
      t = event.target
      return if angular.element(t).closest('a').length
      $scope.setMsgRawData(message)
      $scope.message = message
      modalInstance = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/messages/show.modal.html'
        controller: 'MainController'
        size: size
        scope: $scope
      )
      $scope.$on '$stateChangeStart', ->
        modalInstance.close()

    $scope.filters = $scope.filters or config.defaultFilters

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
        msg.gravatar = CryptoJS.MD5(msg.author_email || msg.data.author[0][1]).toString()
        msg.linkToAuthor = msg.data.author[0]
        i = undefined
        i = 0
        smallestIndex = 1000
        while i < msg.data.author.length
          index = config.uniqueAttributeTypes.indexOf(msg.data.author[i][0])
          if index > -1 and index < smallestIndex
            smallestIndex = index
            msg.linkToAuthor = msg.data.author[i]
          else if !msg.author_name and msg.data.author[i][0] in ['name', 'nickname']
            msg.author_name = msg.data.author[i][1]
          i++
        msg.linkToRecipient = msg.data.recipient[0]
        i = 0
        smallestIndex = 1000
        while i < msg.data.recipient.length
          index = config.uniqueAttributeTypes.indexOf(msg.data.recipient[i][0])
          if index > -1 and index < smallestIndex
            smallestIndex = index
            msg.linkToRecipient = msg.data.recipient[i]
          else if !msg.recipient_name and msg.data.recipient[i][0] in ['name', 'nickname']
            msg.recipient_name = msg.data.recipient[i][1]
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
              msg.bgColor = 'background-color: #fcf8e3;'
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
      searchValue = query or $scope.query.term or ''
      if searchValue != $scope.previousSearchValue
        $scope.filters.offset = 0
        $scope.ids.list = []
        $scope.ids.finished = false
      $scope.previousSearchValue = searchValue
      limit = limit or 20
      q = Identities.query angular.extend({ search_value: searchValue },
          { limit: limit, offset: $scope.filters.offset }, if $scope.filters.max_distance > -1 then $scope.viewpoint else {}), (identities) ->
        if !$scope.ids.list or $scope.filters.offset is 0
          $scope.ids.list = []
        angular.forEach identities, (row) ->
          identity = {}
          smallestIndex = 1000
          angular.forEach row, (attr) ->
            dist = parseInt(attr.dist)
            if !isNaN(dist) and (identity.distance == undefined or (0 <= dist < identity.distance))
              identity.distance = dist
            if identity.pos == undefined and parseInt(attr.pos) > 0
              identity.pos = attr.pos
            if identity.neg == undefined and parseInt(attr.neg) > 0
              identity.neg = attr.neg
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
            index = config.uniqueAttributeTypes.indexOf(attr.attr)
            if !identity.linkTo
              identity.linkTo = { type: attr.attr, value: attr.val }
            if index > -1 and index < smallestIndex
              identity.linkTo = { type: attr.attr, value: attr.val }
              smallestIndex = index
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
      , (error) ->
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
          $scope.query.term = ''
          $scope.search()
        when 33, 34, 35, 36, 37, 39
        else
          el = angular.element(event.currentTarget)
          clearTimeout $scope.timer
          wait = setTimeout((->
            $scope.query.term = el.val()
            $scope.search()
            return
          ), 300)
          $scope.timer = wait
          break

    $scope.dropdownSearchSelect = (item) ->
      $state.go('identities.show', { type: item.linkTo.type, value: item.linkTo.value })
      $scope.query.term = ''
]
