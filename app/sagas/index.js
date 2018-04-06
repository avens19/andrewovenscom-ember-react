import { fork } from 'redux-saga/effects';
import aboutSaga from './aboutSaga';
import contactSaga from './contactSaga';
import skillsSaga from './skillsSaga';

export default function* root() {
  yield [
    fork(aboutSaga),
    fork(contactSaga),
    fork(skillsSaga)
  ];
}
