import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducers from './reducers';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);

  const composeEnhancers = __DEV__ && typeof window === 'object' ? composeWithDevTools : compose;

  const store = createStore(persistedReducer, composeEnhancers(middlewares));
  const persistor = persistStore(store);
  // TODO remove
  // __DEV__ && persistor.purge();
  sagaMiddleware.run(sagas);
  return { store, persistor };
};
