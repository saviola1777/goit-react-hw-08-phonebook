import rootReducer from './root-reducer'

import { persistStore,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,}from 'redux-persist'; //  persistStore функція яка буде огортати наший редюсер

import { configureStore } from "@reduxjs/toolkit";  
    
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);  // Огортаємо наш глобальний сторе і коли завнтажуємо проект то брати з локал сториджа дані якшо є і записувати в редакс

// Після перезагрузки сторінки Persist з локал сториджу записує назад в редакс те що в ньому було , те що ми огорнули. Тобто коли ми реєструємся чи логінемося ми зберігаємо дані записуємо в локал сторинж наприклад наш токен при перезагрузці ми локал сториджа передаємо назад наші дані тоюто в Глобальномі сторі ми записуєм назад свій токен 




