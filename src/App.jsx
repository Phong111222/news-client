import React from 'react';
import MakeRoutes from './routes';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
export default function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <div className='App'>
          <MakeRoutes />
        </div>
      </Provider>
    </PersistGate>
  );
}
