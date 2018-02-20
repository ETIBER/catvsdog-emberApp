import { inject as service } from '@ember/service'
import Service from '@ember/service';
import ENV from 'catvsdog-ember-app/config/environment';
import Ember from 'ember';

const API_HOST = ENV.API_HOST
const API_PORT = ENV.API_PORT
const API_ROUTE = ENV.API_ROUTE

export default Service.extend({
  fetch: service(),
  getPercentageVote(date){
    const query = `${API_HOST}:${API_PORT}${API_ROUTE}/vote-percentages?date=${date}`
    Ember.Logger.log({
      message: `getPercentageVote on ${query}`
    })
    return this.get('fetch').fetch(query)
      .then(function(response) {
        let jsonResponse = {}
        if(response.status == 200){
          jsonResponse = response.json();
        }
        return jsonResponse
      })
  }
});
