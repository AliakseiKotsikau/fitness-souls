export const getRequestWithNativeFetch = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};

export const postRequest = async (url, body) => {
  const response = await fetch(url, {method: "POST", body: JSON.stringify(body)});

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};