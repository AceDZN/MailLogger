'use strict';

describe('Service: ListData', function () {

  // load the service's module
  beforeEach(module('mailLoggerApp'));

  // instantiate service
  var ListData, mock;
  beforeEach(inject(function (_ListData_) {
    ListData = _ListData_;
    mock = [{email:"alex@acedzn.com", id:1},{email:"design@acedzn.com", id:2}];
  }));

  it('should test getListItems function', function () {
    expect(ListData.getListItems()).toEqual(mock);
  });

  it('should test addListItem function', function(){
    var item = "test@acedzn.com";
    var newMock = {email:item, id:3};
    mock.push(newMock);
    expect(ListData.addListItem(item)).toEqual(mock);
  });

  it('should test removeListItem function', function(){
    var index = 1;
    index > -1 && mock.splice(index, 1);
    expect(ListData.removeListItem(index)).toEqual(mock);
  });
});
