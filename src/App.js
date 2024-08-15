import Chart from "./components/chart/Chart";
import ExerciseWheel from './components/exerciseWheel/ExerciseWheel';
import StatsTabs from './components/statsTabs/StatsTabs';
import "./styles.css";
import DEFAULT_THEME from './Theme';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getRequestWithNativeFetch, postRequest } from "./FetchUtils";

// TODO remove double call of service, it seems that APP is rendered twice
function App() {
  const [userData, setUserData] = useState(null);
  const [worldDeathCount, setWorldDeathCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const getUserStatistics = async () => {

    const response = await getRequestWithNativeFetch("https://0gerl9oj49.execute-api.eu-central-1.amazonaws.com/DEV/statistics?user=kotsial&game=DarkSouls1");
    const jsonData = JSON.parse(response);

    setUserData(jsonData);
    setWorldDeathCount(+jsonData.worldDeathCount);
    setLoaded(true);
  }

  function onHandleWorldDeath() {
    let body = {"user": "kotsial", "game": "DarkSouls1"};
    postRequest("https://0gerl9oj49.execute-api.eu-central-1.amazonaws.com/DEV/deaths/world", body).then(response => {
      console.log(response);
      let jsonData = JSON.parse(response.body);
      setWorldDeathCount(jsonData.worldDeathCount);
    });
  }

  useEffect(() => {
    getUserStatistics();
  }, []);

  return (

    <div className="App">
      <ThemeProvider theme={DEFAULT_THEME}>
        {loaded && <ExerciseWheel exercises={userData.exercises}/> }
        {loaded && <StatsTabs bosses={userData.bosses} exercisesStatistics={userData.exerciseStats} worldDeathCount={+worldDeathCount} onHandleWorldDeath={onHandleWorldDeath}/>}
      </ThemeProvider>
    </div>
  );
}

export default App;
