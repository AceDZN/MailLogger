'use strict';

describe('Service: LoggerData', function () {

    // load the service's module
    beforeEach(module('mailLoggerApp'));
    var logs = [];

    // instantiate service
    var LoggerData, mock;
    beforeEach(inject(function (_LoggerData_) {
      LoggerData = _LoggerData_;

    }));

    it('should test getLogs function', function () {
      expect(LoggerData.getLogs()).toEqual(logs);
    });

    it('should test addLog function', function () {
        var newLog = {email: "test@acedzn.com",timestamp: new Date().toLocaleString(),action:"added"};
        logs.unshift(newLog);
      expect(LoggerData.addLog(newLog.email)).toEqual(logs);
    });
    it('should test removeItemLog function', function () {
        var newLog = {email: "test@acedzn.com",timestamp: new Date().toLocaleString(),action:"removed"};
        LoggerData.addLog(newLog.email);
        logs.unshift(newLog);
        expect(LoggerData.removeItemLog(newLog)).toEqual(logs);
    });

  });
