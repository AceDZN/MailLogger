'use strict';

/**
 * @ngdoc service
 * @name mailLoggerApp.Gravatar
 * @description
 * # Gravatar
 * Factory in the mailLoggerApp.
 */
angular.module('mailLoggerApp')
  .factory('Gravatar', function () {
    // Service logic
    // ...
    var avatarSize = 40;
    var gravatarUrl = 'http://gravatar.com/avatar/';
    this.setAvatarSize = function(size){
      avatarSize = size;
    };
    this.getAvatar =  function(email){
      var hash;
      if (email === void 0) {
          email = '';
      }
      hash = email.trim();
      hash = hash.toLowerCase();
      hash = md5(hash);
      return gravatarUrl + hash + '?s='+avatarSize.toString();
    };
    return this;
  });
