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
    $scope.messages = []
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
      if !isNaN(offset)
        $scope.filters.offset = offset
      params = angular.extend({}, $scope.filters, {
        idType: $scope.idType
        idValue: $scope.idValue
        offset: $scope.filters.offset
        limit: 50
      }, if $scope.filters.max_distance == -1 then { viewpoint_name: null, viewpoint_value: null })
      messages = Messages.query params, ->
        $scope.processMessages messages
        if $scope.filters.offset == 0
          $scope.messages = messages
        else
          for key of messages
            if isNaN(key)
              continue
            $scope.messages.push messages[key]
        $scope.messages.$resolved = messages.$resolved
        $scope.filters.offset = $scope.filters.offset + (messages.length or 0)
        if messages.length < $scope.filters.limit
          $scope.messages.finished = true
      if offset == 0
        $scope.messages = {}
      $scope.messages.$resolved = messages.$resolved

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
        $scope.message = Messages.get
          id: $stateParams.id
          viewpoint_name: $scope.filters.viewpoint_name
          viewpoint_value: $scope.filters.viewpoint_value
          max_distance: $scope.filters.max_distance
        , ->
          $scope.processMessages([$scope.message])
          $scope.setPageTitle 'Message ' + $stateParams.id
          $scope.setMsgRawData($scope.message)
          $scope.message.authorGravatar = CryptoJS.MD5($scope.message.authorEmail or $scope.message.data.author[0][1]).toString()
          $scope.message.recipientGravatar = CryptoJS.MD5($scope.message.recipientEmail or $scope.message.data.recipient[0][1]).toString()
          $scope.getMessageVerifiedBy()
]
