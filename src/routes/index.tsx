import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import Home from '../pages/Home';
/* import Welcome from '../pages/Welcome'; */
import Historic from '../pages/Historic';
import Signin from '../pages/SignIn';
import Forgot from '../pages/Forgoted';
import ProfileUser from '../pages/ProfileUser';
import SignUp from '../pages/SignUp';
import Update from '../pages/Update';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/historic" exact component={Historic} isPrivate/>
      <Route path="/profile" exact component={ProfileUser} isPrivate/>
      <Route path="/update" exact component={Update} isPrivate/>
      <Route path="/forgot" exact component={Forgot} />
     {/*  <Route path="/Home" exact component={Home} isPrivate/> */}
      <Route path="/Home" exact component={Home} isPrivate/>
    </Switch>
  );
};

export default Routes;
