angular.module('identifiAngular')
  .constant 'config',
    defaultFilters:
      type: null
      limit: 50
      max_distance: 0
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
