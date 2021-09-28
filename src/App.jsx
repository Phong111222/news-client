import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
export default function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <div>Main</div>
      </Provider>
    </PersistGate>
  );
}
