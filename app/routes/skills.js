import { route } from 'ember-redux';
import { loadSkillsAsync } from '../actions/skillActions';

export default route({
  model(dispatch) {
    dispatch(loadSkillsAsync())
  }
})();
