const rub = document.getElementById("rub");
const val = document.getElementById("val");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

btn.onclick = function () {
    let rubli = Number(rub.value);
    if (!rubli || rubli <= 0) {
        rez.innerHTML = "Введите число больше 0";
        return;
    }
    let kurs = 0;
    if (val.value === "USD") {
        kurs = 75.04;
    } else if (val.value === "EUR") {
        kurs = 87.92;
    } else if (val.value === "GBP") {
        kurs = 101,84 ;
    }
    let result = rubli / kurs;
    rez.innerHTML = `${rubli} руб = ${result.toFixed(2)} ${val.value}`;
};