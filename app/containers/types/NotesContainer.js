import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from "moment"

import NotesSidebar from "./NotesSidebar";
import NotesComponent from "../../components/types/NotesComponent";
import * as NotesActions from "../../actions/notes"

const sidebarWidth = 250

const NotesContainer = ({ note, items, openNote, modifyNote, current }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <NotesSidebar list={items} onNavigate={(to) => openNote(to)} width={sidebarWidth} current={current} />
      <div style={{ height: '100%', marginLeft: sidebarWidth }}>
        <NotesComponent {...note} onChange={(id, text) => {
          modifyNote(id, text)
        }} />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    items: state.notebook.notes.sort((a, b) => a.lastModified < b.lastModified).map((n) => {
      return {
        title: n.value.split(/\r?\n/)[0],
        id: n.id,
        lastModified: moment(new Date(n.lastModified)).fromNow()
      }
    }),
    note: state.notebook.notes.filter((n) => n.id === state.notebook.current)[0],
    current: state.notebook.current
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NotesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
// export default NotesContainer

