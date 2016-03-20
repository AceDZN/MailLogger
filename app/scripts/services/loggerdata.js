'use strict';

/**
 * @ngdoc service
 * @name ngLoggerApp.LoggerData
 * @description
 * # LoggerData
 * Factory in the ngLoggerApp.
 */
angular.module('mailLoggerApp')
  .factory('LoggerData', function () {
      // Service logic
      // ...
      var logs = [];

      // Public API here
      return {
        getLogs: function () {
          return logs;
        },
        addLog: function(item){
          var newLog = {};
          newLog.timestamp = new Date().toLocaleString();
          newLog.email = item;
          newLog.action = "added";
          logs.unshift(newLog);
          return this.getLogs();
        },
        removeItemLog: function(item){
          var newLog = {};
          newLog.timestamp = new Date().toLocaleString();
          newLog.email = item.email;
          newLog.action = "removed";
          logs.unshift(newLog);
          return this.getLogs();
        }
      };
    });
