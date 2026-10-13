const btn = document.getElementById('btn');
const text = document.getElementById('text');

const change = setTimeout(() => {
  text.textContent = "ボタンをクリックしました";
}, 2000);

btn.addEventListener('click', () => {
  change();
});