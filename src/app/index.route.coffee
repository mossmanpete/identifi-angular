angular.module 'identifiAngular'
  .config ($stateProvider, $urlRouterProvider) ->
    'ngInject'
    $stateProvider
      .state 'identifiers',
        url: ''
        template: "<ui-view/>"
        abstract: true
      .state 'identifiers.list',
        url: ''
        templateUrl: 'app/identifiers/list.html'
        controller: 'IdentifiersController'
        controllerAs: 'identifiers'
      .state 'identifiers.show',
        url: '/id/:type/:value'
        templateUrl: 'app/identifiers/show.html'
        controller: 'IdentifiersController'
        controllerAs: 'identifiers'
      .state 'messages',
        url: '/messages'
        template: "<ui-view/>"
        abstract: true
      .state 'messages.list',
        url: ''
        templateUrl: 'app/messages/list.html'
        controller: 'MessagesController'
        controllerAs: 'messages'
      .state 'messages.show',
        url: '/:id'
        templateUrl: 'app/messages/show.html'
        controller: 'MessagesController'
        controllerAs: 'messages'
      .state 'about',
        url: '/about'
        templateUrl: 'app/main/about.html'
        controller: 'MainController'
        controllerAs: 'main'

    $urlRouterProvider.otherwise '/'
