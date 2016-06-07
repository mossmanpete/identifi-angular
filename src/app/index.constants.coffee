angular.module('identifiAngular')
  .constant 'malarkey', malarkey
  .constant 'moment', moment
  .constant 'config',
    defaultFilters:
      type: null
      offset: 0
      limit: 50
      receivedOffset: 0
      sentOffset: 0
    defaultViewpoint: {}
    uniqueAttributeTypes: [
      'email',
      'url',
      'keyID',
      'tel',
      'phone',
      'account',
      'bitcoin',
      'gpg_keyid',
      'gpg_fingerprint'
    ]
