import React from 'react';
import styles from './statisticpage.module.css';
import {DayOfWeekBlock} from "./DayOfWeekBlock";
import {ScheduleBlock} from "./ScheduleBlock";
import {Counters} from "./Counters";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {StatisticsState} from "../../store/statistics/reduser";
import {getStatisticsByWeek, Statistics, Week} from "../../utils/getStatisticsByWeek";
import {useParams} from "react-router-dom";
import {Day, getStatisticsByDayOfWeek} from "../../utils/getStatisticsByDayOfWeek";
import {ErrorMessage} from "../ErrorMessage";
import {validateURI} from "../../utils/validateURI";

type Params = {
    dayURI: Day
    weekURI: Week
}

export function StatisticPage() {
    const statistics = useSelector<RootState, StatisticsState>(state => state.statistics);
    const {dayURI, weekURI}: Params = useParams();
    const errorMessage = "404 — страница не найдена"

    const statisticsByWeek: Statistics[] = getStatisticsByWeek(statistics.data, weekURI)
    const statisticsByDayOfWeek: Statistics = getStatisticsByDayOfWeek(dayURI, statisticsByWeek)

    return validateURI(dayURI, weekURI) ? (
        <div className={styles.statisticPage}>
            <DayOfWeekBlock statisticsByDayOfWeek={statisticsByDayOfWeek} dayURI={dayURI}/>
            <ScheduleBlock statisticsByWeek={statisticsByWeek}/>
            {/*<Counters statisticsByDayOfWeek={statisticsByDayOfWeek}/>*/}
        </div>
    ) : <ErrorMessage errorMessage={errorMessage}/>;
}
