


function menu_btn_pressed() {

    let menu_btn = document.getElementById("menu-btn");
    let menu = document.getElementById("menu");
    let state = menu_btn.className;
    if (state == "unpressed") {
        menu_btn.className = "pressed";
        menu.className = "pressed";
    } else {
        menu_btn.className = "unpressed";
        menu.className = "unpressed";
    }
}