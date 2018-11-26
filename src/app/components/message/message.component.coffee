angular.module 'identifiAngular'
  .component 'message',
    bindings:
      ipfs: '=?'
      msgData: '='
      pageInfo: '=?'
      showRecipient: '=?'
    templateUrl: 'app/components/message/message.template.html'
