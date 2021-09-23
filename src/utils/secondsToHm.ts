export function secondsToHm(d: number, form: "full" | "abbreviated") {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);

    let hDisplay, mDisplay

    if (form === "full") {
        hDisplay = h > 0 ? h + (h === 1 ? " час " : " часов ") : "";
        mDisplay = m > 0 ? m + (m === 1 ? " минута " : " минут ") : "";
    } else {
        hDisplay = h > 0 ? h + "ч " : "";
        mDisplay = m > 0 ? m + "м " : "";
    }

    if (d < 60) {
        return "0м"
    }

    return hDisplay + mDisplay;

}