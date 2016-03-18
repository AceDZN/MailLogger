'use strict';

/**
 * @ngdoc function
 * @name mailLoggerApp.controller:ListcontrollerCtrl
 * @description
 * # ListcontrollerCtrl
 * Controller of the mailLoggerApp
 */
angular.module('mailLoggerApp')
  .controller('ListCtrl', function ($scope, ListData, LoggerData) {
    $scope.list = ListData.getListItems();

    $scope.removeItem = function (item) {
      var removeIndex = $scope.list.map(
        function(item) { return item.id; }
      ).indexOf(item.id);
      ListData.removeListItem(removeIndex);
      LoggerData.removeItemLog(item);
    };

  });
