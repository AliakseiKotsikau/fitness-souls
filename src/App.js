import Chart from "./components/chart/Chart";
import ExerciseWheel from './components/exerciseWheel/ExerciseWheel';
import StatsTabs from './components/statsTabs/StatsTabs';
import "./styles.css";
import DEFAULT_THEME from './Theme';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { fetchUserStatisticsForGame, updateWorldDeathCount } from "./FetchUtils";
import { useSelector, useDispatch } from 'react-redux'
import { deathButtonClick, changeCurrentBoss } from './slices/fitnessSoulsSlice';

// TODO remove double call of service, it seems that APP is rendered twice
function App() {
  const isFirstRender = useRef(true);

  const user = useSelector((state) => state.fitnessSouls.user);
  const game = useSelector((state) => state.fitnessSouls.game);

  const [userData, setUserData] = useState(null);
  const [worldDeathCount, setWorldDeathCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  
  const getUserStatistics = async () => {
    const response = await fetchUserStatisticsForGame(user, game);
    const jsonData = JSON.parse(response);
    console.log(jsonData);
    setUserData(jsonData);
    setWorldDeathCount(+jsonData.worldDeathCount);
    dispatch(changeCurrentBoss(jsonData.currentBoss));
    setLoaded(true);
  }

  function onHandleWorldDeath() {
    updateWorldDeathCount(user, game).then(response => {
      let jsonData = JSON.parse(response.body);
      setWorldDeathCount(jsonData.worldDeathCount);
    });
    dispatch(deathButtonClick());
  }

  useEffect(() => {
    // is used to load entire statistics only on first app render
    if(isFirstRender.current) {
      isFirstRender.current = false;
      getUserStatistics();
    }
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
