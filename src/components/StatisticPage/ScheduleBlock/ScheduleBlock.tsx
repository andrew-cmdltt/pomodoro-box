import React from 'react';
import {Schedule} from "./Schedule";
import {StatisticDropdown} from "./StatisticDropdown";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducer";
import {StatisticsState} from "../../../store/statistics/reduser";
import {getStatisticsByWeek, StatisticsByWeek} from "../../../utils/getStatisticsByWeek";


export function ScheduleBlock() {
    const statistics = useSelector<RootState, StatisticsState>(state => state.statistics);
    const statisticsByWeek: StatisticsByWeek[] = getStatisticsByWeek(statistics.data)
    console.log(statisticsByWeek)
    return (
        <div>
            <StatisticDropdown />
            <Schedule />
        </div>
    );
}
