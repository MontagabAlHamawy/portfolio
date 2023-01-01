var ff = document.getElementById("ff");


function dfd() {
    if (ff.classList.contains('ri-sun-fill')) {
        ff.classList.remove('ri-sun-fill');
        ff.classList.toggle("ri-contrast-2-fill");
        document.body.classList.toggle("light-them");
    }
    else {
        document.body.classList.remove("light-them");
        ff.classList.remove('ri-contrast-2-fill');
        ff.classList.toggle("ri-sun-fill");
    }
}