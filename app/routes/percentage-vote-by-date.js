import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'
import moment from "moment";
import RSVP from 'rsvp';

export default Route.extend({
  resultPercentageService: service(),
  date: undefined,
  actions: {
    dateSelectedR: function(date) {
      return this._getPercentage(date)
        .then((percentage) => {
          const controller = this.get('controller')
          if(Object.keys(percentage).length === 0) percentage = undefined
          controller.set('model.percentage',percentage)
      })
        }
    },
  model() {
    const today = moment().format("YYYY-MM-DD")
    this.set('date', today)
    return this._getPercentage(today)
      .then((percentage)=>{
        return RSVP.hash({
          percentage: percentage,
          date: this.get('date')
      })
    });

  },
  _getPercentage(date){
    return this.get('resultPercentageService').getPercentageVote(date).then((percentage)=>{
      return percentage
    })
  }

});
