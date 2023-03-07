// aggiunta tasti

let plus = document.createElement("button")
let text = document.createTextNode("+");

plus.appendChild(text);

let element = document.getElementById("box1");

element.appendChild(plus);



let reset = document.createElement("button")
let text2 = document.createTextNode("RESET")

reset.appendChild(text2);

let box = document.getElementById("box2");

box.appendChild(reset);

let minus = document.createElement("button")
let text1 = document.createTextNode("-")

minus.appendChild(text1);

let div = document.getElementById("box3");

div.appendChild(minus);


// css sui nuovi tasti

plus.style.width = "60px";
plus.style.height = "60px";
plus.style.fontSize = "40px";
plus.style.border = "3px solid #00ff6c";
plus.style.background = "#00ff6c";
plus.style.cursor = "pointer";

minus.style.width = "60px";
minus.style.height = "60px";
minus.style.fontSize = "40px";
minus.style.border = "3px solid #00ff6c";
minus.style.background = "#00aaff";
minus.style.cursor = "pointer";


reset.style.width = "60px";
reset.style.height = "60px";
reset.style.border = "3px solid #00ff6c";
reset.style.background = "rgb(249, 194, 93)";
reset.style.cursor = "pointer";


// counter

let counter = document.getElementById("numbers")
let count = 0

plus.addEventListener("click", function() {
    count += 1; 
    counter.innerHTML = count;
})

reset.addEventListener("click", function() {
    count = 0;
    counter.innerHTML = count;
})

minus.addEventListener("click", function() {
    if (count === 0) {
        count = count
    }
    count -= 1;
    counter.innerHTML = count;
})











