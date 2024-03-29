import React from 'react';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import ReactDOM from 'react-dom/client';

import { persistor, store } from "./redux/store";

import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>        
            <App />           
        </PersistGate>     
      </Provider>
    </BrowserRouter> 
  </React.StrictMode>
);
