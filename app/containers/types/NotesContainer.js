import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import NotesSidebar from "./NotesSidebar";
import NotesComponent from "../../components/types/NotesComponent";
import * as NotesActions from "../../actions/notes"

const NotesContainer = ({ note, items, openNote, modifyNote }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <NotesSidebar list={items} onNavigate={(to) => openNote(to)} />
      <div style={{ height: '100%', marginLeft: 200 }}>
        <NotesComponent {...note} onChange={(id, text) => {
          modifyNote(id, text)
        }} />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    items: state.notebook.notes.sort((a, b) => a.lastModified > b.lastModified).map((n) => {
      return {
        title: n.value.split(/\r?\n/)[0],
        id: n.id
      }
    }),
    note: state.notebook.notes.filter((n) => n.id === state.notebook.current)[0]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NotesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
// export default NotesContainer

