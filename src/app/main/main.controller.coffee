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
  'focus'

  #'Authentication'
  #'Menus'
  #'Persona'
  ($scope, $rootScope, $location, $http, $state, config,
  localStorageService, $uibModal, $window, $q, focus) -> # Authentication, Menus, Persona
    if $window.location.protocol == "https:"
      $scope.gun = new Gun(['https://identifi.herokuapp.com/gun'])
    else
      $scope.gun = new Gun(['http://localhost:8765/gun', 'https://identifi.herokuapp.com/gun'])

    # set authentication
    $scope.authentication = {} # Authentication

    $scope.getIdKey = (id) ->
      if Array.isArray(id)
        return encodeURIComponent(id[0]) + ':' + encodeURIComponent(id[1])
      else
        return encodeURIComponent(id.name) + ':' + encodeURIComponent(id.val)

    $scope.query = {}
    $scope.query.term = ''
    $scope.previousSearchKey = ''
    $scope.ids = { list: [] }
    $scope.phoneRegex = /^\+?\d+$/

    $scope.ipfs = new Ipfs(
      init: true
      start: true
      repo: 'ipfs7-identifi'
    )

    $scope.capitalizeWords = (s) ->
      if s and s.length
        return (s.split(' ').map (word) -> word[0].toUpperCase() + word[1..-1].toLowerCase()).join ' '
      else
        return s

    $scope.searchRequest = null
    $scope.search = (query, limit) ->
      $scope.ids.loading = true
      searchKey = encodeURIComponent((query or $scope.query.term or '').toLowerCase())
      $scope.searchKey = searchKey
      if searchKey != $scope.previousSearchKey
        $scope.ids.list = []
        $scope.ids.finished = false
      $scope.previousSearchKey = searchKey
      limit = limit or 30
      cursor = false
      if $scope.ids.list.length
        cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor
      $scope.searchRequest = $scope.identifiIndex.search(searchKey, undefined, limit, cursor)
      .then (identities) -> {identities, searchKey}
      $scope.searchRequest = $scope.searchRequest.then (res) ->
        return if res.searchKey != $scope.searchKey
        identities = res.identities
        console.log identities
        identities.splice(limit) if limit
        identities.forEach (i) ->
          i.gun.on (data) ->
            i.data = data
            i.gun.get('linkTo').once (linkTo) ->
              $scope.$apply ->
                i.linkTo = linkTo
          $scope.setIdentityNames(i, true)
        searchKey = encodeURIComponent((query or $scope.query.term or '').toLowerCase())
        if searchKey != $scope.previousSearchKey
          return # search key changed
        $scope.ids.list = $scope.ids.list or []
        if identities.length < limit
          $scope.ids.finished = true
        if identities.length && $scope.ids.list.length &&
        $scope.getIdKey(identities[0].linkTo) == $scope.getIdKey($scope.ids.list[$scope.ids.list.length - 1].linkTo)
          identities.shift() # Prevent duplicate
        $scope.ids.list = $scope.ids.list.concat(identities)
        if identities.length > 0 && $scope.ids.list.length == identities.length
          $scope.ids.activeKey = 0
          $scope.ids.list[0].active = true
        else
          $scope.ids.activeKey = -1
        $scope.$apply -> $scope.ids.loading = false
        $scope.ids.list
      return $scope.searchRequest

    setIndex = (results) ->
      $scope.identifiIndex = results
      console.log 'Got index', $scope.identifiIndex
      $scope.identifiIndex.gun.get('identitiesByTrustDistance').once ->
        $scope.identifiIndex.getViewpoint().then (vp) ->
          console.log 'got viewpoint', vp
          $scope.viewpoint = vp
          $scope.viewpoint.gun.get('linkTo').open (linkTo) ->
            $scope.viewpoint.linkTo = linkTo
          $scope.viewpoint.gun.get('attrs').open (attrs) ->
            $scope.viewpoint.attrs = attrs
            $scope.viewpoint.mostVerifiedAttributes = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs)
      $scope.identifiIndex.gun.get('identitiesBySearchKey').once ->
        $scope.apiReady = true
        if $scope.query.term != ''
          $scope.query.term = ''
        $scope.ids.list = []
        $scope.ids.finished = false
        $scope.search()

    defaultIndexKeyID = 'I3x1egC5QnZjtFaQjYUEw5Q52zlYsuiy6OHPJQpzLwM.5aK3zZmELWeEpRq3U4hOCSL6T1rnyxyFxIGL7cSHH7I'
    $scope.loadDefaultIndex = ->
      setIndex new $window.identifiLib.Index($scope.gun.user(defaultIndexKeyID))

    $scope.loginWithKey = (privateKeySerialized) ->
      $scope.privateKey = $window.identifiLib.Key.fromJwk(privateKeySerialized)
      localStorageService.set('identifiKey', privateKeySerialized)
      $scope.authentication.user =
        idType: 'keyID'
        idValue: $window.identifiLib.Key.getId($scope.privateKey)
      $scope.loginModal.close() if $scope.loginModal
      keyID = $window.identifiLib.Key.getId($scope.privateKey)
      $window.identifiLib.Index.create($scope.gun.get(keyID), $scope.privateKey).then (i) ->
        setIndex(i).then ->
          $scope.authentication.identity = $scope.identifiIndex.get(keyID, 'keyID')

    privateKey = localStorageService.get('identifiKey')
    if privateKey
      $scope.loginWithKey(privateKey)
    else
      $scope.loadDefaultIndex()

    $scope.ipfs.on 'ready', ->
      $scope.ipfsReady = true
      $window.ipfs = $scope.ipfs

    $scope.setPageTitle = (title) ->
      $rootScope.pageTitle = 'Identifi'
      if (title)
        $rootScope.pageTitle += ' - ' + title

    $scope.ipfsGet = (uri, getJson) ->
      return new Promise (resolve) ->
        go = ->
          $scope.ipfs.files.cat(uri).then (file) ->
            file = $scope.ipfs.types.Buffer(file)
            if getJson
              file = JSON.parse(file.toString())
            resolve file

        if $scope.ipfsReady
          go()
        else
          $scope.ipfs.on 'ready', ->
            go()

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
      message = null
      if params.type == 'rating'
        params.maxRating |= 3
        params.minRating |= -3
        message = $window.identifiLib.Message.createRating(params, $scope.privateKey)
      else
        message = $window.identifiLib.Message.createVerification(params, $scope.privateKey)
      options = {}

      message.then (m) ->
        console.log m
        $scope.identifiIndex.addMessage(m, $scope.ipfs)
        $scope.filters.type = 'rating'
      .catch (e) ->
        console.error(e)
        $scope.error = e

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

    $scope.openUploadModal = (callback, modalButtonText, squarify) ->
      $scope.uploadModalCallback = callback
      $scope.modalButtonText = modalButtonText or 'Upload'
      $scope.squarify = squarify
      $scope.uploadModal = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/identities/upload.modal.html'
        size: 'lg'
        scope: $scope
      )
      $scope.uploadModal.rendered.then ->
        document.activeElement.blur()
      $scope.$on '$stateChangeStart', ->
        $scope.uploadModal.close()

    $scope.$on '$stateChangeStart', ->
      $scope.filters.type = null

    $scope.uploadFile = (blob) ->
      return new Promise (resolve, reject) ->
        console.log 'uploading', blob
        fileReader = new FileReader()
        fileReader.onload = (event) ->
          buffer = $scope.ipfs.types.Buffer.from(event.target.result)
          console.log 'buffer', buffer
          $scope.ipfs.files.add buffer, (err, files) ->
            if err
              reject('adding to ipfs failed', err)
            else
              resolve(files)
              console.log 'done:', err, files
        fileReader.readAsArrayBuffer(blob)

    $scope.generateKey = ->
      $window.identifiLib.Key.generate().then (key) ->
        $scope.$apply ->
          $scope.privateKey = key
          console.log $scope.privateKey
          $scope.privateKeySerialized = $window.identifiLib.Key.toJwk($scope.privateKey)

    $scope.downloadKey = ->
      hiddenElement = document.createElement('a')
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI($scope.privateKeySerialized)
      hiddenElement.target = '_blank'
      hiddenElement.download = 'identifi_private_key.txt'
      hiddenElement.click()

    $scope.openLogoutModal = ->
      $scope.logoutModal = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/main/logout.modal.html'
        size: 'lg'
        scope: $scope
      )
      $scope.logoutModal.rendered.then ->
        document.activeElement.blur()
      $scope.$on '$stateChangeStart', ->
        $scope.logoutModal.close()

    $scope.closeLogoutModal = ->
      $scope.logoutModal.close()

    $scope.logout = ->
      $scope.filters.max_distance = 0
      $scope.privateKeySerialized = ''
      $scope.authentication = {}
      localStorageService.clearAll()
      $state.go('identities.list')
      $scope.privateKey = null
      $scope.publicKey = null
      $scope.logoutModal.close()
      $scope.loadDefaultIndex()

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
        if $scope.filters.max_distance == 0 and typeof value.authorTrustDistance != 'number'
          return false
        else if $scope.filters.max_distance > 0 and value.authorTrustDistance > $scope.filters.max_distance
          return false
      return true

    $scope.removeFocus = (event) ->
      event.currentTarget.blur()

    $scope.logoClicked = ->
      focus('searchFocus')
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

    $scope.openMessage = (event, message, size) ->
      t = event.target
      return if angular.element(t).closest('a').length
      $scope.setMsgRawData(message)
      $scope.message = message
      # TODO: check sig
      $scope.message.recipient = $scope.message.getRecipient($scope.identifiIndex)
      $scope.message.recipient.gun.get('attrs').open (d) ->
        mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d)
        if mva.name
          $scope.$apply -> $scope.message.recipient_name = mva.name.attribute.val
        else if mva.nickname
          $scope.$apply -> $scope.message.recipient_name = mva.nickname.attribute.val
      $scope.message.signerKeyID = $scope.message.getSignerKeyID()
      $scope.message.verifiedBy = $scope.identifiIndex.get($scope.message.signerKeyID, 'keyID')
      $scope.messageModal = $uibModal.open(
        animation: $scope.animationsEnabled
        templateUrl: 'app/messages/show.modal.html'
        size: size
        scope: $scope
      )
      $scope.messageModal.rendered.then ->
        document.activeElement.blur()
      $scope.$on '$stateChangeStart', ->
        $scope.messageModal.close()

    $scope.filters = $scope.filters or config.defaultFilters

    $scope.isCollapsed = false
    # $scope.menu = Menus.getMenu('topbar')

    $scope.toggleCollapsibleMenu = ->
      $scope.isCollapsed = !$scope.isCollapsed

    $scope.processMessages = (messages, msgOptions, findRecipient) ->
      processMessage = (msg) ->
        msg.data = msg.signedData
        msg.author = msg.getAuthor($scope.identifiIndex)
        msg.author.gun.get('trustDistance').on (d) -> msg.authorTrustDistance = d
        msg.author.gun.get('attrs').open (d) ->
          mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d)
          if mva.name
            $scope.$apply -> msg.author_name = mva.name.attribute.val
          else if mva.nickname
            $scope.$apply -> msg.author_name = mva.nickname.attribute.val
        if findRecipient
          msg.recipient = msg.getRecipient($scope.identifiIndex)
          msg.recipient.gun.get('attrs').open (d) ->
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d)
            if mva.name
              $scope.$apply -> msg.recipient_name = mva.name.attribute.val
            else if mva.nickname
              $scope.$apply -> msg.recipient_name = mva.nickname.attribute.val
        $scope.$apply ->
          # TODO: make sure message signature is checked

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
            when 'verify_identity', 'verification'
              msg.iconStyle = 'glyphicon glyphicon-ok-sign'
              msg.hasSuccess = 'has-success'
              msg.isVerification = true
            when 'unverify_identity', 'unverification'
              msg.iconStyle = 'glyphicon glyphicon-remove negative'
              msg.hasSuccess = 'has-error'
              msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;'
              msg.isUnverification = true
            when 'rating'
              rating = signedData.rating
              neutralRating = (signedData.minRating + signedData.maxRating) / 2
              maxRatingDiff = signedData.maxRating - neutralRating
              minRatingDiff = signedData.minRating - neutralRating
              if rating > neutralRating
                if signedData.context == 'verifier'
                  msg.iconStyle = 'fa fa-shield positive'
                else
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
        processMessage(msg)

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

    $scope.setIdentityNames = (i, htmlSafe, setTitle) ->
      i.verified = false
      i.gun.get('attrs').open (attrs) ->
        $scope.$apply ->
          mva = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs)
          if mva.name
            i.primaryName = mva.name.attribute.val
            i.hasProperName = true
            i.verified = true if mva.name.verified
          else if mva.nickname
            i.primaryName = mva.nickname.attribute.val
            i.hasProperName = true
          else
            i.primaryName = Object.values(attrs)[0].val
          if i.primaryName
            if mva.nickname and mva.nickname.attribute.val != i.primaryName
              i.nickname = mva.nickname.attribute.val
              i.nickname = i.nickname.replace('<', '&lt;') if htmlSafe
            i.primaryName = i.primaryName.replace('<', '&lt;') if htmlSafe
          $scope.setPageTitle i.primaryName if setTitle

    $scope.searchKeydown = (event) ->
      switch (if event then event.which else -1)
        when 38
          event.preventDefault()
          if $scope.ids.activeKey > -1
            $scope.addEntryActive = false
            $scope.ids.list[$scope.ids.activeKey].active = false
            $scope.ids.activeKey--
            if $scope.ids.activeKey >= 0
              $scope.ids.list[$scope.ids.activeKey].active = true
          scrollTo document.getElementById('result' + $scope.ids.activeKey)
        when 40
          event.preventDefault()
          if $scope.ids.activeKey < ($scope.ids.list.length || 0) - 1
            if $scope.ids.activeKey >= 0
              $scope.ids.list[$scope.ids.activeKey].active = false
            $scope.ids.list[$scope.ids.activeKey + 1].active = true
            $scope.ids.activeKey++
          scrollTo document.getElementById('result' + $scope.ids.activeKey)
        when 13
          event.preventDefault()
          if $scope.ids.activeKey == -1
            $state.go 'identities.create'
          else
            id = $scope.ids.list[$scope.ids.activeKey]
            $state.go 'identities.show', { type: id.linkTo.name, value: id.linkTo.val }
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
      $state.go('identities.show', { type: item.linkTo.name, value: item.linkTo.val })
      $scope.query.term = ''
]
