import request from 'request';

export const getRequest = (userId, callback) => {
  const param = userId && `?userId=${userId}`;
  const url = `https://jsonplaceholder.typicode.com/posts${param}`;
  request({ url, json: true }, (error, res) => {
    if (error) {
      callback('Unable to connect to location services');
    } else {
      callback(error, res);
    };
  });
};
