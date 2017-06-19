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

    $scope.nodeInfo = { keyID: null }
    $scope.ipfsStorage = {}

    $scope.getIdKey = (id) ->
      if Array.isArray(id)
        return encodeURIComponent(id[0]) + ':' + encodeURIComponent(id[1])
      else
        return encodeURIComponent(id.name) + ':' + encodeURIComponent(id.val)

    $scope.loginWithKey = (privateKeyPEM) ->
      $scope.privateKey = KEYUTIL.getKeyFromPlainPrivatePKCS8PEM(privateKeyPEM)
      $scope.publicKey = new KJUR.crypto.ECDSA({'curve': 'secp256k1', 'pub': $scope.privateKey.pubKeyHex})
      localStorageService.set('privateKeyPEM', privateKeyPEM)
      publicKeyHex = KEYUTIL.getHexFromPEM(KEYUTIL.getPEM($scope.publicKey))
      publicKeyHash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(publicKeyHex))
      $scope.authentication.user =
        idType: 'keyID'
        idValue: publicKeyHash
      $scope.loginModal.close() if $scope.loginModal

    privateKey = localStorageService.get('privateKeyPEM')
    if privateKey
      $scope.loginWithKey(privateKey)
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

    $scope.ipfs = new Ipfs(
      init: true
      EXPERIMENTAL: {
        pubsub: true
      },
      start: true
      repo: 'ipfs-testing'
      config: Bootstrap: [
        '/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd'
        '/dns4/sfo-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx'
        '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3'
        '/dns4/sfo-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z'
        '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM'
        '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu'
        '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm'
        '/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64'
      ])

    # Get possible login options
    $http.get('/api', { timeout: 2000 })
    .then (res) ->
      $scope.nodeInfo = angular.extend $scope.nodeInfo, res.data
    , (err) ->
      $scope.nodeInfo = { loginOptions: [true], keyID: null }

    $scope.ipfs.on 'ready', ->
      console.log $scope.ipfs
      $window.ipfs = $scope.ipfs
      $scope.ipfs.pubsub.subscribe 'identifi', (msg) ->
        msg = { jws: $scope.ipfs.types.Buffer(msg.data).toString() }
        hash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(msg.jws))
        console.log 'identifi message received', msg, hash
        localMessages = localStorageService.get('localMessages')
        $scope.processMessages([msg])
        localMessages[hash] = msg
        localStorageService.set('localMessages', localMessages)
      #$scope.initIpfsIndexes()

    $scope.initIpfsIndexes = ->
      indexRoot = '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs'
      console.log 'Loading index from https://identi.fi:', indexRoot
      $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage('https://identi.fi')
      $q.all([
        $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_distance', $scope.ipfsStorage),
        $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_searchkey', $scope.ipfsStorage),
        $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/messages_by_timestamp', $scope.ipfsStorage),
      ])
      .catch (e) ->
        console.log 'Loading index from https://identi.fi failed', e
        console.log 'Loading index from ipfs.io'
        $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage('https://ipfs.io')
        $q.all([
          $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_distance', $scope.ipfsStorage),
          $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_searchkey', $scope.ipfsStorage),
          $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/messages_by_timestamp', $scope.ipfsStorage),
        ])
      .then (results) ->
        console.log 'Got index', results
        $scope.identitiesByDistance = results[0]
        $scope.identitiesBySearchKey = results[1]
        $scope.messageIndex = results[2]
        $scope.apiReady = true

      $http.get 'https://identi.fi' + indexRoot + '/info'
      .catch (err) ->
        $http.get 'https://ipfs.io' + indexRoot + '/info'
      .then (res) ->
        $scope.nodeInfo.profile = $scope.profileFromData(res.data, ['keyID', res.data.keyID])
      .catch (e) ->
        console.log 'initialization failed:', e

    $scope.initIpfsIndexes()

    $scope.setPageTitle = (title) ->
      $rootScope.pageTitle = 'Identifi'
      if (title)
        $rootScope.pageTitle += ' - ' + title

    $scope.ipfsGet = (uri, getJson) ->
      jsIpfsGet = ->
        console.log 'Getting from js-ipfs', uri
        $scope.ipfs.files.cat(uri).then (stream) ->
          new Promise (resolve, reject) ->
            stream.on 'data', (file) ->
              file = $scope.ipfs.types.Buffer(file).toString()
              file = JSON.parse(file) if getJson
              resolve(file)
            stream.on 'error', (error) ->
              reject(error)

      if $scope.ipfsStorage.apiRoot
        return $http.get($scope.ipfsStorage.apiRoot + '/ipfs/' + uri)
        .then (res) -> res.data
        .catch -> jsIpfsGet()
      else
        return jsIpfsGet()

    $scope.newMessage =
      rating: 1
      comment: ''
    $scope.newVerification =
      type: ''
      value: ''
    # Create new Message
    $scope.createMessage = (event, params, id) ->
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
        $scope.ipfs.files.add(new $scope.ipfs.types.Buffer(jws)).then (i) ->
          $scope.ipfs.pubsub.publish('identifi', new $scope.ipfs.types.Buffer(jws))
      else
        options =
          headers:
            'Authorization': 'Bearer ' + $scope.authentication.token

      $http.post('/api/messages', message, options)
      .catch ->
        $http.post('https://identi.fi/api/messages', message, options)
      .then ((response) ->
        console.log response
        # Clear form fields
        $scope.newMessage.comment = ''
        $scope.newMessage.rating = 1
        $scope.newVerification.type = ''
        $scope.newVerification.value = ''
        $scope.$root.$broadcast 'MessageAdded',
          message: response.data
          id: id
        $scope.getIpfsIndexes $scope.ipfsStorage.apiRoot + '/ipfs/' + response.data.ipfsIndexRoot if response.data.ipfsIndexRoot
        response.data
      ), (errorResponse) ->
        $scope.error = errorResponse.data || JSON.stringify(errorResponse)
        console.error(errorResponse)

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

    $scope.downloadKey = ->
      hiddenElement = document.createElement('a')
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI($scope.privateKeyPEM)
      hiddenElement.target = '_blank'
      hiddenElement.download = 'identifi_private_key.txt'
      hiddenElement.click()

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
          return $scope.ipfsGet(res[0].value, true).then (res) ->
            return { data: res }
          # return $http.get($scope.ipfsStorage.apiRoot + '/ipfs/' + res[0].value)
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
          $scope.ipfsGet(msg.ipfs_hash).then (res) ->
            msg.jws = res
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

    $scope.searchRequest = null
    $scope.search = (query, limit) ->
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
      if searchKey.length
        $scope.searchRequest = $scope.identitiesBySearchKey.searchText(searchKey, limit, cursor)
      else
        $scope.searchRequest = $scope.identitiesByDistance.searchText(searchKey, limit, cursor)
      $scope.searchRequest = $scope.searchRequest.then (identities) ->
        searchKey = encodeURIComponent((query or $scope.query.term or '').toLowerCase())
        if searchKey != $scope.previousSearchKey
          return # search key changed
        $scope.ids.list = $scope.ids.list or []
        queries = []
        angular.forEach identities, (row) ->
          return unless row.value and row.value.length and !$scope.identitiesByHash[row.value]
          $scope.identitiesByHash[row.value] = true
          searchKey = row.key
          # p = $http.get($scope.ipfsStorage.apiRoot + '/ipfs/' + row.value)
          p = $scope.ipfsGet(row.value, true)
          .then (row) ->
            identity = { searchKey: searchKey }
            smallestIndex = 1000
            angular.forEach row.attrs, (attr) ->
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
              identity.name = row.attrs[0].val
            $scope.ids.list.push(identity)
            $scope.ids.list[0].active = true
          queries.push p
        if identities.length > 0
          $scope.ids.activeKey = 0
        if identities.length < limit
          $scope.ids.finished = true
        return $q.all(queries)
      return $scope.searchRequest.then ->
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
