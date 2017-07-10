import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import NotesRepository from "./repository/NotesRepository"
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.scss';

NotesRepository.read().subscribe((data) => {
  const store = configureStore(JSON.parse(data));

  store.subscribe(() => {
    const state = store.getState();
    NotesRepository.save(JSON.stringify(state))
  })

  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );


  if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
      render(
        <AppContainer>
          <NextRoot store={store} history={history} />
        </AppContainer>,
        document.getElementById('root')
      );
    });
  }
})

