import React from 'react';
import { render } from 'react-dom';
import { configure } from 'mobx';

import App from './components/App';

configure({
  enforceActions: 'observed'
});

const root = document.getElementById('root');

render(
  <App />,
  root
);
