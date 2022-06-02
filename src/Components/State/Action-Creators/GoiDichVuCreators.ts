import { ThunkAction } from "redux-thunk";
import firebase,{ storeGoiDichVu } from "../../Firebase/Config";
import { Action, GoiDichVu } from "../Actions/GoiDichVuAction";
import { ActionType } from "../Constants/ActionsTypes";
import { State } from "../Reducers";



export const getAllGoiDichVu = (): ThunkAction<
void,
State,
null,
Action
> => {
return async (dispatch) => {
    try {
        await storeGoiDichVu.get().then(
            (
                snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | null>
            ) => {
                const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
                const test = data.map((item) => ({
                    ...item
                }));

                if (test.length > 0) {
                    const GoiDichVuData = test as GoiDichVu[]
                     //console.log('goi dich vu', GoiDichVuData);

                   
                    dispatch({
                        type: ActionType.ALL_GOIDICHVU,
                        payload: GoiDichVuData
                    })
                }
            }
        )
            .catch((err) => console.log(err));
    } catch (err) {
        console.log(err);
    }
};
};