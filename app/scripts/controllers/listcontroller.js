'use strict';

/**
 * @ngdoc function
 * @name mailLoggerApp.controller:ListcontrollerCtrl
 * @description
 * # ListcontrollerCtrl
 * Controller of the mailLoggerApp
 */
angular.module('mailLoggerApp')
  .controller('ListCtrl', function ($scope, Gravatar, ListData, LoggerData) {
    $scope.list = ListData.getListItems();

    $scope.getAvatar = function(email){
      var avatar = Gravatar.getAvatar(email);
      return avatar;
    };
    $scope.removeItem = function (item) {
      var removeIndex = $scope.list.map(
        function(item) { return item.id; }
      ).indexOf(item.id);
      ListData.removeListItem(removeIndex);
      LoggerData.removeItemLog(item);
    };

  });
