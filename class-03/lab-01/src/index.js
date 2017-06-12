import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const rootElement = document.getElementById('app');

const renderApp = (element) => {
  const CounterContainer = require('./CounterContainer')
  render(
    <AppContainer>
      <CounterContainer />
    </AppContainer>,
    element
  );
};

renderApp(rootElement);

if (module.hot) {
	module.hot.accept(
    './CounterContainer.js',
    () => renderApp(rootElement)
  );
}