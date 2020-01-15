const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  console.log(action)
  switch (action.type) {
    case "INCREMENT":
      newState.counter++;
      break;
    case "DECREMENT":
      newState.counter--;
      break;
    case "ADD":
      newState.counter+=action.value;
      break;
    case "SUBSTRACT":
      newState.counter-=action.value;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
