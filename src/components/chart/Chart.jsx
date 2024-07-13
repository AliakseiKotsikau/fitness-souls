import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts/ChartsAxis'
import file from '../../data/dark-souls.json'
import DeathButton from '../deathButton/DeathButton'

const Chart = props => {

  return (
    <div className='bossChart'>
      <BarChart
        sx={(theme) => ({
          [`.MuiBarLabel-root`]: {
            stroke: theme.palette.primary.main,
            fontWeight: 1
          },
          [`.${axisClasses.root}`]: {
            [`.${axisClasses.tick}, .${axisClasses.line}`]: {
              stroke: theme.palette.primary.main,
              strokeWidth: 3,
            },
            [`.${axisClasses.tickLabel}`]: {
              fill: theme.palette.primary.main,
            },
          }
        })}
        yAxis={[{ scaleType: 'band', dataKey: 'enemy' }]}
        xAxis={[{
          colorMap: {
            type: 'continuous',
            min: 3,
            max: 10,
            color: ['green', 'red'],
          }
        }]}
        series={[{ dataKey: 'deathNumber' }]}
        width={900}
        height={700}
        layout='horizontal'
        dataset={file}
        barLabel="value"
        margin={{ left: 150 }}
      />
    </div>
  )
}

export default Chart
