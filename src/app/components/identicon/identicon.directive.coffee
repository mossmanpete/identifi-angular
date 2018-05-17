# coffeelint: disable=max_line_length
angular.module 'identifiAngular'
  .directive 'identicon', ->
    scope:
      identity: '='
      showDistance: '=?'
      border: '=?'
      positiveScore: '=?'
      negativeScore: '=?'
      width: '=?'
    link: (scope, element, attr) ->
      if typeof scope.showDistance == 'undefined'
        scope.showDistance = true
      else
        scope.showDistance = !!parseInt(scope.showDistance)
      update = ->
        if scope.identity && scope.identity.identicon
          identicon = scope.identity.identicon(scope.width, undefined, scope.showDistance)
          element.empty()
          element.append(identicon)
      scope.$watchGroup ['identity'], update
