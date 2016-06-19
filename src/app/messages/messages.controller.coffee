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
  ($scope, $rootScope, $window, $stateParams, $location, $http, Messages, config) -> #, Authentication
    $scope.idType = $stateParams.type
    $scope.idValue = $stateParams.value
    $scope.messages = []
    angular.extend $scope.filters,
      type: null
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
      $rootScope.pageTitle = ' - Latest messages'
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
      $scope.message = Messages.get { id: $stateParams.id }, ->
        $scope.processMessages([$scope.message])
        $rootScope.pageTitle = ' - Message ' + $stateParams.id
        showRawData =
          hash: $scope.message.hash
          data: $scope.message.data
          priority: $scope.message.priority
          jws: $scope.message.jws
        $scope.message.strData = JSON.stringify(showRawData, undefined, 2)
        $scope.message.authorGravatar = CryptoJS.MD5($scope.message.authorEmail or $scope.message.data.author[0][1]).toString()
        $scope.message.recipientGravatar = CryptoJS.MD5($scope.message.recipientEmail or $scope.message.data.recipient[0][1]).toString()

]
