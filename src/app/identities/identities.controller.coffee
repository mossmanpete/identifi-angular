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
  '$q'
  '$timeout'
  # 'Authentication'
  'config'
  'localStorageService'
  ($scope, $state, $rootScope, $window, $stateParams, $location, $http, $q, $timeout, config, localStorageService) -> #, Authentication
    $scope.activeTab = 0
    $scope.activateTab = (tabId) -> $scope.activeTab = tabId
    $scope.info = {}
    $scope.stats = {}
    $scope.sent = []
    $scope.received = []
    $scope.connections = []
    $scope.thumbsUp = []
    $scope.thumbsDown = []
    $scope.verifications = []
    $scope.distance = null
    $scope.query.term = $stateParams.search if $stateParams.search
    $scope.newAttribute =
      type: ''
      value: $stateParams.value
    $scope.filters.type = null
    $scope.collapseLevel = {}
    $scope.collapseFilters = $window.innerWidth < 992
    $scope.slider =
      value: 0
      options:
        floor: -3
        ceil: 3
        hidePointerLabels: true
        hideLimitLabels: true

    messagesAdded = false
    $scope.$on 'MessageAdded', (event, args) ->
      return unless $state.is 'identities.show'
      if args.message.signedData.type == 'verify_identity' and not args.id.confirmed
        args.id.confirmed = true
        args.id.confirmations += 1
        if $scope.connections && $scope.connections.indexOf(args.id) == -1
          $scope.connections.push args.id
          $scope.getConnections()
      else if args.message.signedData.type == 'unverify_identity' and not args.id.refuted
        args.id.refuted = true
        args.id.refutations += 1
        if $scope.connections.indexOf(args.id) == -1
          $scope.connections.push args.id
          $scope.getConnections()
      else if args.message.signedData.type == 'rating'
        if messagesAdded
          $scope.received.shift()
        $scope.processMessages [args.message]
        $scope.received.unshift args.message
        $scope.localMessages[args.message.hash] = args.message
        $scope.localMessages[args.message.hash].local = true
        localStorageService.set('localMessages', $scope.localMessages)
        messagesAdded = true

    $scope.addEntry = (event, entry) ->
      recipient = []
      if entry.name
        recipient.push ['name', entry.name]
      if entry.email
        recipient.push ['email', entry.email]
      if entry.url
        recipient.push ['url', entry.url]
      if entry.phone
        recipient.push ['phone', entry.phone]
      params =
        type: 'verify_identity'
        recipient: recipient
      $scope.createMessage(event, params).then (success) ->
        $state.go 'messages.show', { id: success.data.hash }
      , (error) ->
        console.log "error", error

    $scope.getConnections = ->
      connections = $scope.identityProfile.attrs or []
      connections = $scope.connections if $scope.connections.length
      if connections.length > 0
        c = connections[0]
        mostConfirmations = c.confirmations
        $scope.stats =
          received_positive: c.pos
          received_negative: c.neg
          received_neutral: c.neut
        $scope.distance = c.dist
      else
        mostConfirmations = 1
      for key of connections
        conn = connections[key]
        switch conn.name
          when 'email'
            conn.iconStyle = 'glyphicon glyphicon-envelope'
            conn.btnStyle = 'btn-success'
            conn.link = 'mailto:' + conn.val
            conn.quickContact = true
            $scope.info.email = $scope.info.email or conn.val
          when 'bitcoin_address', 'bitcoin'
            conn.iconStyle = 'fa fa-bitcoin'
            conn.btnStyle = 'btn-primary'
            conn.link = 'https://blockchain.info/address/' + conn.val
            conn.quickContact = true
          when 'gpg_fingerprint', 'gpg_keyid'
            conn.iconStyle = 'fa fa-key'
            conn.btnStyle = 'btn-default'
            conn.link = 'https://pgp.mit.edu/pks/lookup?op=get&search=0x' + conn.val
          when 'account'
            conn.iconStyle = 'fa fa-at'
          when 'nickname'
            $scope.info.nickname = $scope.info.nickname or conn.val
            conn.iconStyle = 'glyphicon glyphicon-font'
          when 'name'
            $scope.info.name = $scope.info.name or conn.val
            conn.iconStyle = 'glyphicon glyphicon-font'
          when 'tel', 'phone'
            conn.iconStyle = 'glyphicon glyphicon-earphone'
            conn.btnStyle = 'btn-success'
            conn.link = 'tel:' + conn.val
            conn.quickContact = true
          when 'coverPhoto'
            if conn.val.match /^\/ipfs\/[1-9A-Za-z]{40,60}$/
              $scope.coverPhoto = $scope.coverPhoto or { 'background-image': 'url(' + ($scope.ipfsStorage.apiRoot or '') + conn.val + ')' }
          when 'profilePhoto'
            if conn.val.match /^\/ipfs\/[1-9A-Za-z]{40,60}$/
              $scope.profilePhoto = $scope.profilePhoto or ($scope.ipfsStorage.apiRoot or '') + conn.val
          when 'url'
            conn.link = conn.val
            if conn.val.indexOf('facebook.com/') > -1
              conn.iconStyle = 'fa fa-facebook'
              conn.btnStyle = 'btn-facebook'
              conn.link = conn.val
              conn.linkName = conn.val.split('facebook.com/')[1]
              conn.quickContact = true
            else if conn.val.indexOf('twitter.com/') > -1
              conn.iconStyle = 'fa fa-twitter'
              conn.btnStyle = 'btn-twitter'
              conn.link = conn.val
              conn.linkName = conn.val.split('twitter.com/')[1]
              conn.quickContact = true
            else if conn.val.indexOf('plus.google.com/') > -1
              conn.iconStyle = 'fa fa-google-plus'
              conn.btnStyle = 'btn-google-plus'
              conn.link = conn.val
              conn.linkName = conn.val.split('plus.google.com/')[1]
              conn.quickContact = true
            else if conn.val.indexOf('linkedin.com/') > -1
              conn.iconStyle = 'fa fa-linkedin'
              conn.btnStyle = 'btn-linkedin'
              conn.link = conn.val
              conn.linkName = conn.val.split('linkedin.com/')[1]
              conn.quickContact = true
            else if conn.val.indexOf('github.com/') > -1
              conn.iconStyle = 'fa fa-github'
              conn.btnStyle = 'btn-github'
              conn.link = conn.val
              conn.linkName = conn.val.split('github.com/')[1]
              conn.quickContact = true
            else
              conn.iconStyle = 'glyphicon glyphicon-link'
              conn.btnStyle = 'btn-default'
        if conn.val and conn.val.match /^\/ipfs\/[1-9A-Za-z]{40,60}$/
          conn.link = ($scope.ipfsStorage.apiRoot or '') + conn.val
          conn.linkName = conn.val
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
      $scope.connections = connections
      $scope.getPhotosFromGravatar()
      $scope.setPageTitle ($scope.info.name || $scope.info.nickname || $scope.idValue)

    $scope.getConnectingMsgs = (id1, id2) ->
      getVerifications = $q (resolve) ->
        if !$scope.verifications.length
          $scope.receivedIndex.searchText('', 10000, false, true).then (res) ->
            res.forEach (row) ->
              msg = row.value
              unless msg.signedData
                msg.signedData = KJUR.jws.JWS.parse(msg.jws).payloadObj
              if (msg.signedData.type in ['verify_identity', 'unverify_identity'])
                msg.gravatar = CryptoJS.MD5(msg.authorEmail or msg.signedData.author[0][1]).toString()
                msg.linkToAuthor = msg.signedData.author[0]
                $scope.verifications.push msg
            resolve()
        else
          resolve()
      getVerifications.then ->
        msgs = []
        $scope.verifications.forEach (msg) ->
          hasId1 = hasId2 = false
          for id in msg.signedData.recipient
            return msgs.push msg if id[0] == id2.name and id[1] == id2.val
        return msgs

    $scope.connectionClicked = (event, id) ->
      if id.connecting_msgs
        id.collapse = !id.collapse
      else
        $scope.getConnectingMsgs([$scope.idType, $scope.idValue], id).then (msgs) ->
          id.connecting_msgs = msgs
          id.collapse = !id.collapse

    $scope.getSentMsgs = ->
      return if $scope.sent.loading
      $scope.sent.loading = true
      searchKey = ''
      if $scope.sent.length
        searchKey = $scope.sent[$scope.sent.length - 1].searchKey
      $scope.sentIndex.searchText('', $scope.filters.limit, searchKey, true).then (res) ->
        msgs = []
        res.forEach (row) ->
          v = row.value
          v.searchKey = row.key
          msgs.push v
        return msgs
      .then (sent) ->
        $scope.processMessages sent, { recipientIsSelf: false }
        $scope.$apply ->
          Array.prototype.push.apply($scope.sent, sent)
          $scope.sent.loading = false
          if sent.length < $scope.filters.limit - 1
            $scope.sent.finished = true
      .catch (error) ->
        $scope.sent.finished = true

    $scope.getReceivedMsgs = ->
      return if $scope.received.loading
      $scope.received.loading = true
      searchKey = ''
      if $scope.received.length
        searchKey = $scope.received[$scope.received.length - 1].searchKey
      $scope.receivedIndex.searchText('', $scope.filters.limit, searchKey, true).then (res) ->
        msgs = []
        res.forEach (row) ->
          v = row.value
          v.searchKey = row.key
          msgs.push v
        return msgs
      .then (received) ->
        $scope.processMessages received, { recipientIsSelf: true }
        $scope.$apply ->
          Array.prototype.push.apply($scope.received, received)
          $scope.received.loading = false
          if received.length < $scope.filters.limit - 1
            $scope.received.finished = true
          sorted = received.sort (a,b) ->
            return 1 if a.distance > b.distance
            return -1 if a.distance < b.distance
            return 0
          sorted.forEach (msg) ->
            return if $scope.thumbsUp.length >= 12 and $scope.thumbsDown.length >= 12
            neutralRating = (msg.data.maxRating + msg.data.minRating) / 2
            if $scope.thumbsUp.length < 12 and msg.data.rating > neutralRating
              $scope.thumbsUp.push msg
            else if $scope.thumbsDown.length < 12 and  msg.rating < neutralRating
              $scope.thumbsDown.push msg
      .catch (error) ->
        $scope.received.finished = true

    $scope.getPhotosFromGravatar = ->
      console.log $scope.idValue
      email = $scope.info.email or $scope.idValue
      $scope.gravatar = CryptoJS.MD5(email).toString()

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, filters
      $scope.sent = []
      $scope.received = []
      $timeout -> $rootScope.$broadcast 'msgScrollCheck'

    addLocalMessages = ->
      msgs = localStorageService.get('localMessages') or {}
      $scope.$apply ->
        for msg in Object.values(msgs)
          if msg.data.recipient[0][0] == $scope.idType and msg.data.recipient[0][1] == $scope.idValue
            $scope.received.unshift(msg)
          if msg.data.author[0][0] == $scope.idType and msg.data.author[0][1] == $scope.idValue
            $scope.sent.unshift(msg)

    $scope.findOne = ->
      $scope.idType = $stateParams.type
      $scope.idValue = $stateParams.value
      $scope.isCurrentUser = $scope.authentication && $scope.authentication.user &&
        $scope.idType == $scope.authentication.user.idType and $scope.idValue == $scope.idValue
      $scope.isUniqueType = config.uniqueAttributeTypes.indexOf($scope.idType) > -1
      if !$scope.isUniqueType
        $state.go 'identities.list', { search: $scope.idValue }
        $scope.tabs[2].active = true
      $scope.setPageTitle $scope.idValue
      $scope.$watch 'apiReady', (isReady) ->
        if isReady
          $scope.getIdentityProfile({ type: $scope.idType, value: $scope.idValue }).then (profile) ->
            $scope.identityProfile = profile
            addLocalMessages()
            $scope.getConnections()
            if !(profile.sent and profile.received)
              throw new Error('missing sent or received index: ' + JSON.stringify(profile))
            $q.all([
              $window.merkleBtree.MerkleBTree.getByHash(profile.sent, $scope.ipfsStorage),
              $window.merkleBtree.MerkleBTree.getByHash(profile.received, $scope.ipfsStorage)
            ])
          .then (indexes) ->
            $scope.sentIndex = indexes[0]
            $scope.receivedIndex = indexes[1]
            $scope.getReceivedMsgs 0
            $scope.getSentMsgs 0
          .catch (err) ->
            console.log 'error fetching profile', err
      if $scope.idType == 'keyID' and $scope.idValue == $scope.nodeInfo.keyID
        $scope.distance = 0

    if $state.is 'identities.show'
      $scope.findOne()
]
