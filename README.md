# timezone-compute

<!--
    [![build status][1]][2]
    [![NPM version][3]][4]
    [![Coverage Status][5]][6]
    [![gemnasium Dependency Status][7]][8]
    [![Davis Dependency status][9]][10]
-->

<!-- [![browser support][11]][12] -->

A timezone library with timezone conversion functions

## Example

The main usage is converting recurring weekly times from one
  timezone to another.

```js
var timezone = require("timezone-compute")

// date is a Moment Date object.
var date = timezone.time("America/Los_Angeles", Date.now())

var thisWeek = timezone.getISOWeek()
// Monday 9AM this week in America/Los_Angeles
var date2 = timezone.computeUTC({
  timezone: "America/Los_Angeles",
  minute: 0,
  hour: 9,
  day: 1,
  week: thisWeek.week,
  year: thisWeek.year
})

// that time in someone elses timezone
var date3 = timezone.time("America/New_York", date2)
```

## Installation

`npm install timezone-compute`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Colingo/timezone-compute.png
  [2]: https://travis-ci.org/Colingo/timezone-compute
  [3]: https://badge.fury.io/js/timezone-compute.png
  [4]: https://badge.fury.io/js/timezone-compute
  [5]: https://coveralls.io/repos/Colingo/timezone-compute/badge.png
  [6]: https://coveralls.io/r/Colingo/timezone-compute
  [7]: https://gemnasium.com/Colingo/timezone-compute.png
  [8]: https://gemnasium.com/Colingo/timezone-compute
  [9]: https://david-dm.org/Colingo/timezone-compute.png
  [10]: https://david-dm.org/Colingo/timezone-compute
  [11]: https://ci.testling.com/Colingo/timezone-compute.png
  [12]: https://ci.testling.com/Colingo/timezone-compute
