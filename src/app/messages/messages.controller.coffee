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
        list: (value for own prop, value of msgs)
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
      $scope.msgs.loading = true
      # Get latest messages from ipfs index
      searchKey = ''
      if $scope.msgs.list.length
        searchKey = $scope.msgs.list[$scope.msgs.list.length - 1].searchKey
      $scope.identifiIndex.messagesByTimestamp.searchText('', $scope.filters.limit, searchKey, true) # TODO: implement in identifi-lib
      .then (res) ->
        messages = []
        for pair in res
          m = $window.identifiLib.Message.fromJws(pair.value.jws)
          m.ipfs_hash = pair.value.ipfs_hash
          m.authorPos = pair.value.author_pos
          m.authorNeg = pair.value.author_neg
          m.authorTrustDistance = pair.value.distance
          m.authorName = pair.value.author_name
          m.searchKey = pair.key
          m.isVerification = m.signedData.type in ['verification', 'verify_identity']
          m.isUnverification = m.signedData.type in ['unverification', 'unverify_identity']
          messages.push(m)
        $scope.processMessages messages
        Array.prototype.push.apply($scope.msgs.list, messages)
        if res.length < $scope.filters.limit - 1 # bug
          $scope.$apply -> $scope.msgs.finished = true
        $scope.$apply -> $scope.msgs.loading = false

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, filters
      $scope.resetMsgs()
      $timeout -> $rootScope.$broadcast 'msgScrollCheck'

    # Find existing Message
    $scope.findOne = ->
      if $stateParams.id
        hash = $stateParams.id
        processResponse = ->
          $scope.processMessages([$scope.message], {}, true)
          $scope.setPageTitle 'Message ' + hash
          $scope.setMsgRawData($scope.message)
          $scope.message.signerKeyHash = $scope.message.getSignerKeyID()
          $scope.identifiIndex.get($scope.message.signerKeyHash, 'keyID').then (profile) ->
            unless profile
              profile = new $window.identifiLib.Identity({attrs:[{name: 'keyID', val: $scope.message.signerKeyHash}]})
            $scope.$apply -> $scope.message.verifiedBy = profile

        $scope.$watch 'apiReady', (isReady) ->
          if isReady
            if hash.match /^Qm[1-9A-Za-z]{40,50}$/ # looks like an ipfs address
              $scope.ipfsGet(hash).then (res) ->
                $scope.message = $window.identifiLib.Message.fromJws(res)
                processResponse()
              .catch (e) ->
                console.log e

    return
]
