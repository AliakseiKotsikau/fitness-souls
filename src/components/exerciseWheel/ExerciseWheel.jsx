import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import arrayShuffle from 'array-shuffle'
import ExerciseStack from './../exerciseStack/ExercisesStack'
import { useTheme } from '@mui/material/styles';
import ExerciseLimitAlert from '../exerciseLimitAlert/ExerciseLimitAlert';
import { useSelector, useDispatch } from 'react-redux'
import { wheelSpinned } from '../../slices/fitnessSoulsSlice';

const LIMIT_OF_EXERCISES = 5;

const ExerciseWheel = props => {

  const deathButtonClicked = useSelector(state => state.fitnessSouls.deathButtonClicked);
  const theme = useTheme();
  const dispatch = useDispatch()

  const [prizeNumber, setPrizeNumber] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);
  const [exercisesToDo, setExercisesToDo] = useState([]);
  const [showMaxExercisesAlert, setShowMaxExercisesAlert] = useState(false);
  const [limitOfExercisesReached, setLimitOfExercisesReached] = useState(false);
  const [exercises, setExercises] = useState(mapExercisesToArray);


  function mapExercisesToArray() {
    let userExercises = props.exercises;
    let exercisesArray = Object.keys(userExercises).map(key => ({ 'option': key, 'optionSize': +userExercises[key].weight }));
    return arrayShuffle(exercisesArray);
  }

  function handleSpinClick() {
    if (limitOfExercisesReached) {
      setShowMaxExercisesAlert(true);
      dispatch(wheelSpinned());
      return;
    }

    if (!mustSpin) {
      const newPrizeNumber = weightedRandom(exercises);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  function weightedRandom(exercises) {
    // Calculate the total sum of optionSizes
    const totalWeight = exercises.reduce((sum, exercise) => sum + exercise.optionSize, 0);

    // Generate a random number between 0 and totalWeight
    const randomNum = Math.random() * totalWeight;

    // Iterate through exercises and find the selected exercise index
    let cumulativeWeight = 0;
    for (let i = 0; i < exercises.length; i++) {
      const exercise = exercises[i];
      cumulativeWeight += exercise.optionSize;
      if (randomNum < cumulativeWeight) {
        return i; // Return the index of the selected exercise
      }
    }

    // This should never happen, but just in case
    throw new Error('Failed to select an exercise');
  }

  function onStopSpin() {
    setMustSpin(false);
    dispatch(wheelSpinned());

    if (limitOfExercisesReached) {
      return;
    }

    exercisesToDo.push(exercises[prizeNumber].option);
    setExercisesToDo(exercisesToDo);

    if (exercisesToDo.length === LIMIT_OF_EXERCISES) {
      setLimitOfExercisesReached(true);
    }
  }

  function onExerciseItemClick(exerciseName) {
    const exerciseItemIndex = exercisesToDo.indexOf(exerciseName);
    exercisesToDo.splice(exerciseItemIndex, 1);
    setExercisesToDo([...exercisesToDo]);

    if (exercisesToDo.length < LIMIT_OF_EXERCISES) {
      setLimitOfExercisesReached(false);
    }

    let exercise = props.exercises[exerciseName].type;
    let quantity = props.exercises[exerciseName].quantity;

    props.handleExerciseStatisticsUpdate(exercise, quantity);
  }

  useEffect(() => {
    if (showMaxExercisesAlert) {
      setTimeout(() => {
        setShowMaxExercisesAlert(false);
      }, 5000);
    }
  }, [showMaxExercisesAlert]);

  useEffect(() => {
    if (deathButtonClicked) {
      handleSpinClick();
    }
  }, [deathButtonClicked]);

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
            spinDuration={0.05}
            backgroundColors={[theme.palette.common.black]}
            textColors={[theme.palette.primary.main]}
            outerBorderWidth={3}
            outerBorderColor={theme.palette.secondary.main}
            innerRadius={22}
            radiusLineWidth={2}
            radiusLineColor={theme.palette.secondary.main}
            onStopSpinning={onStopSpin}
          />
          <button className="spinButton" disabled>
            TRY
          </button>
          <div className="marker" />
        </div>
        <div className='exerciesStackContainer'>
          <ExerciseStack exercises={[...exercisesToDo].reverse()} onExerciseItemClick={onExerciseItemClick} />
        </div>
      </div>
    </>
  )
}

export default ExerciseWheel