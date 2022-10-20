import {
    SAVE_INPUT_VALUE,
    ERROR_INPUT_VALUE,
    NEXT_PAGE
} from '../actions/FormActions'



const initialState = {
    page:{
      previousPage: 1,
      nextPage: 2,
      currentPage: 1
    },
    values:{
      name:'',
      age:''
    },
    errors:{}
  }
export default function reducer(state = initialState, action){
 
    
    switch(action.type){
        case SAVE_INPUT_VALUE:
        return {
            ...state,
            values:{
              ...state.values,
              ...action.values
            }
        }
        case ERROR_INPUT_VALUE:
        return {
            ...state,
            errors:action.errors
        }
        case NEXT_PAGE:
        return {
            ...state,
            page: action.page
          }
        default:
        return state
    }
}