'use strict';

/**
 * @ngdoc function
 * @name mailLoggerApp.controller:FormcontrollerCtrl
 * @description
 * # FormcontrollerCtrl
 * Controller of the mailLoggerApp
 */
angular.module('mailLoggerApp')
  .controller('FormCtrl', function ($scope, ListData,LoggerData) {
    $scope.newListItem = '';

    $scope.addItem = function () {
      ListData.addListItem($scope.newListItem);
      LoggerData.addLog($scope.newListItem);
      $scope.newListItem = '';
    };
  });
