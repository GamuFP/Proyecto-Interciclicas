/*        CHECKBOXIFY        */
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
function unpress() {
    for (let i = 0; i < arguments.length; i++) {
        let element = document.getElementById(arguments[i]);
        element.className = "unpressed";
    }
}
/*        CARROUSEL          */
let horses = [];
let barn = document.getElementById('barn');
function setCarrousel() {
    
    //Fills an array with the elements of the carrousel
    let horsesRaw = document.getElementById("barn").childNodes;
    for (let i = 0; i < horsesRaw.length; i++) {
        let horse = horsesRaw[i];
        if (horse.tagName !== undefined && horse.tagName == "DIV") {
            horses.push(horse);
        }
    }
    for (let i in horses) {
        horses[i].classList.add('_' + i);
        barn.appendChild(horses[i]);
    }
} setCarrousel();

function moveCarrousel(direction) {
    let dir = direction == 'left' ? 1 : -1;
    //Moves the class number
    for (let i in horses) {
        pos = Number(horses[i].classList[1].slice(1));
        pos += dir;
        if (pos > horses.length - 1) {
            pos = 0;
        }
        if (pos < 0) {
            pos = horses.length - 1;
        }
        horses[i].classList.replace(horses[i].classList[1], '_' + pos);
    }
    //Sorts the horses array
    horses.sort(function (a, b) {
        if (Number(a.classList[1].slice(1)) > Number(b.classList[1].slice(1))) 
            return 1;
        else return -1;
    });
    //Resorts the horses in the dom
    for (let i in horses) {
        barn.appendChild(horses[i]);
    }
    //Scrolls the midle horse into view
    horses[2].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
}
horses[2].scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
});