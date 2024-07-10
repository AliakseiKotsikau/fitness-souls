import React, { useState } from 'react'
import {Wheel} from 'react-custom-roulette'
import arrayShuffle from 'array-shuffle';
import Button from '@mui/material/Button';

const data = [
  { option: '10 push-ups' ,  optionSize: 3 },
  { option: '10 squats' ,  optionSize: 3 },
  { option: '10 crunches' ,  optionSize: 3 },
  { option: '20 push-ups' ,  optionSize: 2 },
  { option: '20 squats' ,  optionSize: 2  },
  { option: '20 crunches' ,  optionSize: 2  },
  { option: '30 sec. plank' ,  optionSize: 2 },
  { option: '30 climbers' ,  optionSize: 2 },
  { option: '1 min plank' , optionSize: 1 },
  { option: '25 pushups' , optionSize: 1 },
]

const shuffledData = arrayShuffle(data);

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [startingOption, setStartingOption] = useState(0);
  //const [wheelOptions, setWheelOptions] = useState(data);
  

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      const newStartingOption = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      //setStartingOption(newStartingOption);
      setMustSpin(true);
    }
  }

  const onStopSpin = () => {
    setMustSpin(false);
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
            spinDuration={0.5}
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
        <div className="congratsText">
            <>Congrats, you have won a {shuffledData[prizeNumber].option}!</>
          </div>
      </div>
    </>
  )
}