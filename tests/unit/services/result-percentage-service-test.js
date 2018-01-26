import { moduleFor } from 'ember-qunit';
import ENV from 'catvsdog-ember-app/config/environment'
import test from 'ember-sinon-qunit/test-support/test'
import { injectMock } from '../../helpers/inject-mock'

const API_HOST = ENV.API_HOST || "http://localhost"
const API_PORT = ENV.API_PORT || "9000"
const API_ROUTE = ENV.API_ROUTE || "/api/v1"



moduleFor('service:result-percentage-service', 'Unit | Service | result percentage service', {
  beforeEach(){
    this.fetchServiceMock = injectMock(this,'fetch', {
      fetch: function () {}
    })
  },
  afterEach(){
    this.fetchServiceMock.restore();
  }
})

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});


test('getPercentageVoteReturnVote', function(assert) {
  // GIVEN
  const resultPercentageService = this.subject()
  const resultPercentageExpected = {"cat":0.5 ,"dog":0.5}
  const date = "2018-01-19"
  const response = {
    status: 200,
    json: function () {
      return {"cat":0.5 ,"dog":0.5}
    }
  }
  this.fetchServiceMock.expects('fetch')
    .resolves(response)

  // WHEN
  resultPercentageService.getPercentageVote(date)
    .then((result) => {
      // THEN
      assert.deepEqual(result,resultPercentageExpected)
    })

})

test('getPercentageVoteCallFetchWithAppropriateQuery', function() {
  // GIVEN
  const resultPercentageService = this.subject()
  const date = "2018-01-19"
  const query = `${API_HOST}:${API_PORT}${API_ROUTE}/vote-percentages?date=${date}`
  const response = {
    status: 200,
    json: function () {
      return "not mocked"
    }
  }
  this.fetchServiceMock.expects('fetch')
    .once()
    .withArgs(query)
    .resolves(response)
  // WHEN
  resultPercentageService.getPercentageVote(date)
  // THEN
  this.fetchServiceMock.verify()

})


test('getPercentageVoteReturnVoidObjectWhenServerAnswerVoidObject', function (assert) {
  // GIVEN
  const resultPercentageService = this.subject()
  const resultPercentageExpected = {}
  const date = "2018-01-19"
  const query = `${API_HOST}:${API_PORT}${API_ROUTE}/vote-percentages?date=${date}`
  const response = {
    status: 200,
    json: function () {
      return {}
    }
  }
  this.fetchServiceMock.expects('fetch')
    .once()
    .withArgs(query)
    .resolves(response)
  // WHEN
  resultPercentageService.getPercentageVote(date)
    .then((result) => {
      // THEN
      assert.deepEqual(result,resultPercentageExpected)
    })
})

test('returnVoidWhenApiReturnError', function (assert) {
  // GIVEN
  const resultPercentageService = this.subject()
  const resultPercentageExpected = {}
  const date = "2018-01-19"
  const query = `${API_HOST}:${API_PORT}${API_ROUTE}/vote-percentages?date=${date}`
  const response = {
    status: 404
  }
  this.fetchServiceMock.expects('fetch')
    .once()
    .withArgs(query)
    .resolves(response)
  // WHEN
  resultPercentageService.getPercentageVote(date)
    .then((result) => {
      // THEN
      assert.deepEqual(result,resultPercentageExpected)
    })
})


