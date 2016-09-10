const
  expect = require('expect'),
  remoteFixture = require('./model.remote.fixture'),
  localFixture = require('./model.local.fixture');

describe('CitySuggestionModel tests', function () {
  const model = require('./model');

  it('should raise an exception if no JSON is passed', function () {
    expect(function () {
      const noJSON = new model();
    }).toThrow(Error);
  });

  it('should have constant numeric values to score suggestions', function () {
    const testSubject = new model(remoteFixture);
    expect(isNaN(testSubject.NAME_SCORE_PERCENTAGE)).toBe(false);
    expect(isNaN(testSubject.LONGITUDE_SCORE_PERCENTAGE)).toBe(false);
    expect(isNaN(testSubject.LATITUDE_SCORE_PERCENTAGE)).toBe(false);
  });

  it('should return an scored suggestion when toJSON is called', function () {
    const
      testSubject = new model(remoteFixture),
      expectedResult = {"name": "test", "longitude":1, "latitude":2, "score": 0};

    expect(testSubject.toJSON()).toEqual(expectedResult);
  });

  it('should score based on the searched name', function () {
    const
      testSubject = new model(remoteFixture),
      expectedResult = {};

    Object.assign(expectedResult, localFixture);
    expectedResult.score = (testSubject.NAME_SCORE_PERCENTAGE / 100);

    testSubject.searchName = "test";
    expect(testSubject.toJSON()).toEqual(expectedResult);
  });

  it('should score based on the searched longitude', function () {
    const
      testSubject = new model(remoteFixture),
      expectedResult = {};

    Object.assign(expectedResult, localFixture);
    expectedResult.score = (testSubject.LONGITUDE_SCORE_PERCENTAGE / 100);

    testSubject.searchLongitude = 1;
    expect(testSubject.toJSON()).toEqual(expectedResult);
  });

  it('should score based on the searched latitude', function () {
    const
      testSubject = new model(remoteFixture),
      expectedResult = {};

    Object.assign(expectedResult, localFixture);
    expectedResult.score = (testSubject.LATITUDE_SCORE_PERCENTAGE / 100);

    testSubject.searchLatitude = 2;
    expect(testSubject.toJSON()).toEqual(expectedResult);
  });

  it('should give half a point if latitude distance difference with searchedLatitude is < 0.1', function () {
    const
      testSubject = new model(remoteFixture),
      expectedResult = {};

    Object.assign(expectedResult, localFixture);
    expectedResult.score = ((testSubject.LONGITUDE_SCORE_PERCENTAGE / 100) / 2);

    testSubject.searchLongitude = 1.11;
    expect(testSubject.toJSON()).toEqual(expectedResult);
  })

});