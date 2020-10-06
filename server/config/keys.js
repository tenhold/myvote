require('dotenv').config();

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

module.exports = {
  google: {
    clientID:
      '331672915478-f4p3rsmm66jti767omjcf4tdujsbgjum.apps.googleusercontent.com',
    clientSecret: 'QRSF0ntO80iJvku036BN19L8',
  },
  mongodb: {
    dbURI: `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@myvotecluster.qo11m.mongodb.net/MyVote?retryWrites=true&w=majority`,
  },
};
