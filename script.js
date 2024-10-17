let timer = document.querySelector(".timer")
let buttonStart = document.querySelector(".start")
let buttonPouse = document.querySelector(".pause")
let buttonStop = document.querySelector(".stop")

let setInt

let interval = false

let hours = 0
let minutes = 0
let seconds = 0
let milisec = 0

function timeCounter() {
    milisec += 10
    if (milisec >= 1000) {
        milisec = 0
        seconds++
    }


    if (seconds >= 60) {
        seconds = 0
        minutes++
    }


    if (minutes >= 60) {
        minutes = 0
        hours++
    }

    timeComplete()
}


function timeComplete() {
    let newHours
    let newMinutes
    let newSeconds
    let newMilisec

    if (hours < 10) {
        newHours = "0" + hours
    } else {
        newHours = hours
    }


    if (minutes < 10) {
        newMinutes = "0" + minutes
    } else {
        newMinutes = minutes
    }


    if (seconds < 10) {
        newSeconds = "0" + seconds
    } else {
        newSeconds = seconds
    }


    if (milisec < 10) {
        newMilisec = "00" + milisec
    } else if (milisec < 100) {
        newMilisec = "0" + milisec

    } else {
        newMilisec = milisec
    }

    timer.textContent = newHours + ":" + newMinutes + ":" + newSeconds + ":" + newMilisec
}


buttonStart.addEventListener("click", function () {
    if (!interval) {
        setInt = setInterval(timeCounter, 10)
        interval = true
    }
})
buttonPouse.addEventListener("click", function () {
    if (interval) {
        clearInterval(setInt)
        interval = false
    }
})
buttonStop.addEventListener("click", function () {
    clearInterval(setInt)
    interval = false
    hours = 0
    minutes = 0
    seconds = 0
    milisec = 0

    timeComplete()
})