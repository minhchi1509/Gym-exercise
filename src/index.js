import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StyledEngineProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StyledEngineProvider>
)