// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import Sidebar from "./Sidebar";

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Sidebar />
        <div style={{ height: '100%', marginLeft: 200 }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
