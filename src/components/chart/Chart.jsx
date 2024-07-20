import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts/ChartsAxis'

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
          tickMinStep: 1,
          colorMap: {
            type: 'continuous',
            min: 3,
            max: 10,
            color: ['green', 'red'],
          }
        }]}
        series={[{ dataKey: 'deathCount' }]}
        width={1100}
        height={800}
        layout='horizontal'
        dataset={props.bossesArray}
        barLabel="value"
        margin={{ left: 150 }}
      />
    </div>
  )
}

export default Chart
