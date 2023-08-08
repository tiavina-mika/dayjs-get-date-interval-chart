import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const getDateIntervalFormat = (unit = 'month') => {
  switch (unit) {
    case 'day': 
      return { value: "YYYY-MM-DD", label: 'DD-MMMM' };
    default:
      return { value: "YYYY-MM", label: 'MMMM' }
  }
}
/**
 * get an interval of dates between a given interval and unit
 * @param {*} duration
 */
export const getDateInterval = (duration) => {
  const today = dayjs();
  const items = new Array(duration.value).fill().reduce((acc, _, index) => {
    const futurDate = today.add(index, duration.unit);
    const date = futurDate[duration.unit](futurDate.get(duration.unit));

    const format = getDateIntervalFormat(duration.unit)
    const groupBy = date.format(format.value);
    const label = date.format(format.label);

    return {
      ...acc,
      [groupBy]: {
        header: {
          value: groupBy,
          labe: label
        },
        entities: []
      }
    };
  }, {});
  return items;
};

console.log(
  "result",
  getDateInterval({value: 12, unit: "day",  })
);

document.getElementById("app").innerHTML = `
  <h1>DayJs interval by Tiavina Michael RALAINIRINA</h1>
`;
