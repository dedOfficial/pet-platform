import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {I18nextProvider} from "react-i18next";
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.tsx'
import store from "./app/redux/store.ts";
import i18n from "./i18n.ts";

import './app/styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <I18nextProvider i18n={i18n}>
                <Router>
                    <App />
                </Router>
          </I18nextProvider>
      </Provider>
  </React.StrictMode>,
)
