import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import file from '../data/dark-souls.json'

export default function Chart() {
  return (
    <BarChart
      sx={(theme) => ({
        [`.MuiBarLabel-root`]: {
          stroke: '#FFFFFF',
          fontWeight: 1
        },
        [`.${axisClasses.root}`]: {
          [`.${axisClasses.tick}, .${axisClasses.line}`]: {
            stroke: '#FFFFFF',
            strokeWidth: 3,
          },
          [`.${axisClasses.tickLabel}`]: {
            fill: '#FFFFFF',
          },
        },
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
      width={600}
      height={600}
      layout='horizontal'
      dataset={file.bosses}
      barLabel="value"
    />
  );
}