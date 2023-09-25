var cel = document.getElementById("cel");
var fah = document.getElementById("fah")
var kel = document.getElementById("kel")
// Celsius to kelvin and fahrenheit
cel.addEventListener('input', function () {
    let c = this.value;
    let f = (c * 9/5) + 32;
    let k = (c*1) + 273.15;
    if (!Number.isInteger(f,k)) {
        f = f.toFixed(2);
        k = k.toFixed(2);
    }
    fah.value = f;
    kel.value = k;
});
// fahrenheit to celsius and kelvin
fah.addEventListener('input', function () {
    let f = this.value;
    let c = (f - 32) * 5/9;
    let k = (f - 32) * 5/9 + 273.15;
    if (!Number.isInteger(c,k)) {
        c = c.toFixed(2);
        k = k.toFixed(2);
    }
    cel.value = c;
    kel.value = k;
});
//  kelvin to celsius and fahrenheit
kel.addEventListener('input', function () {
    let k = this.value;
    let c = k - 273.15;
    let f = (k - 273.15) * (9/5) + 32;
    if (!Number.isInteger(f,c)) {
        f = f.toFixed(2);
        c = c.toFixed(2);
    }
    cel.value = c;
    fah.value = f;
});
