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
        <div ng-if="(positiveScore + negativeScore > 0)" class="pie" ng-style="{ 'background-color': '#A94442', 'background-image':
              'linear-gradient(' + positiveScore / (positiveScore + negativeScore) * 360 + 'deg, transparent 50%, #3C763D 50%),
              linear-gradient(0deg, #3C763D 50%, transparent 50%)',
              'width': width,
              'transform': 'rotate(' + ((-positiveScore / (positiveScore + negativeScore) * 360 - 180) / 2) + 'deg)' }">
        </div>
        <img alt=""
          width="{{width}}"
          ng-style="{ 'border-width': border }"
          src="https://www.gravatar.com/avatar/{{id.gravatar}}?d=retro&amp;s={{width*2}}" />
      </div>
    """
