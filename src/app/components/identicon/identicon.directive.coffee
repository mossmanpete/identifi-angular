# coffeelint: disable=max_line_length
angular.module 'identifiAngular'
  .directive 'identicon', ->
    scope:
      identity: '='
    link: (scope, element, attrs) ->
      attrs.showDistance = if typeof attrs.showDistance == 'undefined' then true else !!parseInt(attrs.showDistance)
      attrs.border = if isNaN(attrs.border) then 3 else attrs.border
      update = ->
        if scope.identity && scope.identity.identicon
          identicon = scope.identity.identicon(attrs.width, attrs.border, attrs.showDistance)
          element.empty()
          element.append(identicon)
      scope.$watchGroup ['identity'], update
