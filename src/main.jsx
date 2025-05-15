import { createRoot } from 'react-dom/client';

import App from './App';

import './main.css'
import { BrowserRouter } from 'react-router';

import { Provider } from 'react-redux';
import store from './redux'

console.log('main.jsx file');
const reactRoot = createRoot(main);

reactRoot.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
