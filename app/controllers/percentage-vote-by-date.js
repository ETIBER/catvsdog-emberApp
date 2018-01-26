import Controller from '@ember/controller';
import Moment from 'moment'

export default Controller.extend({
  actions: {
    dateSelected: function(date) {
      this.set('formatedDate',Moment(date).format("YYYY-MM-DD"))
      return this.send('dateSelectedR',this.get('formatedDate'))
    }
  },
});
