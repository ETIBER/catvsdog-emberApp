import { test } from 'qunit';
import moduleForAcceptance from 'catvsdog-ember-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | percentage vote by date');

test('visiting /percentage-vote-by-date', function(assert) {
  visit('/percentage-vote-by-date');

  andThen(function() {
    assert.equal(currentURL(), '/percentage-vote-by-date');
  });
});
