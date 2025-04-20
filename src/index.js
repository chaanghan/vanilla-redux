const plus = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handlePlus = () => {
  count++;
  updateText();
};

const handleMinus = () => {
  count--;
  updateText();
};

plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);
