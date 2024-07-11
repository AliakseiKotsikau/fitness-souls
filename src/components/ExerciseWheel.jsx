import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import arrayShuffle from 'array-shuffle';
import ExerciseStack from './ExercisesStack';

const data = [
  { option: '10 push-ups', optionSize: 3 },
  { option: '10 squats', optionSize: 3 },
  { option: '10 crunches', optionSize: 3 },
  { option: '20 push-ups', optionSize: 2 },
  { option: '20 squats', optionSize: 2 },
  { option: '20 crunches', optionSize: 2 },
  { option: '30 sec. plank', optionSize: 2 },
  { option: '30 climbers', optionSize: 2 },
  { option: '1 min plank', optionSize: 1 },
  { option: '25 pushups', optionSize: 1 },
]

const shuffledData = arrayShuffle(data);

export default function ExerciseWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [exercises, setExercises] = useState([]);


  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
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
    exercises.pop();
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
            backgroundColors={["#000"]}
            textColors={["#ffffff"]}
            outerBorderWidth={3}
            outerBorderColor={"#A28354"}
            innerRadius={22}
            radiusLineWidth={2}
            radiusLineColor={"#A28354"}
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