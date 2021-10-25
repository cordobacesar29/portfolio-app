import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/home';
import { Proyects } from './pages/proyects';
import { RoadMap } from './pages/roadMap';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import { Layout } from './components/layout';

import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'> 
          <Home/>
        </Route>  
        <Route path='/proyects'>
          <Proyects/>
        </Route> 
        <Route path='/roadMap'>
          <RoadMap/>
        </Route>
        <Route path='/signIn'>
          <SignIn/>
        </Route>
        <Route path='/signUp'>
          <SignUp/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;