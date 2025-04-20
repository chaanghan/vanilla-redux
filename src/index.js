import { createStore } from 'redux';

const plus = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

// state를 변경하는 함수
// countModifier과의 소통을 위한 action이 있다!
const countModifier = (count = 0, action) => {
  // return 되는 값이 state가 됨
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
number.innerText = 0;
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// subscribe는 우리에게 store 안에 있는 변화들을 알 수 있게 해줌
// store의 변화를 감지하는 역할! onChange 함수를 구독하여 변화를 감지할 수 있게 됨
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

plus.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
