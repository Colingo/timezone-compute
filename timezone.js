var moment = require("moment-timezone")

module.exports = Timezone

function  Timezone(zoneData) {
    moment.tz.add(zoneData || {})

    return {
        format: format,
        isTimezone: isTimezone,
        offset: offset,
        computeUTC: computeUTC,
        getISOWeek: getISOWeek,
        time: time,
        zonesData: zoneData,
        SECOND: 1000,
        MINUTE: 60 * 1000,
        HOUR: 60 * 60 * 1000,
        DAY: 24 * 60 * 60 * 1000,
        WEEK: 7 * 24 * 60 * 60 * 1000
    }

    function format(timezone, date, formatter) {
        if (typeof timezone !== "string") {
            return date
        }

        if (!zoneData.zones[timezone]) {
            return date
        }

        return moment(date).tz(timezone).format(formatter)
    }

    function isTimezone(timezone) {
        return zoneData.zones[timezone] ? true : false
    }

    function offset(timezone, date) {
        if (typeof timezone !== "string") {
            return 0
        }

        if (!zoneData.zones[timezone]) {
            return 0
        }

        return moment(date).tz(timezone).zone()
    }

    function computeUTC(opts) {
        var date = moment(0).tz(opts.timezone)

        date = date.isoWeek(26)
        date = date.isoWeekYear(opts.year)
        date = date.isoWeek(opts.week)
        date = date.day(opts.day)
        date = date.hour(opts.hour)
        date = date.minute(opts.minute)
        date = date.second(0)
        date = date.millisecond(0)

        return Number(date)
    }

    function getISOWeek(date, timezone) {
        date = moment(new Date(date || Date.now()))

        return {
            year: date.isoWeekYear(),
            week: date.isoWeek(),
            day: date.isoWeekday()
        }
    }

    function time(timezone, date) {
        if (timezone === "") {
            return moment(date)
        }

        return moment(date).tz(timezone)
    }
}
