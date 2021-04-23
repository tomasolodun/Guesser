import {Button, TextField} from '@material-ui/core';
import React, {Fragment, SyntheticEvent, useEffect, useState} from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import './GamePage.scss';
import GameLocalHistory from '../GameLocalHistory/GameLocalHistory';
import {TimelineMax} from 'gsap';
import HeaderComponent from '../HeaderComponent/Header';

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
const GuessResultType = Object.freeze({lower: 1, bigger: 2});
export interface IGuess {
  guessNumber: number;
  guessResultType: number;
  isWin: boolean;
}
export interface IDifficult {
  retriesCount: number;
  numberFrom: number;
  numberTo: number;
}

const difficulties: Array<IDifficult> = [{retriesCount: 12, numberFrom: -10000, numberTo: 10000}];

const getNumberToGuess = (numberFrom: number, numberTo: number) => {
  return getRandomArbitrary(getRandomArbitrary(numberFrom, numberTo / 10), getRandomArbitrary(numberTo / 10, numberTo));
};

const retriesCount = 12;
const GamePage: React.FC = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const [guessingHistory, setGuessHistory] = useState<Array<IGuess>>([]);
  const [currentGameRetriesRemained, setCurrentGameRetriesRemained] = useState(retriesCount);
  const [showResultComponent, setShowResultComponent] = useState({display: false, type: 'Lose'});
  const [isTryButtonDisabled, setIsTryButtonDisabled] = useState(false);
  const [randomNumber, setRandomNumber] = useState(getNumberToGuess(-10000, 10000));
  const pewOnClick = (isLeft: boolean) => {
    let timeLine = new TimelineMax({
      paused: false,
    });
    let button = document.querySelector('.pew');

    timeLine
      .to(button, 0.4, {
        display: 'block',
        width: 0.2,
        opacity: 0.5,
        boxShadow: '0px 0px 35px 7px #cd28fa',
        delay: 0.25,
      })
      .to(button, 0.1, {
        opacity: 0.5,
        background: '#26ff92',
      })
      .to(button, 0, {
        height: 1,
        delay: 0.2,
      })
      .to(button, 0.1, {
        boxShadow: '0px 0px 100px 55px #fa2856',
        x: !isLeft ? 90 : -90,
        width: 100,
        delay: 0.23,
      })
      .to(button, 0.3, {
        width: 800,
        x: !isLeft ? -2000 : 2000,
        boxShadow: '0px 0px 85px 17px #fa2856',
        opacity: 0,
        delay: 0.1,
      })
      .to(button, 0, {
        opacity: 0,
        display: 'none',
        x: 0,
        boxShadow: 0,
        width: '100%',
        height: '100%',
      });
  };
  const tryButtonOnClick = (event: any) => {
    console.log(randomNumber);
    let historyElement = {
      guessNumber: inputNumber,
      guessResultType: inputNumber < randomNumber ? GuessResultType.bigger : GuessResultType.lower,
      isWin: inputNumber == randomNumber,
    };
    setIsTryButtonDisabled(true);
    pewOnClick(historyElement.guessResultType === 1 ? true : false);
    setGuessHistory((prevState) => {
      return [...prevState, historyElement];
    });
    setCurrentGameRetriesRemained(currentGameRetriesRemained - 1);
  };
  useEffect(() => {
    if (!!guessingHistory.length && guessingHistory[guessingHistory.length - 1].guessNumber == randomNumber) {
      setShowResultComponent((prevState) => {
        return {...prevState, display: true, type: 'Victory'};
      });
    }
    if (currentGameRetriesRemained === 0) {
      setShowResultComponent((prevState) => {
        return {...prevState, display: true, type: 'Defeat'};
      });
    }
  }, [currentGameRetriesRemained]);
  const guessInputOnChange = (event: any) => {
    setInputNumber(event.target.value);
    setIsTryButtonDisabled(false);
  };
  const startNewGame = (difficult: IDifficult) => {
    setInputNumber(0);
    setGuessHistory([]);
    setCurrentGameRetriesRemained(difficult.retriesCount);
    setRandomNumber(getNumberToGuess(-10000, 10000));
    setShowResultComponent({display: false, type: 'Lose'});
  };
  return (
    <StylesProvider injectFirst>
      <Fragment>
        <HeaderComponent></HeaderComponent>
        <div className="game-page-root">
          {!!guessingHistory.length && <GameLocalHistory guessingHistory={guessingHistory} />}
          {showResultComponent.display ? (
            <div className="gameResultContainer">
              <div className="gameResult">{showResultComponent.type}</div>
              <Button
                className="guess-button"
                variant="contained"
                color="primary"
                onClick={() => {
                  startNewGame(difficulties[0]);
                }}
              >
                New game
              </Button>
            </div>
          ) : (
            <>
              <div style={{color: 'white', fontSize: '25px', margin: '20px'}}>
                Retries remained = {currentGameRetriesRemained}
              </div>
              <TextField
                className="guess-input"
                id="outlined-basic"
                label="GUESS"
                variant="outlined"
                type="number"
                onChange={guessInputOnChange}
              />
              <Button className="guess-button" variant="contained" color="primary" onClick={tryButtonOnClick} disabled={isTryButtonDisabled}>
                Try
                <div className="pew"></div>
              </Button>
            </>
          )}
        </div>
      </Fragment>
    </StylesProvider>
  );
};

export default GamePage;
