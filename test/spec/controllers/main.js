'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mailLoggerApp'));
  var controller, scope;

  beforeEach(inject(function($controller, $rootScope){
          scope = $rootScope.$new();
          controller = $controller('MainCtrl', {
              $scope: scope
          });
      }));

      describe('should attach my Name as the Author of the site', function() {
          it('sets variables ', function() {
              expect(scope).toBeDefined();
              expect(scope.author).toEqual("Alex Sindalovsky");
          });
      });
});
