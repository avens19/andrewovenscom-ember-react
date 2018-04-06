import Component from '@ember/component';
import { connect } from 'ember-redux';
import { loadContactsAsync } from '../actions/contactActions';

var stateToComputed = (state) => {
  return {
    contacts: state.contacts
  };
};

var dispatchToActions = (dispatch) => {
  return {
    loadContacts: () => dispatch(loadContactsAsync())
  };
};

const ContactPage = Component.extend({
  willInsertElement() {
    this.send('loadContacts');
  }
});

export default connect(stateToComputed, dispatchToActions)(ContactPage);
