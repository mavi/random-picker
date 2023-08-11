const textareaEl = document.getElementById('textarea');
const pickEl = document.getElementById('pickone');
const resultEl = document.getElementById('result');

textareaEl.focus();

pickEl.addEventListener('click', () => {
    if (textareaEl.value.length > 0) {
    resultEl.innerHTML = "Result: " + pickRandom();
    resultEl.style.visibility = 'visible'};
    if (textareaEl.value.length == 0) {
        resultEl.style.visibility = 'hidden'};
});

function pickRandom() {
	const items = textareaEl.value.split(',');
	return items[Math.floor(Math.random() * items.length)];
};