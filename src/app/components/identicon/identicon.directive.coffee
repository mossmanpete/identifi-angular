# coffeelint: disable=max_line_length
angular.module 'identifiAngular'
  .directive 'identicon', ->
    scope:
      id: '='
      border: '=?'
      positiveScore: '=?'
      negativeScore: '=?'
      width: '=?'
    link: (scope, element, attr) ->
      update = ->
        if scope.id && scope.id.identicon
          identicon = scope.id.identicon(scope.width)
          element.empty()
          element.append(identicon)
      scope.$watchGroup ['id'], update
