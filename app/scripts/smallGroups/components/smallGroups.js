'use strict';

function churchToolSmallGroups() {
    return {
        scope: {},
        bindToController: {
            orgs: '='
        },
        controller: function() {},
        link: function( /*scope, elm, attrs, ctrl*/ ) {},
        controllerAs: 'vm',
        templateUrl: 'scripts/smallGroups/components/groups.html'
    };
}

angular.module('churchAdminToolApp')
    .directive('churchToolSmallGroups', churchToolSmallGroups);