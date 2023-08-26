const pizzaImage = document.getElementById("pizza-image");
const pizzaCountSpan = document.getElementById('pizza-count');
const resetButton = document.getElementById('restart-button');

const pizzaiolosButton = document.getElementById('pizzaiolos-button');
const pizzaiolosCountSpan = document.getElementById('pizzaiolos-count');
const pizzaiolosCostSpan = document.getElementById('pizzaiolos-cost');

let pizzaCount = 0;
let pizzaiolosCount = 0;
let pizzaiolosCost = 10;

pizzaImage.addEventListener('click', () => {
    pizzaCount++;
    pizzaCountSpan.textContent = pizzaCount;
});

resetButton.addEventListener('click', () => {
    pizzaCount = 0;
    pizzaiolosCount = 0;
    pizzaiolosCost = 10;
    pizzaCountSpan.textContent = pizzaCount;
    pizzaiolosCountSpan.textContent = pizzaiolosCount;
    pizzaiolosCostSpan.textContent = pizzaiolosCost;
});

pizzaiolosButton.addEventListener('click', () => {
    if (pizzaCount >= pizzaiolosCost) {
        pizzaCount -= pizzaiolosCost;
        pizzaiolosCount++;
        pizzaiolosCost = Math.floor(pizzaiolosCost * 1.2); // Aumenta o custo
        pizzaCountSpan.textContent = pizzaCount;
        pizzaiolosCountSpan.textContent = pizzaiolosCount;
        pizzaiolosCostSpan.textContent = pizzaiolosCost;
    }
});