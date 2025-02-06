import { StrictMode } from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThirdwebProvider } from '@thirdweb-dev/react';

const clientId = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThirdwebProvider clientId={clientId}>
    <App />
    </ThirdwebProvider>
  </StrictMode>
);
