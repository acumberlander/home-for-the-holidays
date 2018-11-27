import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseurl = apiKeys.fireBaseKeys.databaseURL;

const getHolidaysByArrayOfIds = (uid, holidayIdsArray) => new Promise((resolve, reject) => {
  axios.get(`${baseurl}/holidays.json?orderBy="uid"&equalTo="${uid}"`)

    .then((result) => {
      console.log('holidayIdsArray', holidayIdsArray);
      const holidaysObject = result.data;
      const holidaysArray = [];
      if (holidaysObject !== null) {
        Object.keys(holidaysObject).forEach((holidayId) => {
          holidaysObject[holidayId].id = holidayId;
          holidaysArray.push(holidaysObject[holidayId]);
        });
      }
      const selectedHolidays = holidaysArray.filter(x => holidayIdsArray.includes(x.id));
      resolve(selectedHolidays);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getHolidaysByArrayOfIds };
