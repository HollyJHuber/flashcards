import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


/// code copied from memory game


// change to this eventually
//import App from './components/App';


// import from these three libraries, which we installed with npm
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
// grab our reducer. import will automatically choose the index.js file in the
// ./reducers folder.
import reducer from './reducers'

// Create the redux Store. This is the central hub of Redux. It keeps track of
// the state (data) and calls the reducers.
const store = createStore(
    reducer,
    applyMiddleware( createLogger() ) // Enable Redux logging which is handy for developers.
);

// We need wrap our whole app in the Provider component. This lets Redux do its magic.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
