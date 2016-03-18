'use strict';

describe('Directive: LoggerForm', function () {

  // load the directive's module
  beforeEach(module('mailLoggerApp'));
  beforeEach(module('app/views/loggerform-directive.html')); // The external template file referenced by templateUrl

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<bs-address address="address"></bs-address>');
      $compile(element)(scope); // Compile the directive
      scope.$digest(); // Update the HTML

      var isoScope = element.isolateScope();

          // Make our assertions
      expect(isoScope.address.address1).toBe('');
    }));
  });
