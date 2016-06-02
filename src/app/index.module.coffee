angular.module 'identifiAngular',
  ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages',
  'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'angular-parallax']

angular.module('identifiAngular').filter 'escape', [ ->
  (input) ->
    encodeURIComponent encodeURIComponent(input)
 ]
angular.module('identifiAngular').filter 'encodeURIComponent', [ ->
  (input) ->
    encodeURIComponent input
 ]

angular.module('identifiAngular').filter 'highlight', ($sce) ->
  (text, phrase) ->
    if typeof text == 'string' and phrase
      text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<b>$1</b>')
      return $sce.trustAsHtml text.toString()
    return text
