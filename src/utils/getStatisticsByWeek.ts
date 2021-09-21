import {IStatisticsData} from "../store/statistics/actions";
import moment from "moment";
import {getDayOfWeekByDate} from "./getDayOfWeekByDate";

const currentDate = moment();

export type StatisticsByWeek = {
    dayOfWeek: string,
    focus: number,
    time_on_pause: number,
    stopping: number,
    pomodoro_count: number
}

export function getStatisticsByWeek(statistics: IStatisticsData[], week: "current" | "last" | "2 weeks ago") {
    let statisticsByWeek: StatisticsByWeek[] = [];

    let statisticDates: Date[] = []

    let filtered: Date[]

    statistics.forEach(item => {
        statisticDates.push(item.date)
    });

    switch (week) {
        case "current":
            filtered = statisticDates.filter(date => moment(date).isSame(currentDate, 'week'));
            break
        case "last":
            filtered = statisticDates.filter(date => moment(date).isSame(moment()
                .subtract(1, 'weeks'), "week"))
            break
        case "2 weeks ago":
            filtered = statisticDates.filter(date => moment(date).isSame(moment()
                .subtract(2, 'weeks'), "week"))
            break
    }

    let res = Object.fromEntries(statistics.map(item => [getDayOfWeekByDate(new Date(item.date), "abbreviated"), {
        stopping: 0, pomodoro_count: 0, time_on_pause: 0, dayOfWeek: "", focus: 35
    }]));

    statistics.forEach(item => {
        if (filtered.includes(item.date)) {
            res[getDayOfWeekByDate(new Date(item.date), "abbreviated")].stopping += item.stopping
            res[getDayOfWeekByDate(new Date(item.date), "abbreviated")].pomodoro_count += item.pomodoro_count
            res[getDayOfWeekByDate(new Date(item.date), "abbreviated")].time_on_pause += item.time_on_pause
            res[getDayOfWeekByDate(new Date(item.date), "abbreviated")].dayOfWeek = getDayOfWeekByDate(new Date(item.date), "abbreviated")
        }
    })

    for (let key in res) {
        statisticsByWeek.push(res[key])
    }

    return statisticsByWeek
}