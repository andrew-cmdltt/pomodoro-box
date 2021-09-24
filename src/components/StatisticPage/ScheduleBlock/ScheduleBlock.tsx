import React from 'react';
import {Schedule} from "./Schedule";
import {StatisticDropdown} from "./StatisticDropdown";
import {Statistics} from "../../../utils/getStatisticsByWeek";

type Props = {
    statisticsByWeek: Statistics[],
}

export function ScheduleBlock({statisticsByWeek}: Props) {
    return (
        <div>
            <StatisticDropdown/>
            <Schedule statisticsByWeek={statisticsByWeek}/>
        </div>
    );
}
