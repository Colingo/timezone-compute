var TimezoneData = require("./timezones.json")

var sources = [
    TimezoneData.links, TimezoneData.meta, TimezoneData.zones
]

var timezones = {}
sources.forEach(function (source) {
    Object.keys(source).forEach(function (key) {
        timezones[key] = key
    })
})

module.exports = timezones
