'use strict'
# Messages controller
angular.module('identifiAngular').controller 'MessagesController', [
  '$scope'
  '$rootScope'
  '$window'
  '$stateParams'
  '$location'
  '$http'
  '$state'
  # 'Authentication'
  'config'
  '$timeout'
  'localStorageService'
  ($scope, $rootScope, $window, $stateParams, $location, $http, $state, Messages, config, $timeout, localStorageService) -> #, Authentication
    $scope.idType = $stateParams.type
    $scope.idValue = $stateParams.value

    $scope.filters.type = 'rating'

    $scope.resetMsgs = ->
      msgs = {}
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
      if $scope.msgs.list.length
        cursor = $scope.msgs.list[$scope.msgs.list.length - 1].searchKey
      doSearch = ->
        limit = 50 or $scope.filters.limit
        if $state.is('messages.list') && $scope.query && $scope.query.term == ''
          $scope.identifiIndex.getMessagesByTimestamp(limit, cursor)
          .then (messages) ->
            if messages.length == 0
              setTimeout doSearch, 1000 # TODO: redo search until we get results
            else
              $scope.processMessages messages
              $scope.$apply ->
                $scope.msgs.list = messages
                # Array.prototype.push.apply($scope.msgs.list, messages)
              $scope.$apply -> $scope.msgs.loading = false
              $scope.msgs.finished = true if messages.length < limit

      doSearch()

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
          $scope.message.signerKeyID = $scope.message.getSignerKeyID()
          $scope.message.verifiedBy = $scope.identifiIndex.get($scope.message.signerKeyID, 'keyID')
          $scope.setIdentityNames($scope.message.verifiedBy, true)
          $scope.message.verifiedByAttr = new $window.identifiLib.Attribute(['keyID', $scope.message.signerKeyID])
        $scope.$watch 'apiReady', (isReady) ->
          if isReady
            if hash.match /^Qm[1-9A-Za-z]{40,50}$/ # looks like an ipfs address
              $scope.ipfsGet(hash).then (res) ->
                s = JSON.parse(res.toString())
                console.log 'msg from ipfs', res, s
                $window.identifiLib.Message.fromSig(s).then (r) ->
                  $scope.message = r
                  $scope.message.ipfsUri = hash
                  processResponse()
              .catch (e) ->
                console.log e

    return
]
