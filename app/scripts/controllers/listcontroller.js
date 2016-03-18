'use strict';

/**
 * @ngdoc function
 * @name mailLoggerApp.controller:ListcontrollerCtrl
 * @description
 * # ListcontrollerCtrl
 * Controller of the mailLoggerApp
 */
angular.module('mailLoggerApp')
  .controller('ListCtrl', function ($scope, ListData) {
    $scope.list = ListData.getListItems();

  });
