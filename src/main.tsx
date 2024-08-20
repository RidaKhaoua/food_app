import { createRoot } from 'react-dom/client'
import './index.css'
import "./services/axios-global.js"
import Routes from '@routes/routes'
import { store } from './store/index';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Routes/>
  </Provider>
)
