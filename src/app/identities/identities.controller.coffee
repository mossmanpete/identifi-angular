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
  'config'
  ($scope, $state, $rootScope, $window, $stateParams, $location, $http, Identities, config) -> #, Authentication
    $scope.tabs = [
      { active: true }
      { active: false }
      { active: false }
    ]
    $scope.info = {}
    $scope.sent = []
    $scope.received = []
    $scope.trustedBy = []
    $scope.newAttribute =
      type: ''
      value: $stateParams.value

    $scope.goToID = (type, value) ->
      $location.path '/identities/' + encodeURIComponent(type) + '/' + encodeURIComponent(value)
      return

    $scope.collapseLevel = {}
    $scope.collapseFilters = $window.innerWidth < 992

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
        $scope.processMessages $scope.received

    $scope.$on 'SearchChanged', (event, args) ->
      $scope.search args.queryTerm, args.limit

    $scope.getConnections = ->
      $scope.connections = Identities.connections({
        idType: $scope.idType
        idValue: $scope.idValue
      }, ->
        mostConfirmations = if $scope.connections.length > 0 then $scope.connections[0].confirmations else 1
        $scope.connections.unshift
          name: $scope.idType
          value: $scope.idValue
          confirmations: 1
          refutations: 0
          isCurrent: true
        for key of $scope.connections
          conn = $scope.connections[key]
          console.log "1"
          switch conn.name
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
              console.log 2
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
                conn.link = conn.value
                conn.linkName = conn.value.split('facebook.com/')[1]
                conn.quickContact = true
              else if conn.value.indexOf('twitter.com/') > -1
                conn.iconStyle = 'fa fa-twitter'
                conn.btnStyle = 'btn-twitter'
                conn.link = conn.value
                conn.linkName = conn.value.split('twitter.com/')[1]
                conn.quickContact = true
                $scope.getPhotosFromTwitter conn.value
              else if conn.value.indexOf('plus.google.com/') > -1
                conn.iconStyle = 'fa fa-google-plus'
                conn.btnStyle = 'btn-google-plus'
                conn.link = conn.value
                conn.linkName = conn.value.split('plus.google.com/')[1]
                conn.quickContact = true
              else if conn.value.indexOf('linkedin.com/') > -1
                conn.iconStyle = 'fa fa-linkedin'
                conn.btnStyle = 'btn-linkedin'
                conn.link = conn.value
                conn.linkName = conn.value.split('linkedin.com/')[1]
                conn.quickContact = true
              else if conn.value.indexOf('github.com/') > -1
                conn.iconStyle = 'fa fa-github'
                conn.btnStyle = 'btn-github'
                conn.link = conn.value
                conn.linkName = conn.value.split('github.com/')[1]
                conn.quickContact = true
              else
                conn.iconStyle = 'glyphicon glyphicon-link'
                conn.btnStyle = 'btn-default'
          if conn.confirmations + conn.refutations > 0
            percentage = conn.confirmations * 100 / (conn.confirmations + conn.refutations)
            if percentage >= 80
              alpha = conn.confirmations / mostConfirmations * 0.7 + 0.3
              # conn.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
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
          }, $scope.filters), ->
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
          )

        $scope.getStats()
        $scope.getReceivedMsgs 0
        $scope.getSentMsgs 0
      )

    $scope.getStats = ->
      $scope.stats = Identities.stats(angular.extend({}, $scope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
      }, if $scope.filters.maxDistance > -1 then ['a', 'b'] else 0), -> # then ApplicationConfiguration.defaultViewpoint
        $scope.info.email = $scope.info.email or $scope.stats.email
      )

    $scope.getSentMsgs = (offset) ->
      if !isNaN(offset)
        $scope.filters.sentOffset = offset
      sent = Identities.sent(angular.extend($scope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
        type: $scope.filters.type
        offset: $scope.filters.sentOffset
        limit: $scope.filters.limit
      }, 0), -> # if $scope.filters.maxDistance > -1 then ApplicationConfiguration.defaultViewpoint else 0
        $scope.processMessages sent, { authorIsSelf: true }
        console.log sent
        if $scope.filters.sentOffset == 0
          $scope.sent = sent
        else
          for key of sent
            if isNaN(key)
              continue
            $scope.sent.push sent[key]
        $scope.sent.$resolved = sent.$resolved
        $scope.filters.sentOffset = $scope.filters.sentOffset + sent.length
        if sent.length < $scope.filters.limit
          $scope.sent.finished = true
      )
      if offset == 0
        $scope.sent = {}
      $scope.sent.$resolved = sent.$resolved

    $scope.getReceivedMsgs = (offset) ->
      if !isNaN(offset)
        $scope.filters.receivedOffset = offset
      received = Identities.received(angular.extend($scope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
        type: $scope.filters.type
        offset: $scope.filters.receivedOffset
        limit: $scope.filters.limit
      }, 0), -> # if $scope.filters.maxDistance > -1 then ApplicationConfiguration.defaultViewpoint else 0
        $scope.processMessages received, { recipientIsSelf: true }
        if $scope.filters.receivedOffset == 0
          $scope.received = received
        else
          for key of received
            if isNaN(key)
              continue
            $scope.received.push received[key]
        $scope.received.$resolved = received.$resolved
        $scope.filters.receivedOffset = $scope.filters.receivedOffset + received.length
        if received.length < $scope.filters.limit
          $scope.received.finished = true
      )
      if offset == 0
        $scope.received = {}
      $scope.received.$resolved = received.$resolved

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

    # Find existing Attribute

    $scope.findOne = ->
      $scope.idType = $stateParams.type
      $scope.idValue = $stateParams.value
      $scope.isUniqueType = true # ApplicationConfiguration.uniqueAttributeTypes.indexOf($scope.idType) > -1
      if !$scope.isUniqueType
        $scope.tabs[2].active = true
      $rootScope.pageTitle = ' - ' + $scope.idValue
      $scope.getConnections()
      trustpaths = Identities.trustpaths
        idType: $rootScope.viewpoint[0]
        idValue: $rootScope.viewpoint[1]
        target_name: $scope.idType
        target_value: $scope.idValue
      , ->
        if trustpaths.length == 0
          return
        shortestPath = Object.keys(trustpaths).length
        trustedByExists = {}
        angular.forEach trustpaths, (path, i) ->
          if path.path_string
            arr = path.path_string.split(':')
            if arr.length >= 5
              obj = { linkTo: [arr[arr.length-5], arr[arr.length-4]] }
              if not trustedByExists[obj.linkTo.join(':')]
                trustedByExists[obj.linkTo.join(':')] = true
                obj[arr[arr.length-5]] = arr[arr.length-4]
                obj.gravatar = CryptoJS.MD5(arr[arr.length-4]).toString()
                $scope.trustedBy.push(obj)
    return
]
