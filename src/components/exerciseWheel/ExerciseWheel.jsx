import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import arrayShuffle from 'array-shuffle'
import ExerciseStack from './../exerciseStack/ExercisesStack'
import { useTheme } from '@mui/material/styles';
import ExerciseLimitAlert from '../exerciseLimitAlert/ExerciseLimitAlert';

const LIMIT_OF_EXERCISES = 5;

const ExerciseWheel = props => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [exercisesToDo, setExercisesToDo] = useState([]);
  const [showMaxExercisesAlert, setShowMaxExercisesAlert] = useState(false);
  const [limitOfExercisesReached, setLimitOfExercisesReached] = useState(false);
  const [exercises, setExercises] = useState(mapExercisesToArray);
  const theme = useTheme();

  function mapExercisesToArray() {
    let userExercises = props.exercises;
    let exercisesArray = Object.keys(userExercises).map(key => ({ 'option': key, 'optionSize': +userExercises[key].weight }));
    return arrayShuffle(exercisesArray);
  }

  function handleSpinClick() {
    if (exercisesToDo.length == LIMIT_OF_EXERCISES) {
      setShowMaxExercisesAlert(true);
      setLimitOfExercisesReached(true);
      return;
    }

    if (!mustSpin) {
      const newPrizeNumber = weightedRandom();
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  function weightedRandom() {
    var i;

    var weights = [exercises[0].optionSize];

    for (i = 1; i < exercises.length; i++)
      weights[i] = exercises[i].optionSize + weights[i - 1];

    var random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++)
      if (weights[i] > random)
        break;

    return i;
  }

  function onStopSpin() {
    setMustSpin(false);

    if (limitOfExercisesReached) {
      return;
    }

    exercisesToDo.push(exercises[prizeNumber].option);
    setExercisesToDo(exercisesToDo);
  }

  function onExistingExerciseClick(exerciseName) {
    exercisesToDo.shift();
    setExercisesToDo([...exercisesToDo]);

    if (exercisesToDo.length == 0) {
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
            data={exercises}
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
          <ExerciseStack exercises={[...exercisesToDo].reverse()} onExerciseItemClick={onExistingExerciseClick} />
        </div>
      </div>
    </>
  )
}

export default ExerciseWheel