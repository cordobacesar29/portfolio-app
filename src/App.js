import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { Home } from './pages/home';
import { Proyects } from './pages/proyects';
import { RoadMap } from './pages/roadMap';
import { SignUp } from './pages/signUp';
import { Layout } from './components/layout';

import firebaseApp from './firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  const [globalUser, setGlobalUser] = React.useState(null);

  onAuthStateChanged(auth, (userFirebase) =>{
    if(userFirebase) {
      setGlobalUser(userFirebase);
    } else {
      setGlobalUser(null);
    }
  });

  return (
    <Layout>
      <Switch>
        <Route exact path='/'> 
          { globalUser ? <Home/> : <SignUp/> }
        </Route>  
        <Route path='/proyects'>
          <Proyects email={globalUser ? globalUser.email : null}/>
        </Route> 
        <Route path='/roadMap'>
          <RoadMap/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;