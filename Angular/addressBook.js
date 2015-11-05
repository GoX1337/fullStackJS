var addressBookModule = angular.module('addressBookModule', ['ngResource']);

addressBookModule.factory('Contact', ['$resource', function($resource){
    return $resource('http://localhost:3000/api/v1/contacts/:contactId', {contactId:'@id'});
}]);

addressBookModule.controller('AddressBookCtrl', ['$scope', 'Contact', function($scope, Contact) {
    $scope.contacts = Contact.query();

    $scope.ajouter = function(){
        var newContact = new Contact({prenom: $scope.newContact.prenomSaisi, nom: $scope.newContact.nomSaisi});
        newContact.$save(function(newContact){
            $scope.contacts.push(newContact);
            $scope.newContact.prenomSaisi = "";
            $scope.newContact.nomSaisi = "";
        })
    };

    $scope.supprimer = function(contact, index){
        Contact.$delete(contact, function() {
            $scope.contacts.splice(index, 1);
        });
    };
}]);