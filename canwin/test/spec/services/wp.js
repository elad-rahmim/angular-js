'use strict';

describe('Service: wp', function () {

  // load the service's module
  beforeEach(module('canwinApp'));

  // instantiate service
  var wp;
  beforeEach(inject(function (_wp_) {
    wp = _wp_;
  }));

  it('should do something', function () {
    expect(!!wp).toBe(true);
  });

});