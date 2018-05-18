# coffeelint: disable=max_line_length
angular.module 'identifiAngular'
  .directive 'identicon', ->
    scope:
      identity: '='
      showDistance: '=?'
      border: '=?'
      width: '=?'
    link: (scope, element, attr) ->
      scope.showDistance = if typeof scope.showDistance == 'undefined' then true else !!parseInt(scope.showDistance)
      scope.border = if isNaN(scope.border) then 3 else scope.border
      update = ->
        if scope.identity && scope.identity.identicon
          identicon = scope.identity.identicon(scope.width, scope.border, scope.showDistance)
          element.empty()
          element.append(identicon)
      scope.$watchGroup ['identity'], update
