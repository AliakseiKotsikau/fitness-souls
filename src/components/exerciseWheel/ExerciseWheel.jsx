import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import arrayShuffle from 'array-shuffle'
import ExerciseStack from './../exerciseStack/ExercisesStack'
import exercisesArray from '../../data/exercises'
import { useTheme } from '@mui/material/styles';
import ExerciseLimitAlert from '../exerciseLimitAlert/ExerciseLimitAlert';

const LIMIT_OF_EXERCISES = 5;

const shuffledData = arrayShuffle(exercisesArray);

const ExerciseWheel = props => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [exercises, setExercises] = useState([]);
  const [showMaxExercisesAlert, setShowMaxExercisesAlert] = useState(false);
  const [limitOfExercisesReached, setLimitOfExercisesReached] = useState(false);
  const theme = useTheme();

  function handleSpinClick() {
    if (exercises.length == LIMIT_OF_EXERCISES) {
      setShowMaxExercisesAlert(true);
      setLimitOfExercisesReached(true);
      return;
    }

    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * exercisesArray.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  function onStopSpin() {
    setMustSpin(false);

    if (limitOfExercisesReached) {
      return;
    }

    exercises.push(shuffledData[prizeNumber].option);
    setExercises(exercises);
  }

  function onExistingExerciseClick() {
    exercises.shift();
    setExercises([...exercises]);

    if (exercises.length == 0) {
      setLimitOfExercisesReached(false);
    }
  }

  useEffect(() => {
    if (showMaxExercisesAlert) {
      setTimeout(() => {
        setShowMaxExercisesAlert(false);
      }, 10000);
    }
  }, [showMaxExercisesAlert]);

  return (
    <>
      {showMaxExercisesAlert ? <ExerciseLimitAlert onCloseAlert={() => { setShowMaxExercisesAlert(false) }} /> : <></>}
      <div className="wheelContainer">
        <div align="center" className="rouletteContainer">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={shuffledData}
            disableInitialAnimation={true}
            spinDuration={0.1}
            backgroundColors={[theme.palette.common.black]}
            textColors={[theme.palette.primary.main]}
            outerBorderWidth={3}
            outerBorderColor={theme.palette.secondary.main}
            innerRadius={22}
            radiusLineWidth={2}
            radiusLineColor={theme.palette.secondary.main}
            onStopSpinning={onStopSpin}
          />
          <button className="spinButton" disabled={limitOfExercisesReached} onClick={handleSpinClick}>
            SPIN
          </button>
          <div className="marker" />
        </div>
        <div className='exerciesStackContainer'>
          <ExerciseStack exercises={[...exercises].reverse()} onExerciseItemClick={onExistingExerciseClick} />
        </div>
      </div>
    </>
  )
}

export default ExerciseWheel