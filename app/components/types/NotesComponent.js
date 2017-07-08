import React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';

import "codemirror/addon/selection/active-line"

import './NotesComponent.scss'
import './one-dark.scss'
import './one-light.scss'


class NotesComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({
      readOnly: false,
      mode: 'javascript',
      styleActiveLine: true,
      theme: 'one-light'
    }, {
      id: props.id,
      mode: props.type,
      value: props.value
    });

    this.handleChange = this.handleChange.bind(this)
  }


  componentDidMount() {
    this.codemirror = CodeMirror(this.el, {
      value: this.state.value,
      mode: this.state.mode,
      theme: 'one-light'
    });
    this.codemirror.on("change", (cm) => this.handleChange(cm.getValue()));
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ id: nextProps.id, value: nextProps.value, type: nextProps.type })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      console.log(this.state.value)
      this.codemirror.setValue(this.state.value)
    }
  }

  render() {
    return <div className="ReactCodeMirror" ref={(el) => this.el = el} />
  }

  handleChange(value) {
    if (value !== this.state.value) {
      this.props.onChange(this.state.id, value);
    }
  }

}

export default NotesComponent
