
function element_pressed() {
    for (let i = 0; i < arguments.length; i++) {
        let element = document.getElementById(arguments[i]);
        let state = element.className;
        if (state == "unpressed") {
            element.className = "pressed";
        } else {
            element.className = "unpressed";
        }
    }
}
function unpress(){
    for (let i = 0; i < arguments.length; i++) {
        let element = document.getElementById(arguments[i]);
        element.className = "unpressed";
    }
}
let horses = [];
function setCarrousel(){
    //Fills an array with the elements of the carrousel
    let horsesRaw = document.getElementById("carrousel").childNodes;
    for (let i = 0; i<horsesRaw.length;i++) {
        let horse = horsesRaw[i];
        if (horse.tagName !== undefined && horse.tagName == "DIV") {
            horses.push(horse);
        }
    }
        
}setCarrousel();