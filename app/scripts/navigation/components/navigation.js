'use strict';

function churchToolNavigation() {
    return {
        scope: {},
        bindToController: {
            items: '='
        },
        controller: function() {},
        link: function( /*scope, elm, attrs, ctrl*/ ) {},
        controllerAs: 'vm',
        templateUrl: 'scripts/navigation/components/navigation.html'
    };
}

angular.module('churchAdminToolApp')
    .directive('churchToolNavigation', churchToolNavigation);