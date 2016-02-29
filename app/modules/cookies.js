'use strict';

angular.module('myAppCookies', ['ng', 'ngStorage']).
   factory('$cookies', ['$localStorage', function ($localStorage) {
     return $localStorage;
   }]);
