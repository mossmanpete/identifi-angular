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
      scope.negativeScore |= 0
      scope.positiveScore |= 0
      element.children().css # .identicon
        width: scope.width + 'px'
        height: scope.width + 'px'
      element.children().find('div').css # .pie
        'background-color': if (scope.positiveScore + scope.negativeScore) > 0 then '#A94442' else 'rgba(0,0,0,0.2)'
        'background-image': if scope.positiveScore then 'linear-gradient(' + scope.positiveScore / (scope.positiveScore + scope.negativeScore) * 360 + 'deg, transparent 50%, #3C763D 50%), linear-gradient(0deg, #3C763D 50%, transparent 50%)' else 'none'
        'width': scope.width + 'px'
        'box-shadow': if (scope.positiveScore > scope.negativeScore * 20) then '0px 0px ' + scope.border * scope.positiveScore / 50 + 'px 0px #82FF84' else '0px 0px 0px 0px #82FF84'
        'opacity': ((scope.positiveScore + scope.negativeScore) / 10 * 0.5 + 0.35)
        'transform': 'rotate(' + ((-scope.positiveScore / (scope.positiveScore + scope.negativeScore) * 360 - 180) / 2) + 'deg)'
      element.find('img').css
        'border-width': scope.border + 'px'
    template: """
      <div class="identicon">
        <div class="pie">
        </div>
        <img alt=""
          width="{{width}}"
          src="https://www.gravatar.com/avatar/{{id.gravatar}}?d=retro&amp;s={{width*2}}" />
      </div>
    """
