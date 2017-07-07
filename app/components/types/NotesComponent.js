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


class NotesComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.note.id,
      value: props.note.value
    }
  }

  render() {
    return <CodeMirror
      ref={(cm) => this.codemirror = cm}
      value={this.state.value}
      options={options}
      autoFocus />
  }

  componentWillUnmount() {
    // onChange={(value) => this.props.modifyNote(this.state.id, value)}
    // this.props.modifyNote(this.state.id, this.codemirror.getCodeMirror().getValue())
  }
}

export default NotesComponent
