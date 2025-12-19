document.getElementById('btn').addEventListener('click', function() {
    const textElement = document.getElementById('text');
    if (textElement.textContent === 'Hello') {
        textElement.textContent = 'World';
    } else {
        textElement.textContent = 'Hello';
    }
});