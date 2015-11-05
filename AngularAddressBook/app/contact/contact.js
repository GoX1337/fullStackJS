
angular.module('contact', [
    'contactAjouter',
    'contactLister',
    'ngRoute']
).config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/contact/views/ContactLister.html',
            controller: 'ContactListerCtrl'
        })
        .when('/add', {
            templateUrl: 'app/contact/views/ContactAjouter.html',
            controller: 'ContactAjouterCtrl'
        })
        .otherwise({
           redirectTo: '/'
    });
});