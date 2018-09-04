angular.module 'identifiAngular'
  .component 'message',
    bindings:
      ipfs: '=?'
      msgData: '='
      pageInfo: '=?'
    templateUrl: 'app/components/message/message.template.html'
