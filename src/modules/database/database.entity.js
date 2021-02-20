/* eslint-disable no-console */
const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://marschall:germany@books.2hk4i.mongodb.net/books?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    console.log('Successfully connected to database');
  } catch (error) {
    console.log(error);
  }
};
