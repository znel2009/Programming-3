element = document.getElementById("elementp")
clicks = 0

function clickHandler(evt){
    clicks++
    this.innerText = "Clicks " + clicks
}

element.addEventListener("click", clickHandler)

// DOM Event
function bodyClick(event){
    console.log(event.pageX, event.pageY)
}

window.onclick = bodyClick

// p5

function setup(){
    background("red")
}

function mouseClicked(){
    console.log("p5",mouseX, mouseY)
}
function preload(){
    console.log("Website load")
}
function keyPressed(){
    console.log(key)
}