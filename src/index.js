import { createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD = 'ADD';
const DELETE = 'DELETE';

const reducer = (state = [], action) => {
  console.log(action);

  switch (action.type) {
    case ADD:
      const newToDo = { text: action.text, id: Date.now() };
      return [newToDo, ...state]; // 새로운 배열에 기존의 데이터에서 텍스트를 추가! 제일 중요한 부분!
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
  ul.innerHTML = '';
  const toDos = store.getState();
  toDos.forEach((todo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'DELETE';
    btn.addEventListener('click', dispatchDeleteToDo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos);

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const deleteToDo = (id) => {
  return { type: DELETE, id };
};
const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value; // 입력한 값
  input.value = '';
  dispatchAddToDo(toDo);
};

form.addEventListener('submit', onSubmit);
