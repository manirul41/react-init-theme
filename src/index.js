import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './core/app/App';
import { store } from './core/redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
