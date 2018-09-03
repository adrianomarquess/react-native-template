import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as ExampleActions } from 'store/ducks/example';

export function* getExample() {
  try {
    const response = yield call(api.get, '/test');
    yield put(ExampleActions.getExampleSuccess(response.data));
  } catch (err) {
    yield put(ExampleActions.getExampleFailure('Erro ao buscar os albums'));
  }
}
