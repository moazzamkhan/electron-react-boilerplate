// @flow
import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import NotesContainer from "./types/NotesContainer"


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

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

