import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, decrement, increment} from "./redux/actions";
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const logger = (state) => {
  return (next) => {
    return (action) => {
      console.log('Prev state', state.getState());
      console.log({action});
      const newState = next(action)
      console.log('New state', state.getState());
      return newState
    }
  }
}

const store = createStore(
  rootReducer,
  0,
  applyMiddleware(thunk, logger)
)

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state
})

store.dispatch({type: 'INIT_APPLICATION'})

themeBtn.addEventListener('click', () => {

})
