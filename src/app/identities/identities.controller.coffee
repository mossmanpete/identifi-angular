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
  # 'Authentication'
  'Identities'
  'config'
  ($scope, $state, $rootScope, $window, $stateParams, $location, $http, $q, Identities, config) -> #, Authentication
    $scope.activeTab = 0
    $scope.activateTab = (tabId) -> $scope.activeTab = tabId
    $scope.info = {}
    $scope.stats = {}
    $scope.sent = []
    $scope.connections = []
    $scope.received = []
    $scope.thumbsUp = []
    $scope.thumbsDown = []
    $scope.distance = null
    $scope.query.term = $stateParams.search if $stateParams.search
    $scope.newAttribute =
      type: ''
      value: $stateParams.value
    angular.extend $scope.filters,
      receivedOffset: 0
      sentOffset: 0
      offset: 0
      type: null

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
      else if args.message.signedData.type == 'unverify_identity' and not args.id.refuted
        args.id.refuted = true
        args.id.refutations += 1
        if $scope.connections.indexOf(args.id) == -1
          $scope.connections.push args.id
      else if args.message.signedData.type == 'rating'
        if messagesAdded
          $scope.received.shift()
        $scope.processMessages [args.message]
        $scope.received.unshift args.message
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
      $scope.create(event, params).then (success) ->
        $state.go 'messages.show', { id: success.data.hash }
      , (error) ->
        console.log "error", error

    $scope.getConnections = ->
      connections = $scope.identityProfile.attrs or []
      if connections.length > 0
        c = connections[0]
        mostConfirmations = c.confirmations
        $scope.$apply ->
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
              $scope.coverPhoto = $scope.coverPhoto or { 'background-image': 'url(' + conn.val + ')' }
          when 'profilePhoto'
            if conn.val.match /^\/ipfs\/[1-9A-Za-z]{40,60}$/
              $scope.profilePhoto = $scope.profilePhoto or conn.val
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
          conn.link = conn.val
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

      $scope.connectionClicked = (event, id) ->
        if id.connecting_msgs
          id.collapse = !id.collapse
        else
          id.connecting_msgs = Identities.connecting_msgs(angular.extend({
            idType: $scope.idType
            idValue: $scope.idValue
            target_name: id.name
            target_value: id.val
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
            id.collapse = !id.collapse
          )

    $scope.getSentMsgs = (offset) ->
      if !isNaN(offset)
        $scope.filters.sentOffset = offset
      $scope.sentIndex.searchText('', 100, undefined, true).then (res) ->
        msgs = []
        res.forEach (row) ->
          msgs.push row.value
        return msgs
      .then (sent) ->
        $scope.processMessages sent, { recipientIsSelf: false }
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
      .catch (error) ->
        $scope.sent.finished = true
      if offset == 0
        $scope.sent = []

    $scope.getReceivedMsgs = (offset) ->
      if !isNaN(offset)
        $scope.filters.receivedOffset = offset
      $scope.receivedIndex.searchText('', 100, undefined, true).then (res) ->
        msgs = []
        res.forEach (row) ->
          msgs.push row.value
        return msgs
      .then (received) ->
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

        $scope.thumbsUp = []
        $scope.thumbsDown = []
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
      if offset == 0
        $scope.received = []

    $scope.getPhotosFromGravatar = ->
      email = $scope.info.email or $scope.idValue
      $scope.gravatar = CryptoJS.MD5(email).toString()

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, filters
      angular.extend $scope.filters,
        offset: 0
        receivedOffset: 0
        sentOffset: 0
      $scope.getReceivedMsgs 0
      $scope.getSentMsgs 0

    $scope.findOne = ->
      $scope.idType = $stateParams.type
      $scope.idValue = $stateParams.value
      $scope.isUniqueType = config.uniqueAttributeTypes.indexOf($scope.idType) > -1
      if !$scope.isUniqueType
        $state.go 'identities.list', { search: $scope.idValue }
        $scope.tabs[2].active = true
      $scope.setPageTitle $scope.idValue
      $scope.getIdentityProfile({ type: $scope.idType, value: $scope.idValue }).then (profile) ->
        $scope.identityProfile = profile
        $q.all([
          $window.merkleBtree.MerkleBTree.getByHash(profile.sent, $scope.ipfsStorage),
          $window.merkleBtree.MerkleBTree.getByHash(profile.received, $scope.ipfsStorage)
        ])
      .then (indexes) ->
        $scope.sentIndex = indexes[0]
        $scope.receivedIndex = indexes[1]
        $scope.getConnections()
        $scope.getReceivedMsgs 0
        $scope.getSentMsgs 0
      if $scope.idType == 'keyID' and $scope.idValue == $scope.nodeInfo.keyID
        $scope.distance = 0

    if $state.is 'identities.show'
      $scope.findOne()
]
