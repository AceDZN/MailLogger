'use strict';

/**
 * @ngdoc function
 * @name mailLoggerApp.controller:LoggercontrollerCtrl
 * @description
 * # LoggercontrollerCtrl
 * Controller of the mailLoggerApp
 */
angular.module('mailLoggerApp')
 .controller('LoggerCtrl', function ($scope,LoggerData) {
   $scope.logs = LoggerData.getLogs();
 });
