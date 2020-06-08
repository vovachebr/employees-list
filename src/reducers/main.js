import { combineReducers } from 'redux'
import users from './users'
import loader from './loader'

const main = combineReducers({
  users,
  loader
})

export default main;