import Route from '@ember/routing/route';
import moment from 'moment';

export default Route.extend({
  moment: Ember.inject.service(),
  actions: {

    click() {
      console.log('working');
    },

    displayDate() {
      console.log('click');
      var start = moment().format('MM/DD/YYYY');
      console.log(start);
    }
  }
});
