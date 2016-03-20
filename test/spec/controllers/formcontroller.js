'use strict';

describe('Controller: FormcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('mailLoggerApp'));
  var controller, scope;

  beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      controller = $controller('FormCtrl', {
          $scope: scope
      });
  }));
  describe('should have an empty string for start', function() {
      it('sets variables ', function() {
          expect(scope).toBeDefined();
          expect(scope.newListItem).toEqual("");
      });
  });
});
