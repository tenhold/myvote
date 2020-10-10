// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');


require('dotenv').config();

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

// URI for the cluster in mongo atlas
const URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@myvotecluster.qo11m.mongodb.net/MyVote?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.info('db connected!');
  } catch (err) {
    console.error('db connection error ', err);
  }
};

module.exports = connectDB;
