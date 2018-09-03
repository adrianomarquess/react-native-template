import 'config/ReactotronConfig';

import React from 'react';

import Routes from 'routes';
import { Provider } from 'react-redux';
import store from 'store';

// import { PersistGate } from 'redux-persist/es/integration/react';
// import { persistStore } from 'redux-persist';

// const persistor = persistStore(store);

// const App = () => (
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>
//       <Routes />
//     </PersistGate>
//   </Provider>
// );

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
