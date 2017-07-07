// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider } from 'material-ui/styles';

import App from "./App"
import NotesContainer from "./types/NotesContainer"

type RootType = {
  store: {},
  history: {}
};

export default function Root({ store, history }: RootType) {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NotesContainer history={history} />
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  );
}


