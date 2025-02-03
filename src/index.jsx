import { createRoot } from 'react-dom/client';

// fonts
import 'assets/fonts/inter/inter.css';

// scroll bar
import 'simplebar/dist/simplebar.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import App from './App';
import { ConfigProvider } from 'contexts/ConfigContext';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);

reportWebVitals();
