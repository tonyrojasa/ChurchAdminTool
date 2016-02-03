'use strict';

/**
 * @ngdoc function
 * @name adminUiApp.controller:SmallGroupsCtrl
 * @description
 * # SmallGroupsCtrl
 * Controller of the churchAdminToolApp
 */

function SmallGroupsCtrl() {
    this.groupList = [{
        shortName: 'Walmart',
        displayName: 'Walmart SA',
        inum: '@!AC9A.01F6.060A.51EE!0001!5C09.9C60!0008!AC82.ABCD',
        status: 'active'
    }, {
        shortName: 'Sony',
        displayName: 'Sony Entertaiment',
        inum: '@!AC9A.01F6.060A.51EE!0001!5C09.9C60!0008!AC82.BACD',
        status: 'active'
    }, {
        shortName: 'Toyota',
        displayName: 'Toyota Motors',
        inum: '@!AC9A.01F6.060A.51EE!0001!5C09.9C60!0008!AC82.DCBA',
        status: 'active'
    }, {
        shortName: 'GM',
        displayName: 'General Motors',
        inum: '@!AC9A.01F6.060A.51EE!0001!5C09.9C60!0008!AC82.CDBA',
        status: 'inactive'
    }];
    this.statuses = [{
        value: 'inactive',
        text: 'Inactive'
    }, {
        value: 'active',
        text: 'Active'
    }];
}

/**
 * @ngdoc function
 * @name adminUiApp.controller:OrgsCtrl
 * @description
 * # OrgsCtrl
 * Controller of the adminUiApp
 */
angular.module('churchAdminToolApp')
    .controller('SmallGroupsCtrl', SmallGroupsCtrl);