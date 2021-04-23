import React, {useState, useEffect, ReactNode} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './MainLayout.sass';

const MainLayout = ({children}: {children:ReactNode}) => {
  
  return (
    <div className="App stars-container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      {children}
    </div>
  );
};

export default MainLayout;
