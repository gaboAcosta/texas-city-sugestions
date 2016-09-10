const
  controller = require('./controller'),
  service = require('./service'),
  expect = require('expect'),
  http_mocks = require('node-mocks-http'),
  sinon = require('sinon');

require('sinon-as-promised');

function buildResponse() {
  return http_mocks.createResponse({eventEmitter: require('events').EventEmitter})
}

describe('Texas controller tests', function () {
  it('Should call the service getTexasCities method', function () {

    const mockResponse = buildResponse();

    mockResponse.on('end', function() {
      expect(response._getData()).toEqual({suggestions:[]});
    });

    service.getTexasCities = sinon.stub().resolves([]);
    controller.getTexasCitiesSuggestions({}, mockResponse);
    expect(service.getTexasCities.calledOnce).toEqual(true);
  });
});