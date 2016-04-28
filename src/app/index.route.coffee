angular.module 'identifiAngular'
  .config ($stateProvider, $urlRouterProvider) ->
    'ngInject'
    $stateProvider
      .state 'identifiers',
        url: '/'
        templateUrl: 'app/identifiers/list.html'
        controller: 'IdentifiersController'
        controllerAs: 'identifiers'
      .state 'identifiers.show',
        url: '/id/:type/:value'
        templateUrl: 'app/identifiers/identifier.html'
        controller: 'IdentifiersController'
        controllerAs: 'identifiers'
      .state 'messages',
        url: '/messages'
        templateUrl: 'app/messages/list.html'
        controller: 'MessagesController'
        controllerAs: 'messages'
      .state 'messages.show',
        url: '/messages/:id'
        templateUrl: 'app/messages/show.html'
        controller: 'MessagesController'
        controllerAs: 'messages'
      .state 'about',
        url: '/about'
        templateUrl: 'app/main/about.html'
        controller: 'MainController'
        controllerAs: 'main'

    $urlRouterProvider.otherwise '/'
