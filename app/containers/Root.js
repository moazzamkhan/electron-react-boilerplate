// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import NotesContainer from "./types/NotesContainer"

type RootType = {
  store: {}
};

export default function Root({ store }: RootType) {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <NotesContainer />
      </Provider>
    </MuiThemeProvider>
  );
}

