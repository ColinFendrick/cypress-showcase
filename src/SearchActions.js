import request from 'request';

export const getRequest = (param, callback) => {
  const url = `https://jsonplaceholder.typicode.com/${param}`
  console.log(url)
  request({ url, json: true }, (error, res) => {
    if (error) {
      callback('Unable to connect to location services');
    } else {
      callback(error, res);
    };
  });
};
