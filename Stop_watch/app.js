


var minutes_html = document.getElementById('min')
var seconds_html = document.getElementById('seconds')
var minSecond = document.getElementById('minSecond')
var start_btn = document.getElementById('start_btn')

var minutes = 0
var seconds = 0
var min_Second = 0



var start_increment
function start() {
    start_increment = setInterval(function () {
        min_Second++
        if (min_Second >= 99) {
            seconds++
            min_Second = 0

        }
        if (seconds >= 59) {
            minutes++
            seconds = 0
        }
        minSecond.innerText = min_Second
        seconds_html.innerText = seconds
        minutes_html.innerText = minutes
        start_btn.disabled = true
    }, 10)
}

function stop() {
    clearInterval(start_increment)
    start_btn.disabled = false

}



function reset() {
    clearInterval(start_increment)
    minutes = 0
    seconds = 0
    min_Second = 0

    minSecond.innerText = 0
    seconds_html.innerText = 0
    minutes_html.innerText = 0
    start_btn.disabled = false


}























