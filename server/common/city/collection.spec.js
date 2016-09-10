
const
  expect = require('expect'),
  sampleRemoteList = [require('./model.remote.fixture')],
  factory = require('./collection.factory');

describe('CitySuggestions Factory tests', function () {
  it('should return an empty array if no search terms are sent', function () {
    expect(factory.getCitySuggestionArray(sampleRemoteList, {})).toEqual([]);
  });
  it('should return an array with scored suggestions if name search is provided', function () {
    const options = {name:'test'},
      expectedResult = [{"name": "test", "latitude":2, "longitude":1, "score": 0.4}];
    expect(factory.getCitySuggestionArray(sampleRemoteList, options)).toEqual(expectedResult);
  });
  it('should return an array with scored suggestions if longitude search is provided', function () {
    const options = {longitude:1},
      expectedResult = [{"name": "test", "latitude":2, "longitude":1, "score": 0.3}];
    expect(factory.getCitySuggestionArray(sampleRemoteList, options)).toEqual(expectedResult);
  });
  it('should return an array with scored suggestions if latitude search is provided', function () {
    const options = {latitude:2},
      expectedResult = [{"name": "test", "latitude":2, "longitude":1, "score": 0.3}];
    expect(factory.getCitySuggestionArray(sampleRemoteList, options)).toEqual(expectedResult);
  });

});
