import { all, takeLatest } from 'redux-saga/effects';

import { Types as ExampleTypes } from 'store/ducks/example';

import { getExample } from './example';

export default function* rootSaga() {
  return yield all([takeLatest(ExampleTypes.GET_REQUEST, getExample)]);
}
