import { createStore,  applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import combinedReducer from "./Redux/Reducers&Selectors/indexReducer";
import {composeWithDevTools} from 'redux-devtools-extension';



export default createStore(
  combinedReducer,composeWithDevTools(
    applyMiddleware(
      ReduxThunk
    )
  )
)
