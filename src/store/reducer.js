import {combineReducers} from "redux"
// 所有商品
function commodity(state=null,action){
    switch (action.type) {
        case "SET_COMMODITY":
            
            return action.content
    
        default:
            return state
    }
}





let reducer=combineReducers({
    commodity
})
export default reducer