import { moduleFor, test } from 'ember-qunit'
// import Moment from 'moment'
// import Controller from '@ember/controller';

moduleFor('controller:percentage-vote-by-date', 'Unit | Controller | percentage vote by date', {
  // Specify the other units that are required for this test.
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

// test('CallTheRouteMethodWithFormattedDate',function (assert) {
//   // GIVEN
//   let percentageVoteByDate = this.subject();
//   const today = Moment()
//   const formatedToday = today.format("YYYY-MM-DD")
//   percentageVoteByDate.set("percentage-vote-by-date", Controller.extend({
//       actions: {
//         dateSelected: (date) => {
//           // THEN
//           assert.equal(date,formatedToday)
//           assert.ok(true, 'Action bubbled!')
//         }
//       }
//     }).create())
//   // WHEN
//   percentageVoteByDate.send('dateSelected',today)
// })
