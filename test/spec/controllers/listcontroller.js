'use strict';

describe('Controller: ListcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('mailLoggerApp'));
  var controller, scope;

  beforeEach(inject(function($controller, $rootScope){
          scope = $rootScope.$new();
          controller = $controller('ListCtrl', {
              $scope: scope
          });
      }));

      describe('should have 2 items to start', function() {
          it('sets variables ', function() {
              expect(scope).toBeDefined();
              expect(scope.list.length).toBe(2);
          });
      });
});
