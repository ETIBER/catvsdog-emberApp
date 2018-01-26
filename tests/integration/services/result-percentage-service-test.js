import { moduleFor,test } from 'ember-qunit';


moduleFor('service:result-percentage-service', 'Integration | Service | result percentage service', {
  integration: true,
})

test('getPercentageVoteReturnVote', function(assert) {
  // GIVEN
  assert.expect( 1 );
  const resultPercentageService = this.subject()
  const date = "2017-01-19"
  // WHEN
  return resultPercentageService.getPercentageVote(date)
    .then(function(result) {
      // THEN
      assert.ok(result)
    })
})
