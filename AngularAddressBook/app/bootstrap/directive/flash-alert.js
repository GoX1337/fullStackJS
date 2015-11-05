
angular.module('bootstrapFlashAlert', ['bootstrapAlert'])
    .factory('flashMessenger', ['$window', function($window){
        return {
            set: function(msg){
                $window.sessionStorage.setItem('flashMessage', msg);
            },
            get: function(){
                var msg =  $window.sessionStorage.getItem('flashMessage');
                $window.sessionStorage.removeItem('flashMessage');
                return msg;
            }
        };
    }])
    .controller('BtFlashAlertCtrl', ['$scope', 'flashMessenger', function($scope, flashMessenger){

        $scope.message = flashMessenger.get();

    }])
    .directive('btFlashAlert', function(){
        "use strict";
        return {
            restrict: 'E',
            controller: 'BtFlashAlertCtrl',
            templateUrl: 'app/bootstrap/directive/flash-alert.html'
        };
    });