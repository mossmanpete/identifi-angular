'use strict'
angular.module('identifiAngular').controller 'MainController', [
  '$scope'
  '$rootScope'
  '$location'
  '$http'
  '$state'
  'config',
  'localStorageService'
  '$uibModal'
  '$window'
  '$q'

  #'Authentication'
  #'Menus'
  #'Persona'
  ($scope, $rootScope, $location, $http, $state, config,
  localStorageService, $uibModal, $window, $q) -> # Authentication, Menus, Persona
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
    $scope.localMessages = localStorageService.get('localMessages') or {}
    localStorageService.set('localMessages', $scope.localMessages)

    $scope.loginWithKey = (privateKeyPEM, publicKeyPEM) ->
      $scope.privateKey = KEYUTIL.getKeyFromPlainPrivatePKCS8PEM(privateKeyPEM)
      $scope.publicKey = KEYUTIL.getKey(publicKeyPEM)
      localStorageService.set('privateKeyPEM', privateKeyPEM)
      localStorageService.set('publicKeyPEM', publicKeyPEM)
      publicKeyHex = KEYUTIL.getHexFromPEM(KEYUTIL.getPEM($scope.publicKey))
      publicKeyHash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(publicKeyHex))
      $scope.authentication.user =
        idType: 'keyID'
        idValue: publicKeyHash
      $scope.loginModal.close() if $scope.loginModal

    privateKey = localStorageService.get('privateKeyPEM')
    publicKey = localStorageService.get('publicKeyPEM')
    if privateKey and publicKey
      $scope.loginWithKey(privateKey, publicKey)
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
    $scope.previousSearchKey = ''
    $scope.ids = { list: [] }
    $scope.phoneRegex = /^\+?\d+$/

    $scope.setPageTitle = (title) ->
      $rootScope.pageTitle = 'Identifi'
      if (title)
        $rootScope.pageTitle += ' - ' + title

    $scope.getIpfsIndexes = (indexRoot, fallbackIndexRoot, fallbackIndexRoot2) ->
      getBtreeOrFallback = (url, fallbackUrl, fallbackUrl2) ->
        $window.merkleBtree.MerkleBTree.getByHash(url, $scope.ipfsStorage).catch ->
          console.log 'Failed to fetch index', url, ', reverting to', fallbackUrl
          $window.merkleBtree.MerkleBTree.getByHash(fallbackUrl, $scope.ipfsStorage)
        .catch ->
          console.log 'Failed to fetch index', fallbackUrl, ', reverting to', fallbackUrl2
          $window.merkleBtree.MerkleBTree.getByHash(fallbackUrl2, $scope.ipfsStorage)

      console.log 'Getting Identifi index from IPFS:', indexRoot.join('')
      $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage(indexRoot[0])
      $http.get(indexRoot.join('') + '/info').catch ->
        console.log 'Failed to fetch index', indexRoot.join('') + '/info,', 'reverting to', fallbackIndexRoot.join('') + '/info'
        $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage(fallbackIndexRoot[0])
        $http.get(fallbackIndexRoot.join('') + '/info')
      .catch ->
        console.log 'Failed to fetch index', fallbackIndexRoot.join('') + '/info,', 'reverting to', fallbackIndexRoot2.join('') + '/info'
        $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage(fallbackIndexRoot[1])
        $http.get(fallbackIndexRoot2.join('') + '/info')
      .then (res) ->
        $scope.nodeInfo = {}
        $scope.nodeInfo.profile = $scope.profileFromData(res.data, ['keyID', res.data.keyID])
        $q.all([
          getBtreeOrFallback(indexRoot[1] + '/identities_by_distance',
            fallbackIndexRoot[1] + '/identities_by_distance',
            fallbackIndexRoot2[1] + '/identities_by_distance'),
          getBtreeOrFallback(indexRoot[1] + '/identities_by_searchkey',
            fallbackIndexRoot[1] + '/identities_by_searchkey',
            fallbackIndexRoot2[1] + '/identities_by_searchkey'),
          getBtreeOrFallback(indexRoot[1] + '/messages_by_timestamp',
            fallbackIndexRoot[1] + '/messages_by_timestamp',
            fallbackIndexRoot2[1] + '/messages_by_timestamp'),
        ])
      .then (results) ->
        $scope.identitiesByDistance = results[0]
        $scope.identitiesBySearchKey = results[1]
        $scope.messageIndex = results[2]
      .then ->
        path = $location.absUrl()
        host = if path.match /\/ip[nf]s\// then 'https://identi.fi' else ''
        $http.get(host + '/api', { timeout: 2000 })
      .then (res) ->
        $scope.nodeInfo = angular.extend $scope.nodeInfo, res.data
      .catch (res) ->
        $scope.nodeInfo = { loginOptions: [true] }

    $scope.getIpfsIndexes ['', '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs'],
      ['https://identi.fi', '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs'],
      ['https://ipfs.io', '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs']
    .then ->
      $scope.apiReady = true
    .catch (e) ->
      console.log 'initialization failed:', e
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
      options = {}
      if $scope.privateKey
        publicKeyHex = KEYUTIL.getHexFromPEM(KEYUTIL.getPEM($scope.publicKey))
        publicKeyHash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(publicKeyHex))
        message.author = [['keyID', publicKeyHash]]
        message.timestamp = new Date().toISOString()
        header = JSON.stringify({ alg: 'ES256', kid: publicKeyHex })
        payload = JSON.stringify(message)
        jws = KJUR.jws.JWS.sign("ES256", header, payload, $scope.privateKey)
        hash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(jws))
        message = { jws: jws, hash: hash }
      else
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
        $scope.getIpfsIndexes $scope.ipfsStorage.apiRoot + '/ipfs/' + response.data.ipfsIndexRoot if response.data.ipfsIndexRoot
        return
      ), (errorResponse) ->
        $scope.error = errorResponse.data || JSON.stringify(errorResponse)
        return
      return r

    $scope.addAttribute = ->
      $location.path '#/identities/create/' + $scope.query.term

    $scope.login = ->
      $scope.filters.max_distance = -1 # because the user doesn't have a trust index yet

    $scope.openLoginModal = ->
      $scope.loginModal = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/main/login.modal.html'
        size: 'lg'
        scope: $scope
      )
      $scope.loginModal.rendered.then ->
        document.activeElement.blur()
      $scope.$on '$stateChangeStart', ->
        $scope.loginModal.close()

    $scope.generateKey = ->
      keypair = KEYUTIL.generateKeypair('EC', 'secp256k1')
      $scope.privateKey = keypair.prvKeyObj
      $scope.publicKey = keypair.pubKeyObj
      $scope.privateKeyPEM = KEYUTIL.getPEM($scope.privateKey, 'PKCS8PRV')
      $scope.publicKeyPEM = KEYUTIL.getPEM($scope.publicKey)

    $scope.logout = ->
      $scope.filters.max_distance = 0
      $scope.privateKeyPEM = ''
      $scope.authentication = {}
      localStorageService.clearAll()
      $state.go('identities.list')
      $scope.privateKey = null
      $scope.publicKey = null

    $scope.msgFilter = (value, index, array) ->
      data = value.data or value.signedData
      if $scope.filters.type
        if $scope.filters.type.match /^rating/
          if data.type != 'rating'
            return false
          neutralRating = (data.maxRating + data.minRating) / 2
          if $scope.filters.type == 'rating:positive' and data.rating <= neutralRating
            return false
          else if $scope.filters.type == 'rating:negative' and data.rating >= neutralRating
            return false
          else if $scope.filters.type == 'rating:neutral' and data.rating != neutralRating
            return false
        else if data.type != $scope.filters.type
          return false
      if $scope.filters.max_distance
        if $scope.filters.max_distance == 0 and typeof value.distance != 'number'
          return false
        else if $scope.filters.max_distance > 0 and value.distance > $scope.filters.max_distance
          return false
      return true

    $scope.removeFocus = (event) ->
      event.currentTarget.blur()

    $scope.logoClicked = ->
      if $state.is 'identities.list'
        if $scope.query.term != ''
          $scope.query.term = ''
          $scope.search()
      else
        $scope.query.term = ''
        $scope.ids.list = []
        $scope.ids.finished = false
        $state.go 'identities.list'

    $scope.setMsgRawData = (msg) ->
      showRawData =
        hash: msg.hash
        data: msg.data
        priority: msg.priority
        jws: msg.jws
      msg.strData = JSON.stringify(showRawData, undefined, 2)

    $scope.profileFromData = (data, fallbackId) ->
      if data.attrs and data.attrs.length
        data.dist = data.attrs[0].dist + 0
        data.pos = data.attrs[0].pos
        data.neg = data.attrs[0].neg
        for k, v of data.attrs
          switch v.name
            when 'name'
              data.name = v.val unless data.name
            when 'nickname'
              data.nickname = v.val unless data.nickname
            when 'email'
              data.gravatar = CryptoJS.MD5(v.val).toString()
      data.name = data.nickname if data.nickname and not data.name
      data.name = fallbackId.value unless data.name
      data.gravatar = CryptoJS.MD5(fallbackId.value).toString() unless data.gravatar
      return data

    $scope.getIdentityProfile = (id, callback) ->
      $scope.identitiesBySearchKey.searchText(encodeURIComponent(id.value) + ':' + encodeURIComponent(id.type), 1)
      .then (res) ->
        if res.length
          return $http.get($scope.ipfsStorage.apiRoot + '/ipfs/' + res[0].value)
        else
          return { data: {} }
      .then (res) ->
        profile = $scope.profileFromData(res.data, id)
        if callback
          return callback(profile)
        else
          return profile

    $scope.openMessage = (event, message, size) ->
      t = event.target
      return if angular.element(t).closest('a').length
      $scope.setMsgRawData(message)
      $scope.message = message
      return unless $scope.hasValidSignature(message)
      $scope.getIdentityProfile { type: 'keyID', value: $scope.message.signer_keyid }, (profile) ->
        $scope.$apply -> $scope.message.verifiedBy = profile
      modalInstance = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/messages/show.modal.html'
        size: size
        scope: $scope
      )
      modalInstance.rendered.then ->
        document.activeElement.blur()
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

    $scope.hasValidSignature = (msg, parsedJws) ->
      parsedJws = parsedJws or KJUR.jws.JWS.parse(msg.jws)
      pem = KJUR.asn1.ASN1Util.getPEMStringFromHex(parsedJws.headerObj.kid, "PUBLIC KEY")
      pubKey = KEYUTIL.getKey(pem)
      isValid = KJUR.jws.JWS.verify(msg.jws, pubKey, ['ES256'])
      if isValid then console.log 'valid signature' else console.error 'invalid signature'
      return isValid

    $scope.processMessages = (messages, msgOptions, verifySignature) ->
      processMessage = (msg) ->
        parsedJws = KJUR.jws.JWS.parse(msg.jws)
        msg.data = parsedJws.payloadObj
        unless msg.signer_keyid
          keyHash = CryptoJS.SHA256(parsedJws.headerObj.kid)
          msg.signer_keyid = CryptoJS.enc.Base64.stringify(keyHash)

        return if verifySignature and not $scope.hasValidSignature(msg, parsedJws) # TODO: should display warning or hide msg or sth

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
            msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;'
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

      angular.forEach messages, (msg, key) ->
        msg[k] = v for k, v of msgOptions
        if msg.ipfs_hash and not msg.jws
          $http.get($scope.ipfsStorage.apiRoot + '/ipfs/' + msg.ipfs_hash).then (res) ->
            msg.jws = res.data
            processMessage(msg)
        else processMessage(msg)

    # Collapsing the menu after navigation
    $scope.$on '$stateChangeSuccess', ->
      $scope.isCollapsed = false

    scrollTo = (el) ->
      if !el
        return
      pos = el.getBoundingClientRect()
      if pos.top
        if pos.top - 60 < $window.pageYOffset
          $window.scrollTo 0, pos.top - 60
        else if pos.bottom > $window.pageYOffset + ($window.innerHeight or document.documentElement.clientHeight)
          $window.scrollTo 0, pos.bottom - ($window.innerHeight or document.documentElement.clientHeight) + 15
      return

    $scope.search = (query, limit) ->
      return if $scope.ids.loading
      $scope.ids.loading = true
      $scope.identitiesByHash = {}
      searchKey = encodeURIComponent((query or $scope.query.term or '').toLowerCase())
      if searchKey != $scope.previousSearchKey
        $scope.ids.list = []
        $scope.ids.finished = false
        $scope.identitiesByHash = {}
      $scope.previousSearchKey = searchKey
      limit = limit or 50
      cursor = false
      if $scope.ids.list.length
        cursor = $scope.ids.list[$scope.ids.list.length - 1].searchKey
      q = null
      if searchKey.length
        q = $scope.identitiesBySearchKey.searchText(searchKey, limit, cursor)
      else
        q = $scope.identitiesByDistance.searchText(searchKey, limit, cursor)
      q = q.then (identities) ->
        if !$scope.ids.list
          $scope.ids.list = []
        queries = []
        angular.forEach identities, (row) ->
          return unless row.value and row.value.length and !$scope.identitiesByHash[row.value]
          $scope.identitiesByHash[row.value] = true
          searchKey = row.key
          p = $http.get($scope.ipfsStorage.apiRoot + '/ipfs/' + row.value)
          .then (row) ->
            identity = { searchKey: searchKey }
            smallestIndex = 1000
            angular.forEach row.data.attrs, (attr) ->
              dist = parseInt(attr.dist)
              if !isNaN(dist) and (identity.distance == undefined or (0 <= dist < identity.distance))
                identity.distance = dist
              if identity.pos == undefined and parseInt(attr.pos) > 0
                identity.pos = attr.pos
              if identity.neg == undefined and parseInt(attr.neg) > 0
                identity.neg = attr.neg
              switch attr.name
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
              index = config.uniqueAttributeTypes.indexOf(attr.name)
              if !identity.linkTo
                identity.linkTo = { type: attr.name, value: attr.val }
              if index > -1 and index < smallestIndex
                identity.linkTo = { type: attr.name, value: attr.val }
                smallestIndex = index
              if !identity.gravatar
                identity.gravatar = CryptoJS.MD5(attr.val).toString()
            if !identity.name
              identity.name = row.data.attrs[0].val
            $scope.ids.list.push(identity)
            $scope.ids.list[0].active = true
          queries.push p
        if identities.length > 0
          $scope.ids.activeKey = 0
        if identities.length < limit
          $scope.ids.finished = true
        return $q.all(queries)
      return q.then ->
        $scope.$apply -> $scope.ids.loading = false
        $scope.ids.list

    $scope.searchKeydown = (event) ->
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
