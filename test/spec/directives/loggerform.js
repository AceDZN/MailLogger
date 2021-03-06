'use strict';

describe('Directive: LoggerForm', function () {
    // load the directive's module
    beforeEach(module('mailLoggerApp'));
    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<logger-form></logger-form>');
      element = $compile(element)(scope);
    }));
  });
