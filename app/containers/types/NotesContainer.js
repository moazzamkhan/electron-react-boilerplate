import React from 'react';
import { Route } from 'react-router-dom'

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';

import NotesSidebar from "./NotesSidebar";

import data from "./notes-data.json"
import NotesComponent from "../../components/types/NotesComponent";

const NotesContainer = ({ history }) => (
  <div style={{ width: '100%', height: '100%' }}>
    <NotesSidebar list={data} history={history} />
    <div style={{ height: '100%', marginLeft: 200 }}>
      <Route path="/:id" component={(props) => <NotesComponent {...props} data={data[+props.match.params.id]} />} />
    </div>
  </div>
)

export default NotesContainer

