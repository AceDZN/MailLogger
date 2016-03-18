'use strict';

/**
 * @ngdoc directive
 * @name mailLoggerApp.directive:LoggerLog
 * @description
 * # LoggerLog
 */
angular.module('mailLoggerApp')
  .directive('loggerLog', function () {
    return {
      templateUrl: '../../views/loggerlog-directive.html',
      restrict: 'E',
      controller: 'LoggercontrollerCtrl',
      controllerAs: 'logger'
    };
  });
