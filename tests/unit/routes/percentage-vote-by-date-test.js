import { moduleFor, test } from 'ember-qunit';
import {injectMock} from "../../helpers/inject-mock";
import moment from 'moment';


moduleFor('route:percentage-vote-by-date', 'Unit | Route | percentage vote by date', {
  // Specify the other units that are required for this test.
  beforeEach() {
    this.resultPercentageServiceMock= injectMock(this, 'result-percentage-service', {
      getPercentageVote: function () {
      }
    })
  },
  afterEach(){
    this.resultPercentageServiceMock.restore();
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('whenDateSelectedCallResultPercentageServiceWithDate', function (assert) {
  // GIVEN
  assert.expect(2)
  const percentageVoteByDateroute = this.subject()
  percentageVoteByDateroute.set('controller', {
    set: function () { assert.ok(true) }
  })
  const date = "24-07-1993"
  this.resultPercentageServiceMock
    .expects('getPercentageVote')
    .once()
    .withArgs(date)
    .resolves({cat:1,dog:0})
  // WHEN
  percentageVoteByDateroute.send('dateSelectedR',date)
    .then(()=> {
      this.resultPercentageServiceMock.verify()
    })
  //THEN

})

test('whenDateSelectedChangePercentageValue', function (assert) {
  // GIVEN
  assert.expect(2)
  const percentageVoteByDateroute = this.subject()
  const date = "24-07-1993"
  const expectedPercentage = {cat:1,dog:0}
  percentageVoteByDateroute.set('controller', {
    set: function (modelValueName,percentage) {
      //THEN
      assert.equal(modelValueName,"model.percentage")
      assert.deepEqual(percentage, expectedPercentage)
    }
  })
  this.resultPercentageServiceMock
    .expects('getPercentageVote')
    .resolves(expectedPercentage)
  // WHEN
  percentageVoteByDateroute.send('dateSelectedR',date)
})

test('whenThereIsNoResult,SetPercentageToUndifined', function (assert) {
  // GIVEN
  assert.expect(2)
  const percentageVoteByDateroute = this.subject()
  const date = "24-07-1993"
  percentageVoteByDateroute.set('controller', {
    set: function (modelValueName,percentage) {
      //THEN
      assert.equal(modelValueName,"model.percentage")
      assert.deepEqual(percentage, undefined)
    }
  })
  this.resultPercentageServiceMock
    .expects('getPercentageVote')
    .resolves({})
  // WHEN
  percentageVoteByDateroute.send('dateSelectedR',date)
})

test('whenModelInit,InitVariable', function (assert) {
  // GIVEN
  const percentageVoteByDateroute = this.subject()
  const expectedDate = moment().format("YYYY-MM-DD");
  const expectedPercentage = {cat:0.3,dog:0.7}
  this.resultPercentageServiceMock
    .expects('getPercentageVote')
    .once()
    .withArgs(expectedDate)
    .resolves(expectedPercentage)
  // WHEN
  return percentageVoteByDateroute.model()
    .then(()=>{
      // THEN
      assert.equal(percentageVoteByDateroute.get('date'),expectedDate)
    })
})

test('whenModelInit,UpdatePercentageToTodayDate', function (assert) {
  // GIVEN
  const percentageVoteByDateroute = this.subject()
  const expectedDate = moment().format("YYYY-MM-DD");
  const expectedPercentage = {cat:0.3,dog:0.7}
  this.resultPercentageServiceMock
    .expects('getPercentageVote')
    .once()
    .withArgs(expectedDate)
    .resolves(expectedPercentage)
  // WHEN
  return percentageVoteByDateroute.model()
    .then((model)=> {
        //THEN
        const percentage = model.percentage
        assert.deepEqual(percentage, expectedPercentage)
        this.resultPercentageServiceMock.verify()
      }
    )
})

