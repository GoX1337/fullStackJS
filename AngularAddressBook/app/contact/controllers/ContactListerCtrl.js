
angular.module('contactLister', ['contactService'])
    .controller('ContactListerCtrl', ['$scope', 'Contact', function($scope, Contact) {

            $scope.contacts = Contact.query();

            $scope.supprimer = function(contact, index){
               if(confirm("Are you sure ?")){
                    contact.$delete(function() {
                        $scope.contacts.splice(index, 1);
                        $scope.contacts = Contact.query();
                    });
                }
            };

            $scope.save = function(contact){
                $scope.contactEdited = contact;
            };

            $scope.editer = function(){
                $scope.contactEdited.$save(function(){
                    $scope.contacts = Contact.query();
                    $('#myModal').modal('toggle');
                })
            };
}]);
