'use strict'
# Messages controller
angular.module('identifiAngular').controller 'MessagesController', [
  '$scope'
  '$rootScope'
  '$window'
  '$stateParams'
  '$location'
  # 'Authentication'
  'Messages'
  'config'
  ($scope, $rootScope, $window, $stateParams, $location, Messages, config) -> #, Authentication
    $scope.authentication = {} # Authentication
    $scope.idType = $stateParams.idType
    $scope.idValue = $stateParams.idValue
    $scope.messages = []
    $scope.newMessage =
      type: 'rating'
      rating: 1
      comment: ''
    $scope.newConnection =
      type: ''
      value: ''

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

    $scope.filters = config.defaultFilters
    angular.extend $scope.filters, offset: 0
    if $scope.authentication.user
      $rootScope.viewpoint =
        viewpointName: $scope.authentication.user.displayName
        viewpointType: 'email'
        viewpointValue: $scope.authentication.user.email
    else
      $rootScope.viewpoint = $rootScope.viewpoint or config.defaultViewpoint
    $scope.collapseFilters = $window.innerWidth < 992

    processMessages = (messages, msgOptions) ->
      for key of messages
        if isNaN(key)
          continue
        msg = messages[key]
        msg[k] = v for k, v of msgOptions
        msg.data = KJUR.jws.JWS.parse(msg.jws).payloadObj
        gravatarEmail = msg.authorEmail
        if msg.authorEmail == ''
          gravatarEmail = msg.data.author[0][0] + msg.data.author[0][1]
        msg.gravatar = CryptoJS.MD5(gravatarEmail).toString()
        msg.linkToAuthor = msg.data.author[0]
        i = undefined
        i = 0
        while i < msg.data.author.length
          if config.uniqueAttributeTypes.indexOf(msg.data.author[i][0]) > -1
            msg.linkToAuthor = msg.data.author[i]
            break
          i++
        msg.linkToRecipient = msg.data.recipient[0]
        i = 0
        while i < msg.data.recipient.length
          if config.uniqueAttributeTypes.indexOf(msg.data.recipient[i][0]) > -1
            msg.linkToRecipient = msg.data.recipient[i]
            break
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
              msg.iconStyle = 'glyphicon glyphicon-question-sign neutral'

    # Create new Message

    $scope.create = (event, params, id) ->
      event.stopPropagation()
      # Create new Message object
      message = new Messages(
        recipientType: $scope.idType
        recipientValue: $scope.idValue)
      angular.extend message, params
      message.$save ((response) ->
        # Clear form fields
        $scope.newMessage.comment = ''
        $scope.newMessage.rating = 1
        $scope.newConnection.type = ''
        $scope.newConnection.value = ''
        $scope.$root.$broadcast 'MessageAdded',
          message: message
          id: id
        return
      ), (errorResponse) ->
        $scope.error = errorResponse.data.message
        return
      return

    $scope.find = (offset) ->
      $rootScope.pageTitle = ' - Latest messages'
      if !isNaN(offset)
        $scope.filters.offset = offset
      params = angular.extend({
        idType: $scope.idType
        idValue: $scope.idValue
      }, $scope.filters, if $scope.filters.maxDistance > -1 then config.defaultViewpoint else {})
      console.log params
      messages = Messages.query params, ->
        processMessages messages
        if $scope.filters.offset == 0
          $scope.messages = messages
        else
          for key of messages
            if isNaN(key)
              i++
              continue
            $scope.messages.push messages[key]
        $scope.messages.$resolved = messages.$resolved
        $scope.filters.offset = $scope.filters.offset + (messages.length or 0)
        if messages.length < $scope.filters.limit
          $scope.messages.finished = true
      if offset == 0
        $scope.messages = {}
      $scope.messages.$resolved = messages.$resolved

    # Find existing Message

    $scope.findOne = ->
      $scope.message = Messages.get { id: $stateParams.id }, ->
        $rootScope.pageTitle = ' - Message ' + $stateParams.id
        $scope.message.data = KJUR.jws.JWS.parse($scope.message.jws).payloadObj
        $scope.message.strData = JSON.stringify($scope.message.data, undefined, 2)
        $scope.message.authorGravatar = CryptoJS.MD5($scope.message.authorEmail or $scope.message.data.author[0][1]).toString()
        $scope.message.recipientGravatar = CryptoJS.MD5($scope.message.recipientEmail or $scope.message.data.recipient[0][1]).toString()

    $scope.setFilters = (filters) ->
      angular.extend $scope.filters, filters
      angular.extend $scope.filters,
        offset: 0
        receivedOffset: 0
        sentOffset: 0
      $scope.find 0

]
