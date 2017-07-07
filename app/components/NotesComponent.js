import React from 'react';
import CodeMirror from 'react-codemirror';


import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';

const options = {
  lineNumbers: true,
  readOnly: false,
  mode: 'javascript'
};
const value = `var component = {
  name: "react-codemirror",
  author: "Jed Watson",
  repo: "https://github.com/JedWatson/react-codemirror"
};`

const NotesComponent = () => (
  <CodeMirror value={value} options={options} autoFocus />)

export default NotesComponent
