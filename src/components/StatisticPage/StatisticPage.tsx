import React from 'react';
import styles from './statisticpage.module.css';
import {DayOfWeekBlock} from "./DayOfWeekBlock";
import {ScheduleBlock} from "./ScheduleBlock";
import {Counters} from "./Counters";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {StatisticsState} from "../../store/statistics/reduser";
import {getStatisticsByWeek, Statistics} from "../../utils/getStatisticsByWeek";
import {useParams} from "react-router-dom";
import {getStatisticsByDayOfWeek} from "../../utils/getStatisticsByDayOfWeek";

type Params = {
    dayURI: "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс"
    weekURI: "current" | "last" | "2 weeks ago"
}

export function StatisticPage() {
    const statistics = useSelector<RootState, StatisticsState>(state => state.statistics);
    const {dayURI, weekURI}: Params = useParams();
    const statisticsByWeek: Statistics[] = getStatisticsByWeek(statistics.data, weekURI)
    const statisticsByDayOfWeek: Statistics = getStatisticsByDayOfWeek(dayURI, statisticsByWeek)

    return (
        <div className={styles.statisticPage}>
            <DayOfWeekBlock statisticsByDayOfWeek={statisticsByDayOfWeek} dayURI={dayURI}/>
            <ScheduleBlock statisticsByWeek={statisticsByWeek}/>
            <Counters statisticsByDayOfWeek={statisticsByDayOfWeek}/>
        </div>
    );
}
