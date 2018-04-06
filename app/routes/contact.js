import { route } from 'ember-redux';
import { loadContactsAsync } from '../actions/contactActions';

export default route({
  model(dispatch) {
    dispatch(loadContactsAsync())
  }
})();
