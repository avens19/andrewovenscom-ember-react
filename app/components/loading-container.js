import Component from '@ember/component';
import { connect } from 'ember-redux';

var stateToComputed = (state) => {
  return {
    loading: state.asyncCallsInProgress > 0
  };
};

const LoadingContainer = Component.extend({
});

export default connect(stateToComputed)(LoadingContainer);
