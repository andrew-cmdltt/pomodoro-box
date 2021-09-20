import {IStatisticsData} from "../store/statistics/actions";
import moment from "moment";
import {getWeekDay} from "./getWeekDay";
const currentDate = moment();

export type StatisticsByWeek = {
    dayOfWeek: string,
    focus: number,
    time_on_pause: number,
    stopping: number,
    pomodoro_count: number
}

export function getStatisticsByWeek(statistics: IStatisticsData[]) {
    let statisticsByWeek: StatisticsByWeek[] = [];

    let statisticDates: Date[] = []

    statistics.forEach(item => {
        statisticDates.push(item.date)
    });

    let filtered = statisticDates.filter(date => moment(date).isSame(currentDate, 'week'));
    // let filtered = statisticDates.filter(date => moment(date).isSame(moment()
    //     .subtract(2, 'weeks'), "week"))

    let res = Object.fromEntries(statistics.map(item => [getWeekDay(new Date(item.date), "abbreviated"), {
        stopping: 0, pomodoro_count: 0, time_on_pause: 0, dayOfWeek: "", focus: 35
    }]));

    statistics.forEach(item => {
        if (filtered.includes(item.date)) {
            res[getWeekDay(new Date(item.date), "abbreviated")].stopping += item.stopping
            res[getWeekDay(new Date(item.date), "abbreviated")].pomodoro_count += item.pomodoro_count
            res[getWeekDay(new Date(item.date), "abbreviated")].time_on_pause += item.time_on_pause
            res[getWeekDay(new Date(item.date), "abbreviated")].dayOfWeek = getWeekDay(new Date(item.date), "abbreviated")
        }
    })

    for (let key in res) {statisticsByWeek.push(res[key])}

    return statisticsByWeek
}