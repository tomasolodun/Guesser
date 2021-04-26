import {Avatar, Button} from '@material-ui/core';
import React, {SyntheticEvent, useState} from 'react';
import s from './Header.module.scss';
import {ROUTES} from '../../core/routes';
import {useHistory} from 'react-router-dom';
import CheckBox from '../CheckBox/CheckBox';
import {connect} from 'react-redux';
import {selectorGetSettings} from '../../redux/settings/selector';
import {Store} from '../../redux/root';
import {updateSettings} from '../../redux/settings/actions';

const HeaderComponent = ({updateSettings}: any) => {
  const history = useHistory();
  const [isHintModeEnabled, setIsHintModeEnabled] = useState(false);
  const handleHintModeChange = (event: any) => {
    setIsHintModeEnabled(event.target.checked);
    updateSettings({isHintModeEnabled:event.target.checked})
  };
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
        {history.location.pathname === '/game' ? (
          <CheckBox value={isHintModeEnabled} handler={handleHintModeChange} type={'primary'}></CheckBox>
        ) : null}
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

const mapStateToProps = (state: Store) => ({
  settings: selectorGetSettings(state),
});

const mapDispatchToProps = {
  updateSettings
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
