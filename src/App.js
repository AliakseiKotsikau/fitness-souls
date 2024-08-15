import Chart from "./components/chart/Chart";
import ExerciseWheel from './components/exerciseWheel/ExerciseWheel';
import StatsTabs from './components/statsTabs/StatsTabs';
import "./styles.css";
import DEFAULT_THEME from './Theme';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getRequestWithNativeFetch } from "./FetchUtils";

// TODO remove double call of service, it seems that APP is rendered twice
function App() {
  const [userData, setUserData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  
  const  getUserStatistics = async () => {

    const response = await getRequestWithNativeFetch("https://0gerl9oj49.execute-api.eu-central-1.amazonaws.com/DEV/statistics?user=kotsial&game=DarkSouls1");
    const jsonData = JSON.parse(response);

    setUserData(jsonData);
    setLoaded(true);
  }

  useEffect(() => {
    getUserStatistics();
  }, []);

  return (

    <div className="App">
      <ThemeProvider theme={DEFAULT_THEME}>
        {loaded && <ExerciseWheel exercises={userData.exercises}/> }
        {loaded && <StatsTabs bosses={userData.bosses} exercisesStatistics={userData.exerciseStats}/>}
      </ThemeProvider>
    </div>
  );
}

export default App;
