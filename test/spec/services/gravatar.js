'use strict';

describe('Service: Gravatar', function () {

  // load the service's module
  beforeEach(module('mailLoggerApp'));

  // instantiate service
  var Gravatar;
  beforeEach(inject(function (_Gravatar_) {
    Gravatar = _Gravatar_;
  }));

  it('should do something', function () {
    expect(!!Gravatar).toBe(true);
  });

});
