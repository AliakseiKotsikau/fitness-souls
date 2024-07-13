import Chart from "./components/chart/Chart";
import ExerciseWheel from './components/exerciseWheel/ExerciseWheel';
import StatsTabs from './components/statsTabs/StatsTabs';
import "./styles.css";
import DEFAULT_THEME from './Theme';
import { ThemeProvider } from '@emotion/react';

function App() {
  return (

    <div className="App">
      <ThemeProvider theme={DEFAULT_THEME}>
        <ExerciseWheel/>
        <Chart/> 
        <StatsTabs/>
      </ThemeProvider>
    </div>
  );
}

export default App;
