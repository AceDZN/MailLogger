'use strict';

/**
 * @ngdoc directive
 * @name mailLoggerApp.directive:AceDZNLink
 * @description
 * # AceDZNLink
 */
angular.module('mailLoggerApp')
  .directive('acedznLink', function(){
    return {
      restrict: 'E',
      templateUrl: '../../views/ace-logo.html',
    };
  });
