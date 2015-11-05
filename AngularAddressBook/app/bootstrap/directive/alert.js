
angular.module('bootstrapAlert', [])
    .directive('btAlert', function(){
        "use strict";
        return {
            restrict: 'E',
            transclude: true,
            scope:{
                type : '@'
            },
            templateUrl: 'app/bootstrap/directive/alert.html'
        };
    });