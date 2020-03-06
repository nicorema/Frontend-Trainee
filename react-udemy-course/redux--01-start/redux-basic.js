const redux = require("redux");
const createStore = redux.createStore;
const initialState = {
  counter: 0
};

// Reducer
const rootReducer = (currentState = initialState, action) => {
  let newState = { ...currentState };
  switch (action.type) {
    case "INC_COUNTER":
      newState.counter++;
      break;

    case "ADD_COUNTER":
      newState.counter += action.value;
      break;

    default:
      break;
  }
  return newState;
};
// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
