const getBusinesses = response => ({
  type: 'GET_BUSINESS',
  payload: response.data.results
});

export default getBusinesses;

