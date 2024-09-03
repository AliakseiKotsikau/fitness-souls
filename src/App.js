import Chart from "./components/chart/Chart";
import ExerciseWheel from './components/exerciseWheel/ExerciseWheel';
import StatsTabs from './components/statsTabs/StatsTabs';
import "./styles.css";
import DEFAULT_THEME from './Theme';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { fetchUserStatisticsForGame, updateWorldDeathCount, updateBossDeathCount, updateExerciseStatistics } from "./FetchUtils";
import { useSelector, useDispatch } from 'react-redux'
import { worldDeathButtonClick, bossDeathButtonClick,addRepsToExercise, setInitialData } from './slices/fitnessSoulsSlice';

// TODO remove double call of service, it seems that APP is rendered twice
function App() {
  const isFirstRender = useRef(true);

  const user = useSelector((state) => state.fitnessSouls.user);
  const game = useSelector((state) => state.fitnessSouls.game);
  const currentBoss = useSelector((state) => state.fitnessSouls.currentBoss);

  const [userData, setUserData] = useState(null);
  const [worldDeathCount, setWorldDeathCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const getUserStatistics = async () => {
    let response = await fetchUserStatisticsForGame(user, game);
    let jsonData = JSON.parse(response);
    setUserData(jsonData);
    setWorldDeathCount(+jsonData.worldDeathCount);

    dispatch(setInitialData(jsonData));
    setLoaded(true);
  }

  function onHandleWorldDeath() {
    updateWorldDeathCount(user, game).then(response => {
      let jsonData = JSON.parse(response.body);
      setWorldDeathCount(jsonData.worldDeathCount);
    });
    dispatch(worldDeathButtonClick());
  }

  function onHandleBossDeath() {
    updateBossDeathCount(user, game, currentBoss)
    dispatch(bossDeathButtonClick(currentBoss));
  }

  function handleExerciseStatisticsUpdate(exercise, quantity) {
    updateExerciseStatistics(user, game, exercise, quantity);
    dispatch(addRepsToExercise({ "exercise": exercise, "quantity": quantity }));
  }

  useEffect(() => {
    // is used to load entire statistics only on first app render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      getUserStatistics();
    }
  }, []);

  return (

    <div className="App">
      <ThemeProvider theme={DEFAULT_THEME}>
        {loaded && <ExerciseWheel exercises={userData.exercises} handleExerciseStatisticsUpdate={handleExerciseStatisticsUpdate} />}
        {loaded && <StatsTabs exercisesStatistics={userData.exerciseStats} worldDeathCount={+worldDeathCount}
          onHandleWorldDeath={onHandleWorldDeath} onHandleBossDeath={onHandleBossDeath} />}
      </ThemeProvider>
    </div>
  );
}

export default App;
