import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Flex } from '@chakra-ui/layout';

import { Home } from './pages/home';
import { Proyects } from './pages/proyects';
import { RoadMap } from './pages/roadMap';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';

import { Header } from './components/header';
import { Footer } from './components/footer';

import './App.css';

const routes = [
  { path: '/', Component: Home },
  { path: '/proyects', Component: Proyects },
  { path: '/roadMap', Component: RoadMap },
  { path: '/signIn', Component: SignIn },
  { path: '/signUp', Component: SignUp }
];

function App() {
  return (
    <>
      <Header />
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              classNames='page'
              in={match != null}
              timeout={500}
              unmountOnExit
            >
              <Flex className='page' m='1rem' justify='center' align='center'>
                <Component />
              </Flex>
            </CSSTransition>
          )}
        </Route>
      ))}
      <Footer />
    </>
  );
}

export default App;