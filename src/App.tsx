import React from 'react';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import MainLayout from './components/MainLayout/MainLayout';
import GamePage from './components/GamePage/GamePage';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './core/routes';
import WelcomePage from './components/WelcomePage/WelcomePage';
import HeaderComponent from './components/HeaderComponent/Header';

const App = () => {
  return (
    <div id="app-root">
      <Switch>
        <MainLayout>
            <Route exact path={ROUTES.WELCOME} component={WelcomePage}/>
            <Route exact path={ROUTES.HOME} component={HomePage}/>
            <Route exact path={ROUTES.GAME} component={GamePage}/>
        </MainLayout>
      </Switch>
    </div>
  );
};

export default App;
