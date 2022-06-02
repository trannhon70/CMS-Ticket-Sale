import { combineReducers } from "redux"
import { DoiSoatVeReducer } from "./DoiSoatVeReducer"
import { GoiDichVuReducer } from "./GoiDichVuReducer"
import { QuanLyVeReducer } from "./QuanLyVeReducer"

const reducer = combineReducers({
   QuanLyVe: QuanLyVeReducer,
   doiSoatVe: DoiSoatVeReducer,
   goidichvu: GoiDichVuReducer
 
})

export default reducer
export type State = ReturnType<typeof reducer>