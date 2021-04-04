import {
    unavailableDate,
    getUnavailableEndHours,
    getUnavailableStartHours,
    getTotalHoursOfDay
} from './utils'
import moment from "moment";

describe("test scheduled-time utils", () => {

    it("isUnavailableDate", () => {
        expect(unavailableDate(moment())).toBe(false);
        expect(unavailableDate(moment().subtract(1, 'days'))).toBe(true);
        expect(unavailableDate(moment().subtract(2, 'days'))).toBe(true);
    });

    it("getTotalHoursOfDay", () => {
        expect(getTotalHoursOfDay()).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
    });

    it("getUnavailableStartHours", () => {
        expect(getUnavailableStartHours(moment().hour(10))).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 23]);
        expect(getUnavailableStartHours(moment().hour(21))).toStrictEqual(getTotalHoursOfDay());
    });

    it("getUnavailableEndHours", () => {
        expect(getUnavailableEndHours(moment().hour(10))).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 23]);
        expect(getUnavailableEndHours(moment().hour(22))).toStrictEqual(getTotalHoursOfDay());
    });
})