import React from 'react';
import {Schedule} from "./Schedule";
import {StatisticDropdown} from "./StatisticDropdown";

export function ScheduleBlock() {
    return (
        <div>
            <StatisticDropdown />
            <Schedule/>
        </div>
    );
}
