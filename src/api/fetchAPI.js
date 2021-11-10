const fetchAPI = async () => {
  const URL = 'http://localhost:4000/api/v1/greetings';
  const request = await fetch(URL, {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  });
  const response = await request.json();
  return response;
};

export default fetchAPI;
