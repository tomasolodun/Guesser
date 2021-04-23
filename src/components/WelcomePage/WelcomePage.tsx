import React from 'react';
import { useHistory } from 'react-router';
import { ROUTES } from '../../core/routes';
import SignIn from '../SignInComponent/SignIn';
import s from './WelcomePage.module.scss';

function WelcomePage() {
  const history = useHistory();
  return (
      <div className={s.welcomePageRoot}>
        <div className={s.welcomePageText} onClick={()=>{history.push(ROUTES.HOME);}}>GUESSER</div>
        {/* <SignIn></SignIn> */}
      </div>
  );
}

export default WelcomePage;
