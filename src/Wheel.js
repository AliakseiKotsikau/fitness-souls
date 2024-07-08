import React, { useState } from 'react'
import {Wheel} from 'react-custom-roulette'
import arrayShuffle from 'array-shuffle';
import Button from '@mui/material/Button';

const data = [
  { option: '10 push-ups' ,  optionSize: 3 },
  { option: '10 squats' ,  optionSize: 3 },
  { option: '10 crunches' ,  optionSize: 3 },
  { option: '20 crunches' , },
  { option: '20 crunches' ,  },
  { option: '20 crunches' ,  },
  { option: '30 sec. plank' ,  },
  { option: '30 climbers' ,},
  { option: '1 min plank' ,  },
  { option: '25 pushups' , },
]

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [startingOption, setStartingOption] = useState(0);
  const [wheelOptions, setWheelOptions] = useState(data);
  

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      const newStartingOption = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setStartingOption(newStartingOption);
      setMustSpin(true);
    }
  }

  const onStopSpin = () => {
    setMustSpin(false);
    const newWheelOptions = arrayShuffle(data);
    setWheelOptions(newWheelOptions);
  }

  return (
    <>
    <div className="wheelContainer">
    <div align="center" className="roulette-container">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={wheelOptions}
        disableInitialAnimation={true}
        startingOptionIndex={startingOption}
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
      <Button variant="contained" onClick={handleSpinClick}>Contained</Button>
      </div>
      </div>
    </>
  )
}