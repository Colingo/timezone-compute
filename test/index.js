var test = require("tape")

var timezone = require("../index")
var computeUTC = timezone.computeUTC
var getISOWeek = timezone.getISOWeek

test("computeUTC is a function", function (assert) {
    assert.equal(typeof computeUTC, "function")

    assert.end()
})

test("computeUTC({ 2014/12/29, New York })", function (assert) {
    var isoWeek = getISOWeek("2014/12/29")
    var time = computeMonday(isoWeek, "America/New_York")

    assert.equal(date(time), "Mon, 29 Dec 2014 14:00:00 GMT")
    assert.end()
})

test("computeUTC({ 2012/1/1, New York })", function (assert) {
    var isoWeek = getISOWeek("2012/1/1")
    var time = computeMonday(isoWeek, "America/New_York")

    assert.equal(date(time), "Mon, 26 Dec 2011 14:00:00 GMT")
    assert.end()
})

test("computeUTC({ 2013/3/9, New York })", function (assert) {
    var isoWeek = getISOWeek("2013/3/9")
    var time = computeMonday(isoWeek, "America/New_York")

    assert.equal(date(time), "Mon, 04 Mar 2013 14:00:00 GMT")
    assert.end()
})

test("computeUTC({ 2013/3/16, New York })", function (assert) {
    var isoWeek = getISOWeek("2013/3/16")
    var time = computeMonday(isoWeek, "America/New_York")

    assert.equal(date(time), "Mon, 11 Mar 2013 13:00:00 GMT")
    assert.end()
})

test("computeUTC({ 2013/7/8, New York })", function (assert) {
    var isoWeek = getISOWeek("2013/7/8")
    var time = computeMonday(isoWeek, "America/New_York")

    assert.equal(date(time), "Mon, 08 Jul 2013 13:00:00 GMT")
    assert.end()
})

test("computeUTC({ 2013/11/3, New York })", function (assert) {
    var isoWeek = getISOWeek("2013/11/3")
    var time = computeMonday(isoWeek, "America/New_York")

    assert.equal(date(time), "Mon, 28 Oct 2013 13:00:00 GMT")
    assert.end()
})

test("computeUTC({ 2013/11/4, New York })", function (assert) {
    var isoWeek = getISOWeek("2013/11/4")
    var time = computeMonday(isoWeek, "America/New_York")

    assert.equal(date(time), "Mon, 04 Nov 2013 14:00:00 GMT")
    assert.end()
})

test("computeUTC({ 2011/5/1, Chile })", function (assert) {
    var isoWeek = getISOWeek("2011/5/2")
    var time = computeMonday(isoWeek, "America/Santiago")

    assert.equal(date(time), "Mon, 02 May 2011 12:00:00 GMT")
    assert.end()
})

test("computeUTC({ 2011/5/8, Chile })", function (assert) {
    var isoWeek = getISOWeek("2011/5/9")
    var time = computeMonday(isoWeek, "America/Santiago")

    assert.equal(date(time), "Mon, 09 May 2011 13:00:00 GMT")
    assert.end()
})

test("computeUTC({ 2013/4/24, Chile })", function (assert) {
    var isoWeek = getISOWeek("2013/4/24")
    var time = computeMonday(isoWeek, "America/Santiago")

    assert.equal(date(time), "Mon, 22 Apr 2013 12:00:00 GMT")
    assert.end()
})

test("computeUTC({ 2013/4/31, Chile })", function (assert) {
    var isoWeek = getISOWeek("2013/4/31")
    var time = computeMonday(isoWeek, "America/Santiago")

    assert.equal(date(time), "Mon, 29 Apr 2013 13:00:00 GMT")
    assert.end()
})

function date(time) {
    return new Date(time).toGMTString()
}

function computeMonday(isoWeek, timezone) {
    return computeUTC({
        minute: 0,
        hour: 9,
        day: 1,
        week: isoWeek.week,
        year: isoWeek.year,
        timezone: timezone
    })
}
