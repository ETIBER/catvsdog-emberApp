import { inject as service } from '@ember/service'
import Service from '@ember/service';
import Ember from 'ember';

const API_HOST = process.env.API_HOST || "http://localhost"
const API_PORT = process.env.API_PORT || "9000"
const API_ROUTE = process.env.API_ROUTE || "/api/v1"

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
