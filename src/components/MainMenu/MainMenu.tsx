import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StylesProvider } from "@material-ui/core/styles";
import {Button} from '@material-ui/core'
import './MainMenu.css';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../core/routes';
const Menu = () => {
  const history = useHistory();
  return (
    <div className='menu-container-base container-inside'>
      <StylesProvider injectFirst>
        <Button variant="contained" color="primary" onClick={() => {history.push(ROUTES.GAME)}}>Play</Button>
        <Button variant="contained" color="primary">Game History</Button>
        <Button variant="contained" color="primary">Ratings</Button>
        <Button variant="contained" color="primary">Profile</Button>
        <Button variant="contained" color="primary">Settings</Button>
      </StylesProvider>
    </div>
  );
}

export default Menu;
