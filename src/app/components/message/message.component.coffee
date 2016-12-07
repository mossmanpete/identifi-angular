angular.module 'identifiAngular'
  .component 'message',
    bindings:
      msgData: '='
      pageInfo: '='
    templateUrl: 'app/components/message/message.template.html'
    controller: ->
      console.log this.pageInfo
