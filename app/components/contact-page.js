import Component from '@ember/component';
import { connect } from 'ember-redux';

var stateToComputed = (state) => {
  return {
    contacts: state.contacts
  };
};

const ContactPage = Component.extend({
});

export default connect(stateToComputed)(ContactPage);
