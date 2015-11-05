
angular.module('contactAjouter', ['contactService', 'bootstrapFlashAlert'])
    .controller('ContactAjouterCtrl', [
        '$scope',
        'Contact',
        '$location',
        'flashMessenger',
        function($scope, Contact, $location, flashMessenger) {

            $scope.ajouter = function(){
                var newContact = new Contact({prenom: $scope.newContact.prenomSaisi, nom: $scope.newContact.nomSaisi});
                newContact.$save(function(newContact){
                    //$scope.contacts.push(newContact);
                    $scope.newContact.prenomSaisi = "";
                    $scope.newContact.nomSaisi = "";
                    flashMessenger.set(newContact.nom + " " + newContact.prenom + " a été ajouté");
                    $location.path('/');
                })
            };

            $scope.supprimer = function(contact, index){
                Contact.$delete(contact, function() {
                    $scope.contacts.splice(index, 1);
                });
            };
    }]);