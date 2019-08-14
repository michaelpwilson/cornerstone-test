import axios from 'axios';

const apiUrl = 'https://api.punkapi.com/v2';

export const fetchData = (data) => {
  var structure = {
    type: "PUNK_API_REQUEST",
    data
  };
  return structure
};

export const fetchBeers = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/beers`).then(response => {
      dispatch(fetchData(response.data))
    })
    .catch(error => {
      throw(error);
    });
  };
};

export const fetchBeer = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/beers/${id}`).then(response => {
      dispatch(fetchData(response.data[0]))
    })
    .catch(error => {
      throw(error);
    });
  };
};