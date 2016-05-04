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
  ($scope, $rootScope, $window, $stateParams, $location, Messages) -> #, Authentication
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

    $rootScope.filters = $rootScope.filters or {} # ApplicationConfiguration.defaultFilters
    angular.extend $rootScope.filters, offset: 0
    if $scope.authentication.user
      $rootScope.viewpoint =
        viewpointName: $scope.authentication.user.displayName
        viewpointType: 'email'
        viewpointValue: $scope.authentication.user.email
    else
      $rootScope.viewpoint = $rootScope.viewpoint or {} # ApplicationConfiguration.defaultViewpoint
    $scope.collapseFilters = $window.innerWidth < 992

    processMessages = (messages) ->
      for key of messages
        if isNaN(key)
          continue
        msg = messages[key]
        msg.data = KJUR.jws.JWS.parse(msg.jws).payloadObj
        console.log(msg)
        gravatarEmail = msg.authorEmail
        if msg.authorEmail == ''
          gravatarEmail = msg.data.author[0][0] + msg.data.author[0][1]
        msg.gravatar = CryptoJS.MD5(gravatarEmail).toString()
        msg.linkToAuthor = msg.data.author[0]
        i = undefined
        i = 0
        while i < msg.data.author.length
          if true # ApplicationConfiguration.uniqueIdentifierTypes.indexOf(msg.data.author[i][0]) > -1
            msg.linkToAuthor = msg.data.author[i]
            break
          i++
        msg.linkToRecipient = msg.data.recipient[0]
        i = 0
        while i < msg.data.recipient.length
          if true # ApplicationConfiguration.uniqueIdentifierTypes.indexOf(msg.data.recipient[i][0]) > -1
            msg.linkToRecipient = msg.data.recipient[i]
            break
          i++
        signedData = msg.data
        alpha = undefined
        msg.panelStyle = 'panel-default'
        msg.iconStyle = ''
        msg.hasSuccess = ''
        msg.bgColor = ''
        msg.iconCount = new Array(1)
        switch signedData.type
          when 'confirm_connection'
            msg.iconStyle = 'glyphicon glyphicon-ok'
            msg.hasSuccess = 'has-success'
          when 'connection'
            msg.iconStyle = 'glyphicon glyphicon-ok'
            msg.hasSuccess = 'has-success'
          when 'refute_connection'
            msg.iconStyle = 'glyphicon glyphicon-remove'
            msg.hasSuccess = 'has-error'
          when 'rating'
            rating = signedData.rating
            neutralRating = (signedData.minRating + signedData.maxRating) / 2
            maxRatingDiff = signedData.maxRating - neutralRating
            minRatingDiff = signedData.minRating - neutralRating
            if rating > neutralRating
              msg.panelStyle = 'panel-success'
              msg.iconStyle = 'glyphicon glyphicon-thumbs-up'
              msg.iconCount = if maxRatingDiff < 2 then msg.iconCount else new Array(Math.ceil(3 * rating / maxRatingDiff))
              alpha = (rating - neutralRating - 0.5) / maxRatingDiff / 1.25 + 0.2
              msg.bgColor = 'background-image:linear-gradient(rgba(223,240,216,' + alpha +
                ') 0%, rgba(208,233,198,' + alpha + ') 100%);background-color: rgba(223,240,216,' + alpha + ');'
            else if rating < neutralRating
              msg.panelStyle = 'panel-danger'
              msg.iconStyle = 'glyphicon glyphicon-thumbs-down'
              msg.iconCount = if minRatingDiff > -2 then msg.iconCount else new Array(Math.ceil(3 * rating / minRatingDiff))
              alpha = (rating - neutralRating + 0.5) / minRatingDiff / 1.25 + 0.2
              msg.bgColor = 'background-image:linear-gradient(rgba(242,222,222,' + alpha +
                ') 0%, rgba(235,204,204,' + alpha + ') 100%);background-color: rgba(242,222,222,' + alpha + ');'
            else
              msg.panelStyle = 'panel-warning'
              msg.iconStyle = 'glyphicon glyphicon-question-sign'
      return

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
        $rootScope.filters.offset = offset
      params = angular.extend({
        idType: $scope.idType
        idValue: $scope.idValue
      }, $rootScope.filters, if $rootScope.filters.maxDistance > -1 then {} else {}) # ApplicationConfiguration.defaultViewpoint
      messages = Messages.query(params, ->
        processMessages messages
        if $rootScope.filters.offset == 0
          $scope.messages = messages
        else
          for key of messages
            if isNaN(key)
              i++
              continue
            $scope.messages.push messages[key]
        $scope.messages.$resolved = messages.$resolved
        $rootScope.filters.offset = $rootScope.filters.offset + (messages.length or 0)
        if messages.length < $rootScope.filters.limit
          $scope.messages.finished = true
        return
      )
      if offset == 0
        $scope.messages = {}
      $scope.messages.$resolved = messages.$resolved
      return

    # Find existing Message

    $scope.findOne = ->
      $scope.message = Messages.query({ messageId: $stateParams.messageId, isArray: true }, ->
        $rootScope.pageTitle = ' - Message ' + $stateParams.messageId
        $scope.message[0].data = KJUR.jws.JWS.parse($scope.message[0].jws).payloadObj
        console.log $scope.message[0]
        $scope.message[0].strData = JSON.stringify($scope.message[0].data, undefined, 2)
        $scope.message[0].authorGravatar = CryptoJS.MD5($scope.message[0].authorEmail or $scope.message[0].data.author[0][1]).toString()
        $scope.message[0].recipientGravatar = CryptoJS.MD5($scope.message[0].recipientEmail or $scope.message[0].data.recipient[0][1]).toString()
        return
      )
      return

    $scope.setFilters = (filters) ->
      angular.extend $rootScope.filters, filters
      angular.extend $rootScope.filters,
        offset: 0
        receivedOffset: 0
        sentOffset: 0
      $scope.find 0
      return

    return
]
