import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Home from '../pages/Home';
import Signin from '../pages/SignIn';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/Home" exact component={Home} isPrivate/>
    </Switch>
  );
};

export default Routes;
