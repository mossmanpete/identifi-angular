'use strict'
# Identities controller
angular.module('identifiAngular').controller 'IdentitiesController', [
  '$scope'
  '$state'
  '$rootScope'
  '$window'
  '$stateParams'
  '$location'
  '$http'
  # 'Authentication'
  'Identities'
  ($scope, $state, $rootScope, $window, $stateParams, $location, $http, Identities) -> #, Authentication
    $scope.authentication = {} # Authentication
    $scope.tabs = [
      { active: true }
      { active: false }
      { active: false }
    ]
    $scope.info = {}
    $scope.sent = []
    $scope.received = []
    $scope.trustpaths = []
    $rootScope.filters = $rootScope.filters or {} # ApplicationConfiguration.defaultFilters
    angular.extend $rootScope.filters,
      receivedOffset: 0
      sentOffset: 0
    if $scope.authentication.user
      $rootScope.viewpoint =
        viewpointName: $scope.authentication.user.displayName
        viewpointType: 'email'
        viewpointValue: $scope.authentication.user.email
    else
      $rootScope.viewpoint = $rootScope.viewpoint or ['keyID', '/pbxjXjwEsojbSfdM3wGWfE24F4fX3GasmoHXY3yYPM='] # TODO: default viewpoint
    $scope.newAttribute =
      type: ''
      value: $stateParams.value
    $scope.queryTerm = ''

    $scope.goToID = (type, value) ->
      $location.path '/identities/' + encodeURIComponent(type) + '/' + encodeURIComponent(value)
      return

    $scope.collapseLevel = {}
    $scope.collapseFilters = $window.innerWidth < 992

    processMessages = (messages) ->
      for key of messages
        if isNaN(key)
          continue
        msg = messages[key]
        msg.data = KJUR.jws.JWS.parse(msg.jws).payloadObj
        gravatarEmail = msg.authorEmail
        if msg.authorEmail == ''
          gravatarEmail = msg.data.author[0][0] + msg.data.author[0][1]
        msg.gravatar = CryptoJS.MD5(gravatarEmail).toString()
        msg.linkToAuthor = msg.data.author[0]
        i = undefined
        i = 0
        while i < msg.data.author.length
          if true # ApplicationConfiguration.uniqueAttributeTypes.indexOf(msg.data.author[i][0]) > -1
            msg.linkToAuthor = msg.data.author[i]
            break
          i++
        msg.linkToRecipient = msg.data.recipient[0]
        i = 0
        while i < msg.data.recipient.length
          if true # ApplicationConfiguration.uniqueAttributeTypes.indexOf(msg.data.recipient[i][0]) > -1
            msg.linkToRecipient = msg.data.recipient[i]
            break
          i++
        signedData = msg.data
        alpha = undefined
        msg.panelStyle = 'panel-default'
        msg.iconStyle = ''
        msg.hasSuccess = ''
        msg.bgColor = ''
        msg.iconCount = new Array(1)
        switch signedData.type
          when 'verify_identity'
            msg.iconStyle = 'glyphicon glyphicon-ok'
            msg.hasSuccess = 'has-success'
          when 'connection'
            msg.iconStyle = 'glyphicon glyphicon-ok'
            msg.hasSuccess = 'has-success'
          when 'unverify_identity'
            msg.iconStyle = 'glyphicon glyphicon-remove'
            msg.hasSuccess = 'has-error'
          when 'rating'
            rating = signedData.rating
            neutralRating = (signedData.minRating + signedData.maxRating) / 2
            maxRatingDiff = signedData.maxRating - neutralRating
            minRatingDiff = signedData.minRating - neutralRating
            if rating > neutralRating
              msg.panelStyle = 'panel-success'
              msg.iconStyle = 'glyphicon glyphicon-thumbs-up'
              msg.iconCount = if maxRatingDiff < 2 then msg.iconCount else new Array(Math.ceil(3 * rating / maxRatingDiff))
              alpha = (rating - neutralRating - 0.5) / maxRatingDiff / 1.25 + 0.2
              msg.bgColor = 'background-image:linear-gradient(rgba(223,240,216,' + alpha +
                ') 0%, rgba(208,233,198,' + alpha + ') 100%);background-color: rgba(223,240,216,' + alpha + ');'
            else if rating < neutralRating
              msg.panelStyle = 'panel-danger'
              msg.iconStyle = 'glyphicon glyphicon-thumbs-down'
              msg.iconCount = if minRatingDiff > -2 then msg.iconCount else new Array(Math.ceil(3 * rating / minRatingDiff))
              alpha = (rating - neutralRating + 0.5) / minRatingDiff / 1.25 + 0.2
              msg.bgColor = 'background-image:linear-gradient(rgba(242,222,222,' + alpha +
                ') 0%, rgba(235,204,204,' + alpha + ') 100%);background-color: rgba(242,222,222,' + alpha + ');'
            else
              msg.panelStyle = 'panel-warning'
              msg.iconStyle = 'glyphicon glyphicon-question-sign'
      return

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
      $rootScope.pageTitle = ''
      Identities.query angular.extend({ search_value: query or $scope.queryTerm or '' },
          { limit: if limit then limit else 20 }, if $rootScope.filters.maxDistance > -1 then $rootScope.viewpoint else {}), (identities) ->
        $scope.identities = []
        if identities.length > 0
          identities.activeKey = 0
          identities.active = true
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
        console.log $scope.identities


    messagesAdded = false
    $scope.$on 'MessageAdded', (event, args) ->
      if args.message.data.type == 'verify_identity'
        args.id.confirmations += 1
        if $scope.connections.indexOf(args.id) == -1
          $scope.connections.push args.id
      else if args.message.data.type == 'unverify_identity'
        args.id.refutations += 1
        if $scope.connections.indexOf(args.id) == -1
          $scope.connections.push args.id
      else if args.message.data.type == 'rating'
        if messagesAdded
          $scope.received.shift()
        $scope.received.unshift args.message
        messagesAdded = true
        processMessages $scope.received

    $scope.$on 'SearchKeydown', (event, args) ->
      switch (if args.event then args.event.which else -1)
        when 38
          args.event.preventDefault()
          if $scope.identities.activeKey > 0
            $scope.filteredIdentities[$scope.identities.activeKey].active = false
            $scope.filteredIdentities[$scope.identities.activeKey - 1].active = true
            $scope.identities.activeKey--
          scrollTo document.getElementById('result' + $scope.identities.activeKey)
        when 40
          args.event.preventDefault()
          if $scope.identities.activeKey < ($scope.filteredIdentities.length || 0) - 1
            $scope.filteredIdentities[$scope.identities.activeKey].active = false
            $scope.filteredIdentities[$scope.identities.activeKey + 1].active = true
            $scope.identities.activeKey++
          scrollTo document.getElementById('result' + $scope.identities.activeKey)
        when 13
          args.event.preventDefault()
          id = $scope.identities[$scope.identities.activeKey]
          $state.go 'identities.show', { type: id.linkTo.type, value: id.linkTo.value }
        when -1
          clearTimeout $scope.timer
          $scope.queryTerm = ''
          $scope.search()
        when 33, 34, 35, 36, 37, 39
        else
          el = angular.element(args.event.currentTarget)
          clearTimeout $scope.timer
          wait = setTimeout((->
            $scope.queryTerm = el.val()
            $scope.search()
            return
          ), 300)
          $scope.timer = wait
          break

    $scope.$on 'SearchChanged', (event, args) ->
      $scope.search args.queryTerm, args.limit

    $scope.getConnections = ->
      $scope.connections = Identities.connections(angular.extend($rootScope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
      }, if $rootScope.filters.maxDistance > -1 then $rootScope.viewpoint else {}), ->
        mostConfirmations = if $scope.connections.length > 0 then $scope.connections[0].confirmations else 1
        $scope.connections.unshift
          type: $scope.idType
          value: $scope.idValue
          confirmations: 1
          refutations: 0
          isCurrent: true
        for key of $scope.connections
          conn = $scope.connections[key]
          switch conn.type
            when 'email'
              conn.iconStyle = 'glyphicon glyphicon-envelope'
              conn.btnStyle = 'btn-success'
              conn.link = 'mailto:' + conn.value
              conn.quickContact = true
              $scope.info.email = $scope.info.email or conn.value
            when 'bitcoin_address', 'bitcoin'
              conn.iconStyle = 'fa fa-bitcoin'
              conn.btnStyle = 'btn-primary'
              conn.link = 'https://blockchain.info/address/' + conn.value
              conn.quickContact = true
            when 'gpg_fingerprint', 'gpg_keyid'
              conn.iconStyle = 'fa fa-key'
              conn.btnStyle = 'btn-default'
              conn.link = 'https://pgp.mit.edu/pks/lookup?op=get&search=0x' + conn.value
            when 'account'
              conn.iconStyle = 'fa fa-at'
            when 'nickname'
              $scope.info.nickname = $scope.info.nickname or conn.value
              conn.iconStyle = 'glyphicon glyphicon-font'
            when 'name'
              $scope.info.name = $scope.info.name or conn.value
              conn.iconStyle = 'glyphicon glyphicon-font'
            when 'tel', 'phone'
              conn.iconStyle = 'glyphicon glyphicon-earphone'
              conn.btnStyle = 'btn-success'
              conn.link = 'tel:' + conn.value
              conn.quickContact = true
            when 'url'
              conn.link = conn.value
              if conn.value.indexOf('facebook.com/') > -1
                conn.iconStyle = 'fa fa-facebook'
                conn.btnStyle = 'btn-facebook'
                conn.quickContact = true
              else if conn.value.indexOf('twitter.com/') > -1
                conn.iconStyle = 'fa fa-twitter'
                conn.btnStyle = 'btn-twitter'
                conn.quickContact = true
                $scope.getPhotosFromTwitter conn.value
              else if conn.value.indexOf('plus.google.com/') > -1
                conn.iconStyle = 'fa fa-google-plus'
                conn.btnStyle = 'btn-google-plus'
                conn.quickContact = true
              else if conn.value.indexOf('linkedin.com/') > -1
                conn.iconStyle = 'fa fa-linkedin'
                conn.btnStyle = 'btn-linkedin'
              else if conn.value.indexOf('github.com/') > -1
                conn.iconStyle = 'fa fa-github'
                conn.btnStyle = 'btn-github'
              else
                conn.iconStyle = 'glyphicon glyphicon-link'
                conn.btnStyle = 'btn-default'
          if conn.confirmations + conn.refutations > 0
            percentage = conn.confirmations * 100 / (conn.confirmations + conn.refutations)
            if percentage >= 80
              alpha = conn.confirmations / mostConfirmations * 0.7 + 0.3
              conn.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
            else if percentage >= 60
              conn.rowClass = 'warning'
            else
              conn.rowClass = 'danger'
          $scope.hasQuickContacts = $scope.hasQuickContacts or conn.quickContact
        $scope.getPhotosFromGravatar()

        $scope.connectionClicked = (event, id) ->
          id.collapse = !id.collapse
          id.connecting_msgs = id.connecting_msgs or Identities.connecting_msgs(angular.extend({
            idType: $scope.idType
            idValue: $scope.idValue
            target_name: id.name
            target_value: id.value
          }, $rootScope.filters), ->
            for key of id.connecting_msgs
              if isNaN(key)
                i++
                continue
              msg = id.connecting_msgs[key]
              msg.data = KJUR.jws.JWS.parse(msg.jws).payloadObj
              msg.gravatar = CryptoJS.MD5(msg.authorEmail or msg.data.author[0][1]).toString()
              msg.linkToAuthor = msg.data.author[0]
              i = undefined
              i = 0
              while i < msg.data.author.length
                if true # ApplicationConfiguration.uniqueAttributeTypes.indexOf(msg.data.author[i][0] > -1)
                  msg.linkToAuthor = msg.data.author[i]
                  break
                i++
            return
          )
          return

        $scope.getStats()
        $scope.getReceivedMsgs 0
        $scope.getSentMsgs 0
        return
      )
      return

    $scope.getStats = ->
      $scope.stats = Identities.stats(angular.extend({}, $rootScope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
      }, if $rootScope.filters.maxDistance > -1 then ['a', 'b'] else 0), -> # then ApplicationConfiguration.defaultViewpoint
        $scope.info.email = $scope.info.email or $scope.stats.email
        return
      )
      return

    $scope.getSentMsgs = (offset) ->
      if !isNaN(offset)
        $rootScope.filters.sentOffset = offset
      sent = Identities.sent(angular.extend($rootScope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
        msgType: $rootScope.filters.msgType
        offset: $rootScope.filters.sentOffset
        limit: $rootScope.filters.limit
      }, 0), -> # if $rootScope.filters.maxDistance > -1 then ApplicationConfiguration.defaultViewpoint else 0
        processMessages sent
        if $rootScope.filters.sentOffset == 0
          $scope.sent = sent
        else
          for key of sent
            if isNaN(key)
              i++
              continue
            $scope.sent.push sent[key]
        $scope.sent.$resolved = sent.$resolved
        $rootScope.filters.sentOffset = $rootScope.filters.sentOffset + sent.length
        if sent.length < $rootScope.filters.limit
          $scope.sent.finished = true
        return
      )
      if offset == 0
        $scope.sent = {}
      $scope.sent.$resolved = sent.$resolved
      return

    $scope.getReceivedMsgs = (offset) ->
      if !isNaN(offset)
        $rootScope.filters.receivedOffset = offset
      received = Identities.received(angular.extend($rootScope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
        msgType: $rootScope.filters.msgType
        offset: $rootScope.filters.receivedOffset
        limit: $rootScope.filters.limit
      }, 0), -> # if $rootScope.filters.maxDistance > -1 then ApplicationConfiguration.defaultViewpoint else 0
        processMessages received
        if $rootScope.filters.receivedOffset == 0
          $scope.received = received
        else
          for key of received
            if isNaN(key)
              i++
              continue
            $scope.received.push received[key]
        $scope.received.$resolved = received.$resolved
        $rootScope.filters.receivedOffset = $rootScope.filters.receivedOffset + received.length
        if received.length < $rootScope.filters.limit
          $scope.received.finished = true
        return
      )
      if offset == 0
        $scope.received = {}
      $scope.received.$resolved = received.$resolved
      return

    $scope.getPhotosFromTwitter = (profileUrl) ->
      if !$scope.isUniqueType
        return

      ###
            if (Authentication.user.providerData.profile_banner_url) {
              return { 'background-image': 'url(' + Authentication.user.providerData.profile_banner_url + ')' };
            }
      ###

      null

    $scope.getPhotosFromGravatar = ->
      email = $scope.info.email or $scope.idValue
      $scope.gravatar = CryptoJS.MD5(email).toString()
      if !$scope.isUniqueType
        return
      $scope.profilePhotoUrl = $scope.profilePhotoUrl or 'http://www.gravatar.com/avatar/' + $scope.gravatar + '?d=retro&s=210'
      return

    # Find existing Attribute

    $scope.findOne = ->
      $scope.idType = $stateParams.type
      $scope.idValue = $stateParams.value
      $scope.isUniqueType = true # ApplicationConfiguration.uniqueAttributeTypes.indexOf($scope.idType) > -1
      if !$scope.isUniqueType
        $scope.tabs[2].active = true
      $rootScope.pageTitle = ' - ' + $scope.idValue
      $scope.getConnections()
      allPaths = Identities.trustpaths
        idType: $rootScope.viewpoint[0]
        idValue: $rootScope.viewpoint[1]
        target_name: $scope.idType
        target_value: $scope.idValue
      , ->
        if allPaths.length == 0
          return
        shortestPath = Object.keys(allPaths[0]).length
        angular.forEach allPaths[0], (value, i) ->
          set = {}
          row = []
          j = 0
          while j < allPaths.length
            if Object.keys(allPaths[j]).length > shortestPath
              break
            id = allPaths[j][i]
            id.gravatar = CryptoJS.MD5(id[1]).toString()
            set[id[0] + id[1]] = id
            j++
          for key of set
            row.push set[key]
          $scope.trustpaths.push row
          return
        # Names for trustpath nodes
        $scope.trustpaths[0][0].name = name: $rootScope.viewpoint.viewpointName
        $scope.trustpaths[$scope.trustpaths.length - 1][0].name = name: $scope.info.name

        setIdName = (res) ->
          id.name = res.name
          return

        i = 1
        while i < $scope.trustpaths.length - 1
          n = 0
          for key of $scope.trustpaths[i]
            id = $scope.trustpaths[i][key]
            id.name = Identities.getname(
              idType: id[0]
              idValue: id[1])
            if ++n == 3
              break
          i++
        return
      return

    $scope.setFilters = (filters) ->
      angular.extend $rootScope.filters, filters
      angular.extend $rootScope.filters,
        offset: 0
        receivedOffset: 0
        sentOffset: 0
      $scope.getConnections()
      return

    return
]
