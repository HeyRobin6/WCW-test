var plusButton = document.getElementById("plus-button");
let counter = 0;
var text = document.getElementById("counter-text");
var lessButton = document.getElementById("less-button");
var goal = 8;
var progressBar = document.getElementById("fill");
var waves = document.getElementById("waves");
let wavesIncrease = 90/goal;
let wavesProgress = 125;
let increase = 60/goal;
let progress = 60

var myDate = new Date ();
var myDay = myDate.getDay();
var yest = null;
if(yest!=myDay) {
    let counter = 0;
    yest=myDay
}

text.textContent = counter;


plusButton.addEventListener("click", () => {
    //update
    counter++
    //show
    text.textContent = counter;
    //if the number of glasses is still not the goal number of glasses
    if(counter<=goal) {
        //update
        progress = progress - increase;
        wavesProgress = wavesProgress - wavesIncrease;
        //show
        progressBar.style.height = progress + "%";
        waves.style.marginTop = wavesProgress + "px";
    } 
    //if the number of glasses has gotten or surpasses the goal number of glasses let height remain the SAME
    else {
        progress=0;
        progressBar.style.height = progress + "%";
    }
});

lessButton.addEventListener("click", () => {
    if(counter>0) {
        counter--
        text.textContent = counter;
        if (counter<goal) {
            //update
            progress = progress + increase;
            wavesProgress = wavesProgress + wavesIncrease;
            //show
            progressBar.style.height = progress + "%";
            waves.style.marginTop = wavesProgress + "px";
        } else {
            progress=0;
            progressBar.style.height = progress + "%";
        }
    }
});
