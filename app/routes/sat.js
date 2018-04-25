import Route from '@ember/routing/route';
import moment from 'moment';

var sat = [{
  id: 1,
  date: moment().format('MMMM D, YYYY'),
  start: moment().format('h:mm a'),
  now: moment(),
  end: moment().add(4, 'hours').format('h:mm a')
}];

export default Route.extend({
  model() {
    return sat;
  },

  actions: {
    displayDate() {
      var start = moment();
      var end = moment(start).add(65, 'minutes');
      console.log(moment(start).format('h:mm a'));
      console.log(moment(end).format('h:mm a'));
    }
  }
});
