'use strict';

describe('Controller: LoggercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('mailLoggerApp'));

  var LoggerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoggerCtrl = $controller('LoggerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be an empty array of logs', function () {
    expect(scope.logs.length).toBe(0);
  });
});
