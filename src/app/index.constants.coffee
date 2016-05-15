angular.module('identifiAngular')
  .constant 'malarkey', malarkey
  .constant 'moment', moment
  .constant 'config',
    defaultFilters:
      type: null
    defaultViewpoint: {}
    uniqueAttributeTypes: ['email', 'url', 'keyID', 'tel', 'phone', 'account']
