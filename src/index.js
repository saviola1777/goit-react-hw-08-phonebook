import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store , persistor  } from './Redux/store'
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux'; // імпортуємо компонент провайдер який дає доступ до глобального стану і передає сторе огортуєм App імаємо глобальний доступ до store d


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <BrowserRouter>
   <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
    </PersistGate>
  </BrowserRouter>
  // </React.StrictMode>
);
