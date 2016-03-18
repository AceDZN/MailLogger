'use strict';

describe('Directive: AceDZNLink', function () {

  // load the directive's module
  beforeEach(module('mailLoggerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-ace-d-z-n-link></-ace-d-z-n-link>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the AceDZNLink directive');
  }));
});
