function myFunction() {
    let navigation = document.getElementById("burger-menu");
    navigation.classList.toggle("burger-menu__on");

    let extraLine = document.getElementById("center-line");
    extraLine.classList.toggle("extra-line");

    let cross = document.getElementById("burger");
    cross.classList.toggle("cross");

    let overlay = document.getElementById("overlay");
    overlay.classList.toggle("overlay__on");
    overlay.style.zIndex = "0";
}

function mySecondFunction() {
    let userData = document.getElementById("user-data");
    userData.classList.toggle("user-data__on");

    let overlay = document.getElementById("overlay");
    overlay.classList.toggle("overlay__on");
    overlay.style.zIndex = "1";
}