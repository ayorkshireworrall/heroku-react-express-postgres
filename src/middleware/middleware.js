import axios from 'axios';

export const modifyMessage = (req, res, next) => {
  req.body.message = `Says: ${req.body.message}`;
  next();
};

export const performAsyncAction = async (req, res, next) => {
  try {
    let axiosResponse = await axios.get('https://picsum.photos/id/0/info');
    console.log('Axios response: ', axiosResponse.status);
    next();
  } catch (err) {
    next(err);
  }
};
