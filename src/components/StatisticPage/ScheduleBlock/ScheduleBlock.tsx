import React from 'react';
import {Schedule} from "./Schedule";
import {StatisticDropdown} from "./StatisticDropdown";
import {StatisticsByWeek} from "../../../utils/getStatisticsByWeek";

type Props = {
    statisticsByWeek: StatisticsByWeek[],
}

export function ScheduleBlock({statisticsByWeek}: Props) {
    return (
        <div>
            <StatisticDropdown/>
            <Schedule statisticsByWeek={statisticsByWeek}/>
        </div>
    );
}
