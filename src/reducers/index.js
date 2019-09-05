import { combineReducers } from 'redux'
import photosReducer from './photos'

export const createRootReducer = () => (
  combineReducers({
    photos: photosReducer
  })
)

export default createRootReducer
