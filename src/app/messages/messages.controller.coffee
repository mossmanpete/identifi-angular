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
  'Identities'
  'config'
  ($scope, $rootScope, $window, $stateParams, $location, $http, Messages, Identities, config) -> #, Authentication
    $scope.idType = $stateParams.type
    $scope.idValue = $stateParams.value
    $scope.msgs =
      loading: false
      finished: false
      list: []
    angular.extend $scope.filters,
      type: 'rating'
      offset: 0

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

    $scope.find = (offset) ->
      $scope.msgs.loading = true
      if !isNaN(offset)
        $scope.filters.offset = offset
      params = angular.extend({}, $scope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
        offset: $scope.filters.offset
        limit: 50
      }, if $scope.filters.max_distance == -1 then { viewpoint_name: null, viewpoint_value: null })
      p = null
      if params.idType and params.idValue
        # Get from API for now
        p = Messages.query(params).$promise
      else
        # Get latest messages from ipfs index
        p = $scope.messageIndex.searchText('', params.limit)
        .then (res) ->
          values = []
          for pair in res
            values.push(JSON.parse(pair.value)) if pair.value
          return values

      p.then (messages) ->
        $scope.$apply -> # for some reason this is needed...
          $scope.msgs.loading = false
        $scope.processMessages messages
        if $scope.filters.offset == 0
          $scope.msgs.list = messages
        else
          for key of messages
            if isNaN(key)
              continue
            $scope.msgs.list.push messages[key]
        $scope.filters.offset = $scope.filters.offset + (messages.length or 0)
        if messages.length < $scope.filters.limit - 1 # bug
          $scope.msgs.finished = true
      if offset == 0
        $scope.msgs.list = []

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, filters
      angular.extend $scope.filters,
        offset: 0
        receivedOffset: 0
        sentOffset: 0
      $scope.find 0

    # Find existing Message
    $scope.findOne = ->
      if $stateParams.id
        processResponse = ->
          $scope.processMessages([$scope.message])
          $scope.setPageTitle 'Message ' + hash
          $scope.setMsgRawData($scope.message)
          $scope.message.authorGravatar = CryptoJS.MD5($scope.message.authorEmail or $scope.message.data.author[0][1]).toString()
          $scope.message.recipientGravatar = CryptoJS.MD5($scope.message.recipientEmail or $scope.message.data.recipient[0][1]).toString()
          $scope.getIdentityProfile { type: 'keyID', value: $scope.message.signer_keyid }, (profile) ->
            $scope.verifiedBy = profile

        getMessageFromApi = ->
          $scope.message = Messages.get
            id: hash
            viewpoint_name: $scope.filters.viewpoint_name
            viewpoint_value: $scope.filters.viewpoint_value
            max_distance: $scope.filters.max_distance
          , processResponse

        hash = $stateParams.id
        query = null
        if hash.match /^Qm[1-9A-Za-z]{40,50}$/ # looks like an ipfs address
          $http.get('/ipfs/' + hash).then (res) ->
            $scope.message = { 'jws': res.data } # same format as the object returned by Messages.get
          .then processResponse
          .catch -> # fallback go local if ipfs not available
            getMessageFromApi()
        else
          getMessageFromApi()

    return
]
