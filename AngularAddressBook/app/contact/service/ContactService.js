
angular.module('contactService', ['ngResource'])
    .factory('Contact', ['$resource', function($resource){
        return $resource('http://localhost:3000/api/v1/contacts/:contactId', {contactId:'@_id'});
}]);