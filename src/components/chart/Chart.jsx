import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts/ChartsAxis'

const Chart = props => {

  function mapBossesDeathsToArray(bossesMap) {
    return Object.keys(bossesMap)
        .map(key => ({ 'enemy': key, 'deathCount': +bossesMap[key].deathCount, 'orderNumber': +bossesMap[key].orderNumber }))
        .sort((a, b) => a.orderNumber - b.orderNumber);
  }

  return (
    <div className='bossChart'>
      <BarChart
        sx={(theme) => ({
          [`.MuiBarLabel-root`]: {
            stroke: theme.palette.primary.main,
            fontWeight: 1
          },
          [`.MuiBarLabel-root`]: {
            fill: theme.palette.common.black
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
            type: 'piecewise',
            thresholds: [4, 7, 10],
            colors: ['green', 'yellow', 'orange', 'red'],
          }
        }]}
        series={[{ dataKey: 'deathCount' }]}
        width={1100}
        height={800}
        layout='horizontal'
        dataset={mapBossesDeathsToArray(props.bossesArray)}
        barLabel='value'
        margin={{ left: 150 }}
      />
    </div>
  )
}

export default Chart
