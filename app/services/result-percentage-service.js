import { inject as service } from '@ember/service'
import Service from '@ember/service';
import ENV from 'catvsdog-ember-app/config/environment';

const API_HOST = ENV.API_HOST || "http://localhost"
const API_PORT = ENV.API_PORT || "9000"
const API_ROUTE = ENV.API_ROUTE || "/api/v1"

export default Service.extend({
  fetch: service(),
  getPercentageVote(date){
    const query = `${API_HOST}:${API_PORT}${API_ROUTE}/vote-percentages?date=${date}`
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
