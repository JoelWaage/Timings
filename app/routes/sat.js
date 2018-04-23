import Route from '@ember/routing/route';
import moment from 'moment';

export default Route.extend({
  moment: Ember.inject.service(),
  actions: {

    click() {
      console.log('working');
    },

    displayDate() {
      var start = moment();
      var end = moment(start).add(65, 'minutes');
      console.log(moment(start).format('h:mm'));
      console.log(moment(end).format('h:mm'));
    }
  }
});
