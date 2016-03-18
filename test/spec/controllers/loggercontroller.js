'use strict';

describe('Controller: LoggercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('mailLoggerApp'));

  var LoggercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoggercontrollerCtrl = $controller('LoggercontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoggercontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
