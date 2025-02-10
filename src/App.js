import ExerciseWheel from './components/exerciseWheel/ExerciseWheel';
import StatsTabs from './components/statsTabs/StatsTabs';
import "./styles.css";
import DEFAULT_THEME from './Theme';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { fetchUserStatisticsForGame, updateWorldDeathCount, updateBossDeathCount, updateExerciseStatistics, killBoss } from "./FetchUtils";
import { useSelector, useDispatch } from 'react-redux'
import { worldDeathButtonClick, bossDeathButtonClick, addRepsToExercise, setInitialData, bossBeaten, gameChanged } from './slices/fitnessSoulsSlice';
import DefaultAppBar from "./components/appBar/DefaultAppBar";
import ExerciseTableAndCards from './components/exerciseTableAndCards/ExerciseTableAndCards';


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

  var loading = false;

  const getUserStatistics = async () => {
    if (game) {
      loading = true;
      let response = await fetchUserStatisticsForGame(user, game);
      let jsonData = JSON.parse(response);
      setUserData(jsonData);
      setWorldDeathCount(+jsonData.worldDeathCount);

      dispatch(setInitialData(jsonData));
      setLoaded(true);
      loading = false;
    }
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

  function onHandleBossKill() {
    if (currentBoss === null || currentBoss === undefined) {
      return;
    }

    killBoss(user, game, currentBoss);
    dispatch(bossBeaten(currentBoss));
  }

  function onGameChange(newGame) {
    if (newGame !== game) {
      dispatch(gameChanged(newGame));
      setLoaded(false);
    }
  }

  useEffect(() => {
    if (!loading) {
      getUserStatistics();
    }
  }, [game]);


  return (

    <div className="App">
      <ThemeProvider theme={DEFAULT_THEME}>
        <DefaultAppBar selectedGame={game} onGameChange={onGameChange} />
        <Box sx={{ width: '1', display: 'flex', justifyContent: 'space-around', marginTop: '80px' }}>
          {/* {loaded && <ExerciseWheel exercises={userData.exercises} handleExerciseStatisticsUpdate={handleExerciseStatisticsUpdate} />} */}
          {loaded && <ExerciseTableAndCards exercises={userData.exercises} handleExerciseStatisticsUpdate={handleExerciseStatisticsUpdate}/>}
          <Box sx={{ width: '20px' }}></Box>
          {loaded && <StatsTabs exercisesStatistics={userData.exerciseStats} worldDeathCount={+worldDeathCount}
            onHandleWorldDeath={onHandleWorldDeath} onHandleBossDeath={onHandleBossDeath} onHandleBossKill={onHandleBossKill} />}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
