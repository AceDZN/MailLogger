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
      }
    };
  });
