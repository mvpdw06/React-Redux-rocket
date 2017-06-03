import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const rootElement = document.getElementById('app');

const renderApp = () => {
  const App = require('./app')
  render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootElement
  );
};

renderApp(rootElement);

if (module.hot) {
	module.hot.accept(
    './app.js',
    () => renderApp(rootElement)
  );
}