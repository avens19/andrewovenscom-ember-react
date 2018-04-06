import Component from '@ember/component';
import { connect } from 'ember-redux';
import { loadAboutsAsync } from '../actions/aboutActions';

var stateToComputed = (state) => {
  return {
    abouts: state.abouts
  };
};

var dispatchToActions = (dispatch) => {
  return {
    loadAbouts: () => dispatch(loadAboutsAsync())
  };
};

const AboutPage = Component.extend({
  willInsertElement() {
    this.send('loadAbouts');
  }
});

export default connect(stateToComputed, dispatchToActions)(AboutPage);
