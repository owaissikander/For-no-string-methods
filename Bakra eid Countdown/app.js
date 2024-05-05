



var Days = document.getElementById('Days')
var Hours = document.getElementById('Hours')
var Minutes = document.getElementById('Minutes')
var Seconds = document.getElementById('Seconds')





var countDownDate = new Date('Jun 16, 2024 00:00:00').getTime();
var x = setInterval(function () {
    var now = new Date().getTime()
    var distance = countDownDate - now


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    Days.innerText = days
    Hours.innerText = hours
    Minutes.innerText = minutes
    Seconds.innerText = seconds











}, 1000)