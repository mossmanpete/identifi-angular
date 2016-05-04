'use strict'
# Identifiers controller
angular.module('identifiAngular').controller 'IdentifiersController', [
  '$scope'
  '$rootScope'
  '$window'
  '$stateParams'
  '$location'
  '$http'
  # 'Authentication'
  'Identifiers'
  ($scope, $rootScope, $window, $stateParams, $location, $http, Identifiers) -> #, Authentication
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
      $rootScope.viewpoint = $rootScope.viewpoint # or ApplicationConfiguration.defaultViewpoint
    $scope.newIdentifier =
      type: ''
      value: $stateParams.value
    $scope.queryTerm = ''

    $scope.goToID = (type, value) ->
      $location.path '/id/' + encodeURIComponent(type) + '/' + encodeURIComponent(value)
      return

    $scope.dropdownSearchSelect = (suggestion) ->
      $scope.goToID suggestion.linkTo[0], suggestion.linkTo[1]
      $scope.queryTerm = ''
      return

    $scope.collapseLevel = {}
    $scope.collapseFilters = $window.innerWidth < 992

    processMessages = (messages) ->
      for key of messages
        if isNaN(key)
          continue
        msg = messages[key]
        gravatarEmail = msg.authorEmail
        if msg.authorEmail == ''
          gravatarEmail = msg.data.signedData.author[0][0] + msg.data.signedData.author[0][1]
        msg.gravatar = CryptoJS.MD5(gravatarEmail).toString()
        msg.linkToAuthor = msg.data.signedData.author[0]
        i = undefined
        i = 0
        while i < msg.data.signedData.author.length
          if true # ApplicationConfiguration.uniqueIdentifierTypes.indexOf(msg.data.signedData.author[i][0]) > -1
            msg.linkToAuthor = msg.data.signedData.author[i]
            break
          i++
        msg.linkToRecipient = msg.data.signedData.recipient[0]
        i = 0
        while i < msg.data.signedData.recipient.length
          if true # ApplicationConfiguration.uniqueIdentifierTypes.indexOf(msg.data.signedData.recipient[i][0]) > -1
            msg.linkToRecipient = msg.data.signedData.recipient[i]
            break
          i++
        signedData = msg.data.signedData
        alpha = undefined
        msg.panelStyle = 'panel-default'
        msg.iconStyle = ''
        msg.hasSuccess = ''
        msg.bgColor = ''
        msg.iconCount = new Array(1)
        switch signedData.type
          when 'confirm_connection'
            msg.iconStyle = 'glyphicon glyphicon-ok'
            msg.hasSuccess = 'has-success'
          when 'connection'
            msg.iconStyle = 'glyphicon glyphicon-ok'
            msg.hasSuccess = 'has-success'
          when 'refute_connection'
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

    $scope.dropdownSearch = (query) ->
      $scope.search query, 3
      return

    $scope.search = (query, limit) ->
      $rootScope.pageTitle = ''
      Identifiers.query angular.extend({ idValue: query or $scope.queryTerm or '' },
          { limit: if limit then limit else 20 }, if $rootScope.filters.maxDistance > -1 then $rootScope.viewpoint else {}), (res) ->
        $scope.identifiers = res
        if $scope.identifiers.length > 0
          $scope.identifiers.activeKey = 0
          $scope.identifiers[0].active = true
        i = 0
        while i < $scope.identifiers.length
          id = $scope.identifiers[i]
          if !id.linkTo # and ApplicationConfiguration.uniqueIdentifierTypes.indexOf(id.type) > -1
            id.linkTo = id
          switch id.type
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
            id.linkTo = id
          if !id.gravatar
            id.gravatar = CryptoJS.MD5(id.value).toString()
          if !id.name
            if id.nickname
              id.name = id.nickname
            else
              id.name = id.value
          i++
        return
      return

    messagesAdded = false
    $scope.$on 'MessageAdded', (event, args) ->
      if args.message.data.signedData.type == 'confirm_connection'
        args.id.confirmations += 1
        if $scope.connections.indexOf(args.id) == -1
          $scope.connections.push args.id
      else if args.message.data.signedData.type == 'refute_connection'
        args.id.refutations += 1
        if $scope.connections.indexOf(args.id) == -1
          $scope.connections.push args.id
      else if args.message.data.signedData.type == 'rating'
        if messagesAdded
          $scope.received.shift()
        $scope.received.unshift args.message
        messagesAdded = true
        processMessages $scope.received
      return
    $scope.$on 'SearchKeydown', (event, args) ->
      switch (if args.event then args.event.which else -1)
        when 38
          args.event.preventDefault()
          if $scope.identifiers.activeKey > 0
            $scope.identifiers[$scope.identifiers.activeKey].active = false
            $scope.identifiers[$scope.identifiers.activeKey - 1].active = true
            $scope.identifiers.activeKey--
          scrollTo document.getElementById('result' + $scope.identifiers.activeKey)
        when 40
          args.event.preventDefault()
          if $scope.identifiers.activeKey < $scope.identifiers.length - 1
            $scope.identifiers[$scope.identifiers.activeKey].active = false
            $scope.identifiers[$scope.identifiers.activeKey + 1].active = true
            $scope.identifiers.activeKey++
          scrollTo document.getElementById('result' + $scope.identifiers.activeKey)
        when 13
          args.event.preventDefault()
          id = $scope.identifiers[$scope.identifiers.activeKey]
          $scope.resultClicked id
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
      return

    $scope.getConnections = ->
      $scope.connections = Identifiers.connections(angular.extend($rootScope.filters, {
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
          id.connectingmsgs = id.connectingmsgs or Identifiers.connectingmsgs(angular.extend({
            idType: $scope.idType
            idValue: $scope.idValue
            id2Type: id.type
            id2Value: id.value
          }, $rootScope.filters), ->
            for key of id.connectingmsgs
              if isNaN(key)
                i++
                continue
              msg = id.connectingmsgs[key]
              msg.gravatar = CryptoJS.MD5(msg.authorEmail or msg.data.signedData.author[0][1]).toString()
              msg.linkToAuthor = msg.data.signedData.author[0]
              i = undefined
              i = 0
              while i < msg.data.signedData.author.length
                if true # ApplicationConfiguration.uniqueIdentifierTypes.indexOf(msg.data.signedData.author[i][0] > -1)
                  msg.linkToAuthor = msg.data.signedData.author[i]
                  break
                i++
            return
          )
          return

        $scope.getOverview()
        $scope.getReceivedMsgs 0
        $scope.getSentMsgs 0
        return
      )
      return

    $scope.getOverview = ->
      $scope.overview = Identifiers.get(angular.extend({}, $rootScope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
        method: 'overview'
      }, if $rootScope.filters.maxDistance > -1 then ['a', 'b'] else 0), -> # then ApplicationConfiguration.defaultViewpoint
        $scope.info.email = $scope.info.email or $scope.overview.email
        return
      )
      return

    $scope.getSentMsgs = (offset) ->
      if !isNaN(offset)
        $rootScope.filters.sentOffset = offset
      sent = Identifiers.sent(angular.extend($rootScope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
        msgType: $rootScope.filters.msgType
        offset: $rootScope.filters.sentOffset
        limit: $rootScope.filters.limit
      }, if $rootScope.filters.maxDistance > -1 then ApplicationConfiguration.defaultViewpoint else 0), ->
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
      received = Identifiers.received(angular.extend($rootScope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
        msgType: $rootScope.filters.msgType
        offset: $rootScope.filters.receivedOffset
        limit: $rootScope.filters.limit
      }, if $rootScope.filters.maxDistance > -1 then ApplicationConfiguration.defaultViewpoint else 0), ->
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

    # Find existing Identifier

    $scope.findOne = ->
      $scope.idType = decodeURIComponent($stateParams.idType)
      $scope.idValue = decodeURIComponent($stateParams.idValue)
      $scope.isUniqueType = ApplicationConfiguration.uniqueIdentifierTypes.indexOf($scope.idType) > -1
      if !$scope.isUniqueType
        $scope.tabs[2].active = true
      $rootScope.pageTitle = ' - ' + $scope.idValue
      $scope.getConnections()
      allPaths = Identifiers.trustpaths(angular.extend({
        idType: $scope.idType
        idValue: $scope.idValue
      }, $rootScope.viewpoint), ->
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
            id.name = Identifiers.getname(
              idType: id[0]
              idValue: id[1])
            if ++n == 3
              break
          i++
        return
      )
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
