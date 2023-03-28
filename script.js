var plusButton = document.getElementById("plus-button");
let counter = 0;
var text = document.getElementById("counter-text");
var lessButton = document.getElementById("less-button");
var goal = 8;
var progressBar = document.getElementById("fill");
let increase = 80/goal;
let progress = 80

var myDate = new Date ();
var myDay = myDate.getDay();
var yest = null;
if(yest!=myDay) {
    let counter = 0;
    yest=myDay
}

text.textContent = counter;


plusButton.addEventListener("click", () => {
    counter++
    text.textContent = counter;
    //if the number of glasses is still not the goal number of glasses
    if(counter<=goal) {
        progress = progress - increase;
        //show
        progressBar.style.height = progress + "%";
    } 
    //if the number of glasses has gotten or surpasses the goal number of glasses let height remain the SAME
    else {
        progress=0;
        progressBar.style.height = progress + "%";
    }
});

//window.alert("Hello World");

lessButton.addEventListener("click", () => {
    //window.alert("Hello World");
    if(counter>0) {
        counter--
        text.textContent = counter;
        if (counter<goal) {
            progress = progress + increase;
            progressBar.style.height = progress + "%";
        } else {
            progress=0;
            progressBar.style.height = progress + "%";
        }
    }
});
