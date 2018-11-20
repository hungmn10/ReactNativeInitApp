import {ACTION_TEST} from "../actions";

const initState = {
  params: 'init params'
}

export const reducerTest = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TEST:
      return {
        ...state,
        params: action.payload,
      }
    default:
      return state
  }
}
