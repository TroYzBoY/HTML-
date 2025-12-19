const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0;

function updateDisplay() {
    counterDisplay.textContent = count;

    if (count > 0) {
        counterDisplay.style.color = '#10b981';
    } else if (count < 0) {
        counterDisplay.style.color = '#ef4444';
    } else {
        counterDisplay.style.color = '#667eea';
    }
}

increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});