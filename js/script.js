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
