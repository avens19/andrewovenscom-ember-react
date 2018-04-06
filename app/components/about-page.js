import Component from '@ember/component';
import { connect } from 'ember-redux';

var stateToComputed = (state) => {
  return {
    abouts: state.abouts
  };
};

const AboutPage = Component.extend({
});

export default connect(stateToComputed)(AboutPage);
