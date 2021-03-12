import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loadingReducer from './slices/loading.slice';

const rootReducer = combineReducers({
	loading: loadingReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistReducers,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export const persistor = persistStore(store);

export default store;
