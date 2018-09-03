import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

// const persistedReducer = persistReducer(
//   {
//     key: 'appName',
//     storage,
//   },
//   reducers,
// );

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createAppropriateStore(reducers, applyMiddleware(...middleware));
// const store = createAppropriateStore(
//   persistedReducer,
//   applyMiddleware(...middleware)
// );

sagaMiddleware.run(sagas);

export default store;
