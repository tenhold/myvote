const response = require('../../src/components/response.json');
const getCandidateList = require('./candidateList');



const officesRegEx = /(president)|(house)|(senate)|(district)|(school)|(juvenile)|(criminal)|(civil)|(traffic)/i;
const getOffice = ((str, regex) => {
  return str.match(regex)[0].toLowerCase();
});










// const names =
// {
//   "ballot_item_display_name": "U.S. Senate Louisiana",
//   "candidate_list": [
//     {
//       "we_vote_id": "wv02cand66336",
//       "ballot_item_display_name": "Bill Cassidy",
//       "ballotpedia_candidate_summary": "William \"Bill\" Cassidy (b. September 28, 1957, in Highland Park, IL) is a Republican member of the U.S. Senate and previously represented Louisiana's 6th Congressional District. Cassidy was first elected to the U.S. Senate in 2014 and served in the U.S. House of Representatives from 2008 to 2015.    Cassidy announced on April 3, 2013, that he would challenge incumbent Mary Landrieu (D) for the Senate seat in Louisiana. Cassidy and Landrieu were the top two vote-getters in the November 4 \"jungle primary.\" Cassidy defeated Landrieu in a runoff election on December 6, 2014. Some speculated that the Landrieu-Cassidy runoff election would receive significant outside spending and national media attention because the winner of the race was expected to decide which party would gain control of the Senate. The race, however, was less competitive and contentious because Republicans secured control of the United States Senate on November 4, 2014.",
//       "ballotpedia_candidate_url": "https://ballotpedia.org/Bill_Cassidy",
//       "candidate_photo_url_medium": "https://wevote-images.s3.amazonaws.com/wv02cand66336/facebook_profile_image-20200604_1_48x48.jpeg",
//       "candidate_photo_url_tiny": "https://wevote-images.s3.amazonaws.com/wv02cand66336/facebook_profile_image-20200604_1_32x32.jpeg",
//       "kind_of_ballot_item": "CANDIDATE",
//       "party": "Republican Party",
//       "state_code": "la",
//       "twitter_handle": "BillCassidy",
//       "twitter_description": "Gastroenterologist currently serving the people of Louisiana in the U.S. Senate",
//       "twitter_followers_count": 47351,
//       "withdrawn_from_election": false,
//       "withdrawal_date": ""
//     },
//     {
//       "we_vote_id": "wv02cand66337",
//       "ballot_item_display_name": "Antoine Pierce",
//       "ballotpedia_candidate_summary": "Antoine Pierce was a candidate for the District 8 seat on the Metro Council of  Baton Rouge in Louisiana. Pierce was defeated in the primary election on November 8, 2016.    He was previously a 2015 Democratic candidate for District 66 of the Louisiana House of Representatives.",
//       "ballotpedia_candidate_url": "https://ballotpedia.org/Antoine_Pierce",
//       "candidate_photo_url_medium": "https://wevote-images.s3.amazonaws.com/wv02cand66337/facebook_profile_image-20200604_1_48x48.jpeg",
//       "candidate_photo_url_tiny": "https://wevote-images.s3.amazonaws.com/wv02cand66337/facebook_profile_image-20200604_1_32x32.jpeg",
//       "kind_of_ballot_item": "CANDIDATE",
//       "party": "Democratic Party",
//       "state_code": "la",
//       "twitter_handle": "AntoinePierce",
//       "twitter_description": "Democratic candidate for U.S. Senate from Louisiana. Currently serving as Gov. JBE's appointee to his JJDP Advisory board. Public servant. Community Organizer.",
//       "twitter_followers_count": 5368,
//       "withdrawn_from_election": false,
//       "withdrawal_date": ""
//     },
//   ]
// }



// const officesRegEx = /(president)|(house)|(senate)/i;

// const getOffice = ((str, regex) => {
//   return str.match(regex)[0].toLowerCase();
// })

// // console.log(getOffice(names.ballot_item_display_name, officesRegEx)[0].toLowerCase());


// console.log(response.ballot_item_list.map(name => name.ballot_item_display_name))