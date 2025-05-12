import { createRoot } from 'react-dom/client';

import App from './App';

import './main.css'
import { BrowserRouter } from 'react-router';

console.log('main.jsx file');
const reactRoot = createRoot(main);

reactRoot.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
