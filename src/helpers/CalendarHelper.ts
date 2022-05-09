import moment from 'moment'

export const getYearCalendar = (month: number, year: number) => {
    const calendar = [];
    const today = moment();
    if (year) {
        if (year > today.year()) {
            const toAdd = year - today.year();
            today.add(toAdd, 'year')
        } else if (year < today.year()) {
            const toSub = today.year() - year;
            today.subtract(toSub, 'year')
        }
    }
    if (month > today.month()) {
        const toAdd = month - today.month();
        today.add(toAdd, 'month')
    } else if (month < today.month()) {
        const toSub = today.month() - month;
        today.subtract(toSub, 'month')
    }
    const startDay = today.clone().startOf('month').startOf('isoWeek');
    const endDay = today.clone().endOf('month').endOf('isoWeek');

    let date = startDay.clone().subtract(1, 'day');

    while (date.isBefore(endDay, 'day'))
        calendar.push({
            days: [...Array(7)].map(() => date.add(1, 'day').clone().toDate().getDate())
        });

    return calendar

}