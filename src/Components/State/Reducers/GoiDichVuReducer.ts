import { GoiDichVuList ,Action} from "../Actions/GoiDichVuAction";
import { ActionType } from "../Constants/ActionsTypes";


var initialState: GoiDichVuList ={
    //danh sach goi dich 
    goiDichVuList:[],
}

export const GoiDichVuReducer = (state = initialState, action:Action)=>{
    switch(action.type){
        case ActionType.ALL_GOIDICHVU:{
            //console.log('goi dich vu reducer',action.payload);
            
            return {...state,goiDichVuList: action.payload}
        }
        default:
            return state;
    }
}