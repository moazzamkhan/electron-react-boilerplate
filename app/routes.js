/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Route, Switch } from 'react-router';
import App from './containers/App';
import ProfileComponent from "./components/ProfileComponent";
import ContactComponent from "./components/ContactComponent";
import SocialComponent from "./components/SocialComponent";
import EventsComponent from "./components/EventsComponent";

export default () => (
  <App>
    <Switch>
      {
        [["/", ProfileComponent],
          ["/profile", ProfileComponent],
          ["/contact", ContactComponent],
          ["/social", SocialComponent],
          ["/events", EventsComponent]].map(cfg => createRoute(cfg))
      }
    </Switch>
  </App>
);

function createRoute([path, CustomComponent]) {
  return <Route key={path} path={path} component={CustomComponent} />
}
