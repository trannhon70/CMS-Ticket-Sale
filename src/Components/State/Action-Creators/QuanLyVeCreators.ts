import { ThunkAction } from "redux-thunk";
import firebase, { storeQuanLyVe } from "../../Firebase/Config";
import { Action, QuanLyVe } from "../Actions/QuanLyVeAction";
import { ActionType } from "../Constants/ActionsTypes";
import { State } from "../Reducers";




export const getAllQuanLyVe = (): ThunkAction<
    void,
    State,
    null,
    Action
> => {
    return async (dispatch) => {
        try {
            await storeQuanLyVe.get().then(
                (
                    snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | null>
                ) => {
                    const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
                    const test = data.map((item) => ({
                        ...item
                    }));

                    if (test.length > 0) {
                        const QuanLyVeData = test as QuanLyVe[]
                        //zconsole.log(QuanLyVeData);
                        
                        dispatch({
                            type: ActionType.ALL_QUANLYVE,
                            payload: QuanLyVeData,
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