const { createStore, combineReducers } = require('redux'); // 创建一个状态集合store
// action.type 常量 决定了这次dispatch要干什么
// reducer 可以收到action的信息
const add = {
  type: 'INCREMENT'
}
const reduce = {
  type: 'DECREMENT'
}
// 加 ADD_FILM
function filmReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_FILM':
      return [...state, action.film];
    default: 
      return state;
  }
}
function reducer(state, action) {
  console.log('reducer->>>>>', action)
  if (action.type === 'INCREMENT') {
    return state + 1
  } 
  else if (action.type === 'DECREMENT') {
    return state -1;
  }
  else {
    return 0;
  }
}
const index = combineReducers({
  count: reducer,
  films: filmReducer
})
// createStore 只接收 reducer
const store = createStore(index);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(add);  // 每dispatch一次，就出发一次reducer
store.dispatch(add);
store.dispatch(reduce);
store.dispatch({
  type: 'ADD_FILM',

  a: 1,
  b: 2, 
  id: 0,
  film: {name: '狮子王'}
})