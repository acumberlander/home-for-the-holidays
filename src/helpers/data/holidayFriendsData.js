import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.fireBaseKeys.databaseURL;

const getHolidayIdsForFriend = friendId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/holidayFriends.json?orderBy="friendId"&equalTo="${friendId}"`)
    .then((result) => {
      const holidayFriendsObject = result.data;
      const holidayIdArray = [];
      if (holidayFriendsObject !== null) {
        Object.keys(holidayFriendsObject).forEach((hfId) => {
          holidayIdArray.push(holidayFriendsObject[hfId].holidayId);
        });
      }
      resolve(holidayIdArray);
    })
    .catch((err) => {
      reject(err);
    });
});


export default { getHolidayIdsForFriend };
