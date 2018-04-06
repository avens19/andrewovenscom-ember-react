import Component from '@ember/component';
import { connect } from 'ember-redux';

var stateToComputed = (state) => {
  return {
    skills: state.skills
  };
};

const SkillsPage = Component.extend({
});

export default connect(stateToComputed)(SkillsPage);
