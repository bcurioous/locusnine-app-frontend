import { takeLatest, put } from 'redux-saga/effects';
import { SAVE_USER, GET_USERS } from './constants';
// import { onSaveUserSuccess, onGetUserSuccess, onGetUserError } from './actions';

export function* fetchUsers({ limit = 10, offset }) {
  // try {
  //   const Person = Parse.Object.extend('persons');
  //   const query = new Parse.Query(Person);
  //   console.log('limit :', limit);
  //   query.limit(limit);
  //   if (offset) {
  //     query.skip(offset);
  //   }
  //   const rows = yield query.find();
  //   const count = yield query.count();
  //   yield put(
  //     onGetPersonSuccess({
  //       rows,
  //       count,
  //     }),
  //   );
  // } catch (error) {
  //   yield put(onGetPersonError(error));
  // }
}
export function* saveUser({ userObj }) {
  // console.log('saveUser saga');
  // try {
  //   const Person = Parse.Object.extend('persons');
  //   const person = new Person();
  //   // person.set('dataSchema', _get(userObj, 'dataSchema', {}));
  //   // person.set('formData', _get(userObj, 'formData', {}));
  //   // person.set('uiSchema', _get(userObj, 'uiSchema', {}));

  //   const newPerson = yield person.save({ ...userObj });
  //   // .then((person) => {
  //   // console.log('person is :: ', newPerson);
  //   yield put(onSavePersonSuccess(newPerson));
  //   // }, (error) => {
  //   //   console.log('Failed to create new object, with error code: ' + error.message);
  //   // });
  // } catch (err) {
  //   // console.log('registration error :', err);
  // }
}
// Individual exports for testing
export default function* userListPageSaga() {
  // See example in containers/HomePage/saga.js
  // console.log('in root saga');
  yield [takeLatest(SAVE_USER, saveUser), takeLatest(GET_USERS, fetchUsers)];
}
