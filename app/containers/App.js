// @flow
import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Sidebar from "./Sidebar";
import ProfileComponent from "../components/ProfileComponent";
import ContactComponent from "../components/ContactComponent";
import SocialComponent from "../components/SocialComponent";
import EventsComponent from "../components/EventsComponent";
import NotesComponent from "../components/types/NotesComponent";


const routes = [
  {
    path: '/',
    exact: true,
    component: ProfileComponent
  },
  {
    path: '/profile',
    component: ProfileComponent
  },
  {
    path: '/contact',
    component: ContactComponent,
  },
  {
    path: '/social',
    component: SocialComponent,
  },
  {
    path: '/events',
    component: EventsComponent,
  },
  {
    path: '/events',
    component: EventsComponent
  },
  {
    path: '/notes',
    component: NotesComponent,
  }
];

export default class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Sidebar />
        <div style={{ height: '100%', marginLeft: 200 }}>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </div>
      </div>
    );
  }
}
