import { CHANGE_NUMBER } from "./actionTypes"

const reducerCounter = (state = 0, action)=>{
    switch (action.type){
        case CHANGE_NUMBER:
            const {number} = action
            return {number: number}
        default:
            return state
    }
}

export default reducerCounter