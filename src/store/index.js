import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './rootReducer';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const composeEnhancer = composeWithDevTools({ trace: true });

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
