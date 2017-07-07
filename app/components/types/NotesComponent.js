import React from 'react';
import CodeMirror from 'react-codemirror';


import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';

import "codemirror/addon/selection/active-line"

import './NotesComponent.scss'
import './one-dark.scss'
import './one-light.scss'

const options = {
  lineNumbers: true,
  readOnly: false,
  mode: 'javascript',
  styleActiveLine: true,
  theme: 'one-light'
};

const NotesComponent = ({ data }) => {
  options.mode = data.type;
  return <CodeMirror value={data.value} options={options} autoFocus />
}

export default NotesComponent

