const BASE_URL = process.env.REACT_APP_BASE_URL;

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
  const response = await fetch(`${BASE_URL}/DEV/statistics?user=${user}&game=${game}`);

  return processResponse(response);
};

export const updateWorldDeathCount = async (user, game) => {
  let body = {"user": user, "game": game};
  let url = `${BASE_URL}/DEV/deaths/world`;

  return postRequest(url, body);
};

export const updateCurrentBoss = async (user, game, boss) => {
  let body = {"user": user, "game": game, "boss": boss};
  let url = `${BASE_URL}/DEV/bosses/current`;

  return postRequest(url, body);
};