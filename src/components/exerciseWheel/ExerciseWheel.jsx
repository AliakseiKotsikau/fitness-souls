import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import arrayShuffle from 'array-shuffle'
import ExerciseStack from './../exerciseStack/ExercisesStack'
import exercisesArray from '../../data/exercises'
import { useTheme } from '@mui/material/styles';


const shuffledData = arrayShuffle(exercisesArray);

const ExerciseWheel = props => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [exercises, setExercises] = useState([]);
  const theme = useTheme();
  
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * exercisesArray.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  const onStopSpin = () => {
    setMustSpin(false);
    exercises.push(shuffledData[prizeNumber].option);
    setExercises(exercises);
  }

  function onExistingExerciseClick() {
    exercises.shift();
    setExercises([...exercises]);
  }

  return (
    <>
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
          <button className="spinButton" onClick={handleSpinClick}>
            SPIN
          </button>
          <div className="marker" />
        </div>
        <div className='exerciesStackContainer'>
          <ExerciseStack exercises={[...exercises].reverse()} onExerciseItemClick={onExistingExerciseClick}/>
        </div>
      </div>
    </>
  )
}

export default ExerciseWheel