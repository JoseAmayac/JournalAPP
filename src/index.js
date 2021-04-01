import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import JournalApp from './JournalApp';

import "./styles/styles.scss";

ReactDOM.render(
  <StrictMode>
    <JournalApp />
  </StrictMode>,
  document.getElementById('root')
);
