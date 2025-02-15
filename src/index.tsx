import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export interface Item {
    id: string,
    pic: string,
    title: string,
    score?: number,
    description: string
}

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App/>);
}
