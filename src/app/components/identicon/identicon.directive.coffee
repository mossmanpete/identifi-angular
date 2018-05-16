# coffeelint: disable=max_line_length
angular.module 'identifiAngular'
  .directive 'identicon', ->
    scope:
      identity: '='
      border: '=?'
      positiveScore: '=?'
      negativeScore: '=?'
      width: '=?'
    link: (scope, element, attr) ->
      update = ->
        if scope.identity && scope.identity.identicon
          identicon = scope.identity.identicon(scope.width)
          element.empty()
          element.append(identicon)
      scope.$watchGroup ['identity'], update
