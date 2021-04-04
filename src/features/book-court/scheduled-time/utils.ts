import moment, {Moment} from "moment";

const OFF_WORK_HOUR = 22
const LAST_HOUR_OF_DAY = 24

export function isUnavailableDate(current: Moment): boolean {
    return current && current < moment().subtract(1, 'days').endOf('day');
}

function generateArray(start: number, end: number) {
    if (start > end) {
        return [];
    }
    return Array.from(new Array(end + 1).keys()).slice(start)
}

function getNextHour(currentHour: number) {
    return currentHour + 1;
}

function getAvailableHours(current: Moment): number[] {
    const currentHour: number = current.get("hour")
    return generateArray(getNextHour(currentHour), OFF_WORK_HOUR)
}

export function getTotalHoursOfDay():number[] {
    return Array.from(Array(LAST_HOUR_OF_DAY).keys());
}

export function getUnavailableStartHours(current: Moment): number[] {
    const totalHours: number[] = getTotalHoursOfDay()
    const availableHour = getAvailableHours(current);

    return totalHours.filter(hour => !availableHour.includes(hour) || hour === OFF_WORK_HOUR)
}

export function getUnavailableEndHours(startTime: Moment | null): number[] {
    const totalHours: number[] = getTotalHoursOfDay();
    if (!startTime) {
        return totalHours
    }
    const availableHour = getAvailableHours(startTime);
    return totalHours.filter(hour => !availableHour.includes(hour))
}