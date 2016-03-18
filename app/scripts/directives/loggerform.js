'use strict';

/**
 * @ngdoc directive
 * @name mailLoggerApp.directive:LoggerForm
 * @description
 * # LoggerForm
 */
angular.module('mailLoggerApp')
  .directive('loggerForm', function () {
    return {
      templateUrl: '../../views/loggerform-directive.html',
      restrict: 'E',
      controller: 'FormcontrollerCtrl',
      controllerAs: 'form'
    };
  });
