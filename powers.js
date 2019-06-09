// Flight Button 
let flightBtn = document.querySelector("#activate-flight")
let activeFlight = document.getElementById("flight")

flightBtn.addEventListener("click", function flightHandlerFunction() {
    if (activeFlight.classList = " disabled ") {
        activeFlight.classList.remove("disabled")
        activeFlight.classList.add("enabled")

    }
});
// mind reading button section 
let mindSection = document.querySelector("#mindreading")

document.querySelector("#activate-mindreading").addEventListener("click", function () {
    if (mindSection.classList = "disabled") {
        mindSection.classList.remove("disabled")
        mindSection.classList.add("enabled")

    }
})

// Xray button section
let xRaySection = document.querySelector('#xray')

document.querySelector("#activate-xray").addEventListener("click", function () {
    if (xRaySection.classList = "disabled") {
        xRaySection.classList.remove("disabled")
        xRaySection.classList.add("enabled")
    }
})

// Active all and deactive buttons 
let allSection = document.querySelectorAll('section');

document.querySelector("#activate-all").addEventListener("click", function () {
    allSection.forEach(allSection => {
        if (allSection.classList = "disabled") {
            allSection.classList.remove('disabled')
            allSection.classList.add("enabled")
        }
    })
})

document.querySelector("#deactivate-all").addEventListener("click", function () {
    allSection.forEach(allSection => {
        if (allSection.classList = "enabled") {
            allSection.classList.remove('enabled')
            allSection.classList.add("disabled")
        }
    })
})



