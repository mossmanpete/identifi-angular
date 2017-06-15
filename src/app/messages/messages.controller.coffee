'use strict'
# Messages controller
angular.module('identifiAngular').controller 'MessagesController', [
  '$scope'
  '$rootScope'
  '$window'
  '$stateParams'
  '$location'
  '$http'
  # 'Authentication'
  'Messages'
  'config'
  '$timeout'
  'localStorageService'
  ($scope, $rootScope, $window, $stateParams, $location, $http, Messages, config, $timeout, localStorageService) -> #, Authentication
    $scope.idType = $stateParams.type
    $scope.idValue = $stateParams.value

    $scope.filters.type = 'rating'

    $scope.resetMsgs = ->
      msgs = localStorageService.get('localMessages') or {}
      $scope.msgs =
        loading: false
        finished: false
        list: Object.values(msgs)
    $scope.resetMsgs()

    $scope.iconCount = (rating) ->
      new Array(Math.max(1, Math.abs(rating)))

    $scope.iconStyle = (rating) ->
      iconStyle = 'neutral'
      if rating > 0
        iconStyle = 'positive'
      else if rating < 0
        iconStyle = 'negative'
      iconStyle

    $scope.iconClass = (rating) ->
      iconStyle = 'glyphicon-question-sign'
      if rating > 0
        iconStyle = 'glyphicon-thumbs-up'
      else if rating < 0
        iconStyle = 'glyphicon-thumbs-down'
      iconStyle

    $scope.collapseFilters = $window.innerWidth < 992

    $scope.find = ->
      return if $scope.msgs.loading
      $scope.msgs = $scope.msgs || []
      $scope.msgs.loading = true
      # Get latest messages from ipfs index
      searchKey = ''
      if $scope.msgs.list.length
        searchKey = $scope.msgs.list[$scope.msgs.list.length - 1].searchKey
      p = $scope.messageIndex.searchText('', $scope.filters.limit, searchKey, true)
      .then (res) ->
        messages = []
        localMessages = localStorageService.get('localMessages') or {}
        for pair in res
          if pair.value
            v = pair.value
            v.searchKey = pair.key
            if localMessages.hasOwnProperty(v.hash)
              delete localMessages[v.hash]
              localStorageService.set('localMessages', localMessages)
            else
              messages.push(v)
        return messages
      p.then (messages) ->
        $scope.processMessages messages
        Array.prototype.push.apply($scope.msgs.list, messages)
        if messages.length < $scope.filters.limit - 1 # bug
          $scope.$apply -> $scope.msgs.finished = true
        $scope.$apply -> $scope.msgs.loading = false

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, filters
      $scope.resetMsgs()
      $timeout -> $rootScope.$broadcast 'msgScrollCheck'

    # Find existing Message
    $scope.findOne = ->
      if $stateParams.id
        processResponse = ->
          $scope.processMessages([$scope.message], {}, true)
          $scope.setPageTitle 'Message ' + hash
          $scope.setMsgRawData($scope.message)
          $scope.message.authorGravatar = CryptoJS.MD5($scope.message.authorEmail or $scope.message.data.author[0][1]).toString()
          $scope.message.recipientGravatar = CryptoJS.MD5($scope.message.recipientEmail or $scope.message.data.recipient[0][1]).toString()
          $scope.message.hash = hash
          $scope.getIdentityProfile { type: 'keyID', value: $scope.message.signer_keyid }, (profile) ->
            $scope.$apply -> $scope.message.verifiedBy = profile

        getMessageFromApi = ->
          $scope.message = Messages.get
            id: hash
            viewpoint_name: $scope.filters.viewpoint_name
            viewpoint_value: $scope.filters.viewpoint_value
            max_distance: $scope.filters.max_distance
          , processResponse

        hash = $stateParams.id
        query = null
        $scope.$watch 'apiReady', (isReady) ->
          if isReady
            if hash.match /^Qm[1-9A-Za-z]{40,50}$/ # looks like an ipfs address
              $scope.ipfsGet(hash).then (res) ->
                $scope.message = { 'jws': res } # same format as the object returned by Messages.get
                processResponse()
              .catch (err) -> # fallback go local if ipfs not available
                console.log 'failed to get msg from ipfs', err
                getMessageFromApi()
            else
              getMessageFromApi()

    return
]
