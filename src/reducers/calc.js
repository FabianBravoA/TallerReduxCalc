import { ADD_NUMBER } from "../actions/actionTypes";

export default (
  state = {
    previousNumber: 0,
    currentOperation: '+',
    display: '0'
  }, action)=>{
    switch(action.type){
      case ADD_NUMBER: 
        if(state.display == '0'){
          return {
            ...state,
            display : action.payload.digit
          }
        }else{
          return {
            ...state,
            display : state.display + "" + action.payload.digit
          }
        }
      default: return state;
    }
};