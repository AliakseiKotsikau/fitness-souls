const BASE_URL = process.env.REACT_APP_BASE_URL;
const GET_STATISTICS_URL = BASE_URL + process.env.REACT_APP_GET_STATISTICS_URL;
const UPDATE_WORLD_DEATH_COUNT_URL = BASE_URL + process.env.REACT_APP_UPDATE_WORLD_DEATH_COUNT_URL;
const UPDATE_BOSS_DEATH_COUNT_URL = BASE_URL + process.env.REACT_APP_UPDATE_BOSS_DEATH_COUNT_URL;
const UPDATE_CURRENT_BOSS_URL = BASE_URL + process.env.REACT_APP_UPDATE_CURRENT_BOSS_URL;
const KILL_BOSS_URL = BASE_URL + process.env.REACT_APP_KILL_BOSS_URL;
const UPDATE_EXERCISE_STATS_URL = BASE_URL + process.env.REACT_APP_UPDATE_EXERCISE_STATS_URL;

function processResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
}

async function postRequest(url, body) {
  const response = await fetch(url, {method: "POST", body: JSON.stringify(body)});

  return processResponse(response);
};

export const fetchUserStatisticsForGame = async (user, game) => {
  const response = await fetch(`${GET_STATISTICS_URL}?user=${user}&game=${game}`);

  return processResponse(response);
};

export const updateWorldDeathCount = async (user, game) => {
  let body = {"user": user, "game": game};

  return postRequest(UPDATE_WORLD_DEATH_COUNT_URL, body);
};

export const updateBossDeathCount = async (user, game, boss) => {
  let body = {"user": user, "game": game, "boss": boss};

  return postRequest(UPDATE_BOSS_DEATH_COUNT_URL, body);
};

export const updateCurrentBoss = async (user, game, boss) => {
  let body = {"user": user, "game": game, "boss": boss};

  return postRequest(UPDATE_CURRENT_BOSS_URL, body);
};

export const updateExerciseStatistics = async (user, game, exercise, quantity) => {
  let body = {"user": user, "game": game, "exercise": exercise, "quantity": quantity};

  return postRequest(UPDATE_EXERCISE_STATS_URL, body);
};

export const killBoss = async (user, game, boss) => {
  let body = {"user": user, "game": game, "boss": boss};

  return postRequest(KILL_BOSS_URL, body);
};