import * as actionTypes from "../../store/actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age
      };
      return { persons: state.persons.concat(newPerson) };
    case actionTypes.DELETE_PERSON:
      return {
        persons: state.persons.filter(element => element.id !== action.personId)
      };
  }
  return state;
};

export default reducer;
