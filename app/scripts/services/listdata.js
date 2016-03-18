'use strict';

/**
 * @ngdoc service
 * @name ngLoggerApp.ListData
 * @description
 * # ListData
 * Factory in the ngLoggerApp.
 */
angular.module('mailLoggerApp')
  .factory('ListData', function (LoggerData) {
    // Service logic
    // ...
    var listData = [
      {email:"alex@acedzn.com",id:1},
      {email:"design@acedzn.com",id:2}
    ];
    // Public API here
    return {
      getListItems: function () {
        return listData;
      }
    };
  });
