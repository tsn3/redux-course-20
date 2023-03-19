import {DECREMENT, INCREMENT} from "./types";

export const increment = ()=> {
  return {
    type: INCREMENT
  }
}

export const decrement = ()=> {
  return {
    type: DECREMENT
  }
}

export const asyncIncrement = ()=> {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment())
    }, 2000)
  }
}