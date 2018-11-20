import {ACTION_TEST} from "./index";


export const actionTest = (params) => dispatch => {
  dispatch({
    type: ACTION_TEST,
    payload: params
  })
}
