import {Avatar, Button, List, ListItem, ListItemText, ListSubheader, TextField} from '@material-ui/core';
import React, {SyntheticEvent, useState} from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import s from './Header.module.scss';
import {ROUTES} from '../../core/routes';
import {useHistory} from 'react-router-dom';

const HeaderComponent = (props: any) => {
  const history = useHistory();
  console.log(history);
  return (
    <div className={s.headerContainer}>
      <div className={s.headerLeftSide}>
        <Button
          className={s.headerButton}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push(ROUTES.HOME);
          }}
        >
          Menu
        </Button>
        {/* <Button></Button> */}
      </div>
      <div className={s.headerRightSide}>
        <Button className={s.avatarButton}>
          <Avatar
            alt="Remy Sharp"
            className={s.avatar}
            src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
          />
        </Button>

        <Button className={s.headerButton} variant="contained" color="primary">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default HeaderComponent;
