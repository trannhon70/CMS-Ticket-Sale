import { DoiSoatVeList,Action } from "../Actions/DoiSoatVeAction";
import { ActionType } from "../Constants/ActionsTypes";


const initialState: DoiSoatVeList = {
    // danh sách đối soát vé
    doiSoatVeList:[],
}

export const DoiSoatVeReducer = (state = initialState, action:Action) =>{
    switch(action.type){
        case ActionType.ALL_DOISOATVE:{
            // console.log('reducer doi soat ve', action.payload)
            return {...state, doiSoatVeList: action.payload};
        }
        break;
        default:
            return state;
    }
}