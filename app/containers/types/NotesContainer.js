import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';


import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';


import NotesSidebar from "./NotesSidebar";
import NotesComponent from "../../components/types/NotesComponent";
import * as NotesActions from "../../actions/notes"

const NotesContainer = (props) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <NotesSidebar list={items} history={history} onNavigate={(to) => history.push(to)} />
      <div style={{ height: '100%', marginLeft: 200 }}>
        <NotesComponent note={note} modifyNote={modifyNote} />
      </div>
    </div>
  )
}

function getId(history) {
  let path = history.location.pathname
  return +(path.substring(path.lastIndexOf("/") + 1)) || 0;
}

function mapStateToProps(state, ownProps) {
  return {
    items: state.notes.sort((a, b) => a.lastModified > b.lastModified).map((n) => {
      return {
        title: n.value.split(/\r?\n/)[0],
        id: n.id
      }
    }),
    note: state.notes[getId(ownProps.history)]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NotesActions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesContainer));
// export default NotesContainer

