type MaybeDate = Date | Number | String

type Timezone := {
    format: (timezone: String, MaybeDate, format: String) => String,
    isTimezone: (timezone: String) => Boolean,
    offset: (timezone: String, MaybeDate) => Number,
    computeUTC: ({
        timezone: String,
        minute: Number,
        hour: Number,
        day: Number,
        week: Number,
        year: Number
    }) => Number,
    getISOWeek: (date?: Date, timezone?: String) => {
        year: Number,
        week: Number,
        day: Number
    },
    time: (timezone: String, MaybeDate) => MomentDate
}

timezone-compute := Timezone

timezone-compute/timezone := (zoneData: Object) => Timezone
