import { moduleFor, test } from 'ember-qunit';
import moment from 'moment';

moduleFor('service:fetch', 'Integration | Service | fetch', {
});

// Replace this with your real tests.

test('getAResult', function(assert) {
  // GIVEN
  assert.expect( 1 );
  const fetch = this.subject()
  // WHEN
  const date = moment().format("YYYY-MM-DD");
  return fetch.fetch(`http://localhost:9000/api/v1/vote-percentages?date=${date}`)
    .then(function(response) {
      assert.equal(response.status,200)
  })
});


