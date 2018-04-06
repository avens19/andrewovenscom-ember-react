import Component from '@ember/component';
import { connect } from 'ember-redux';
import { loadSkillsAsync } from '../actions/skillActions';

var stateToComputed = (state) => {
  return {
    skills: state.skills
  };
};

var dispatchToActions = (dispatch) => {
  return {
    loadSkills: () => dispatch(loadSkillsAsync())
  };
};

const SkillsPage = Component.extend({
  willInsertElement() {
    this.send('loadSkills');
  }
});

export default connect(stateToComputed, dispatchToActions)(SkillsPage);
