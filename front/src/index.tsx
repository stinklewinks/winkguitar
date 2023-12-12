import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './app';
import { Nav } from './pages/page/navbar/nav';
import './font/font.css'
import './font/color.css'

const container = document.getElementById('app') as HTMLElement;
const root =  createRoot(container);
root.render(
    <StrictMode>
        <Nav />
        <App />
    </StrictMode>
    );