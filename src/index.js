import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

/**
 * get an interval of dates between a given interval and unit
 * @param {*} duration
 */
export const getDateInterval = (duration) => {
  const today = dayjs();
  const items = new Array(duration.value).fill().reduce((acc, _, index) => {
    const futurDate = today.add(index, duration.unit);
    const date = futurDate[duration.unit](futurDate.get(duration.unit));

    const groupBy = date.format(duration.keyFormat);

    return {
      ...acc,
      [groupBy]: {
        header: {
          value: groupBy
        },
        entities: []
      }
    };
  }, {});
  return items;
};

console.log(
  "result",
  getDateInterval({ value: 12, unit: "month", keyFormat: "YYYY-MM" })
);

document.getElementById("app").innerHTML = `
  <h1>DayJs interval by Tiavina Michael RALAINIRINA</h1>
`;
