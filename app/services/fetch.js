import Service from '@ember/service';
import Ember from 'ember';

import fetch from "ember-network/fetch";

export default Service.extend({
  fetch(query) {
    Ember.Logger.log("new request to:" + query)
    return fetch(query).then((response)=>{
      return response
    }).catch(()=>{
      return {status:404}
    })
  }
})


