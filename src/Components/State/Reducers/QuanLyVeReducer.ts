
import { ActionType } from '../Constants/ActionsTypes';
import { QuanLyVeList,Action } from './../Actions/QuanLyVeAction';
var initialState: QuanLyVeList = {
   
    //danh sach quan ly ve
    quanLyVeList:[],
}
export const  QuanLyVeReducer = (state = initialState, action : Action) =>{
    switch(action.type){
        case ActionType.ALL_QUANLYVE:{
            return {...state, quanLyVeList: action.payload};
        }
        default:
            return state;
    }
}