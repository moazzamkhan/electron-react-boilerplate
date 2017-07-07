import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';


import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';


import NotesSidebar from "./NotesSidebar";
import NotesComponent from "../../components/types/NotesComponent";
import * as NotesActions from "../../actions/notes"

const NotesContainer = ({ history, notes, modifyNote }) => (
  <div style={{ width: '100%', height: '100%' }}>
    <NotesSidebar list={notes} history={history} onNavigate={(to) => history.push(to)} />
    <div style={{ height: '100%', marginLeft: 200 }}>
      <Route path="/:id" component={(props) => <NotesComponent {...props} note={notes[+props.match.params.id]} modifyNote={modifyNote} />} />
    </div>
  </div>
)


function mapStateToProps(state) {
  return {
    notes: state.notes.sort((a, b) => a.lastModified > b.lastModified)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NotesActions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesContainer));
// export default NotesContainer

