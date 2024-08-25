import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(tz);

export const durationService = {
  getTimeInTimeZone: (timeZone: string) =>
    dayjs().tz(timeZone).format("HH:mm:ss"),
};
