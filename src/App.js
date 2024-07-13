import Chart from "./components/chart/Chart";
import ExerciseWheel from './components/exerciseWheel/ExerciseWheel';
import StatsTabs from './components/statsTabs/StatsTabs';
import "./styles.css";

function App() {
  return (
    <div className="App">
        <ExerciseWheel/>
        {/* <Chart/> */}
        <StatsTabs/>
    </div>
  );
}

export default App;
