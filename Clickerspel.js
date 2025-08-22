let poäng = 0;
const muspekare = document.getElementById("muspekare");
const poäng1 = document.getElementById("poäng");

muspekare.addEventListener("click", function() {
    poäng = poäng + 1;
    poäng1.textContent = poäng;
});