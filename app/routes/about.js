import { route } from 'ember-redux';
import { loadAboutsAsync } from '../actions/aboutActions';

export default route({
  model(dispatch) {
    dispatch(loadAboutsAsync())
  }
})();
