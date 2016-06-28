angular.module 'identifiAngular'
  .directive 'identicon', ->
    scope:
      id: '='
      border: '=?'
      positiveScore: '=?'
      negativeScore: '=?'
      width: '=?'
    template: """
      <div class="identicon"
        ng-style="{ 'width': width, 'height': width }">
        <div class="pie" ng-style="{
              'background-color': (positiveScore + negativeScore) > 0 ? '#A94442' : 'rgba(0,0,0,0.2)',
              'background-image':
              positiveScore ? 'linear-gradient(' + positiveScore / (positiveScore + negativeScore) * 360 + 'deg, transparent 50%, #3C763D 50%),
              linear-gradient(0deg, #3C763D 50%, transparent 50%)' : 'none',
              'width': width,
              'box-shadow': (positiveScore > negativeScore * 20) ? '0px 0px ' + border * positiveScore / 50 + 'px 0px #82FF84' : 'none',
              'opacity': ((positiveScore + negativeScore) / 10 * 0.5 + 0.35),
              'transform': 'rotate(' + ((-positiveScore / (positiveScore + negativeScore) * 360 - 180) / 2) + 'deg)' }">
        </div>
        <img alt=""
          width="{{width}}"
          ng-style="{ 'border-width': border }"
          src="https://www.gravatar.com/avatar/{{id.gravatar}}?d=retro&amp;s={{width*2}}" />
      </div>
    """
