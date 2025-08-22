let value = 0;
let multiplier = 1;
function addingvalue() {
    let baseaddValue = 1;
    value = value + baseaddValue * multiplier;
    document.getElementById("value").textContent = value;
}

let upgradeCost = 5
const upgradeCostMultiplier = 2
function upgrade() {
    if (value < upgradeCost) {
        return;
    }
    value = value - upgradeCost;
    upgradeCost = upgradeCost * upgradeCostMultiplier;
    multiplier = multiplier + 1;

    document.getElementById("upgradeprice").textContent = upgradeCost;
}
