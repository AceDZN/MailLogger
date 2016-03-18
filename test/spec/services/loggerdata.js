'use strict';

describe('Service: LoggerData', function () {

  // load the service's module
  beforeEach(module('mailLoggerApp'));

  // instantiate service
  var LoggerData;
  beforeEach(inject(function (_LoggerData_) {
    LoggerData = _LoggerData_;
  }));

  it('should do something', function () {
    expect(!!LoggerData).toBe(true);
  });

});
