import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { RouteWithSubRoutes } from 'shared/components';
import { routeConstants } from 'shared/constants';

const { PROFILE } = routeConstants;
const { SETTINGS } = PROFILE.subroutes;

function Profile({ routes }) {
  return <>
    <h2>Profile</h2>
    <ul className="App-nav-list">
      <li className="App-nav-item">
        <Link to={PROFILE.route}>Details</Link>
      </li>
      <li className="App-nav-item">
        <Link to={SETTINGS.route}>{SETTINGS.name}</Link>
      </li>
    </ul>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </>;
}

export default Profile;
