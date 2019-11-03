import {applyMiddleware, compose, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
  const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(thunk),
  )(createStore);

  let store = createStoreWithMiddleware(persistedReducer, initialState);
  let persistor = persistStore(store);

  return {store, persistor};
}

export default configureStore;
