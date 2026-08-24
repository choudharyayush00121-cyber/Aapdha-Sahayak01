import react from 'react'
import { createRoot } from 'react-dom/client';
import { provider } from 'react-redux'
import { store } from './app/stores';
import App from './App';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <>
    <provider store={store}>
        <App/>
        </provider>
        </>

);
