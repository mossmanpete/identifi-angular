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
      max_distance: 0
    defaultViewpoint:
      viewpoint_name: 'keyID'
      viewpoint_value: '/pbxjXjwEsojbSfdM3wGWfE24F4fX3GasmoHXY3yYPM='
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
