import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const { appStore, appPersistor } = configureStore();
ReactDOM.render(
    <Provider store={appStore}>
        <PersistGate loading={null} persistor={appPersistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.querySelector('#root'));

