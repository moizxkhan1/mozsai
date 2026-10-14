import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// No <StrictMode>: the scroll-reveal setup tags DOM nodes once on mount, and
// StrictMode's dev-only double mount would leave them hidden.
createRoot(document.getElementById('root')!).render(<App palette="rust" />);
