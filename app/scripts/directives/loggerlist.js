'use strict';

/**
 * @ngdoc directive
 * @name mailLoggerApp.directive:LoggerList
 * @description
 * # LoggerList
 */
angular.module('mailLoggerApp')
  .directive('loggerList', function () {
    return {
      templateUrl: '../../views/loggerlist-directive.html',
      restrict: 'E',
      controller: 'ListcontrollerCtrl',
      controllerAs: 'list'
    };
  });
