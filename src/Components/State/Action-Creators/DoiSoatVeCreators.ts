import { ThunkAction } from "redux-thunk";
import firebase, { storeDoiSoatVe } from "../../Firebase/Config";
import { DoiSoatVe } from "../Actions/DoiSoatVeAction";
import { Action } from "../Actions/DoiSoatVeAction";
import { ActionType } from "../Constants/ActionsTypes";
import { State } from "../Reducers";


export const getAllDoiSoatVe = (): ThunkAction<
    void,
    State,
    null,
    Action
> => {
    return async (dispatch) => {
        try {
            await storeDoiSoatVe.get().then(
                (
                    snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | null>
                ) => {
                    const data = snapshot.docs.map((doc) => ({ ...doc.data() }));
                    const test = data.map((item) => ({
                        ...item
                    }));

                    if (test.length > 0) {
                        const DoiSoatVeData = test as DoiSoatVe[]
                        // console.log('doi soat ve', DoiSoatVeData);

                        // dispatch({
                        //     type: ActionType.ALL_DOISOATVE,
                        //     payload: DoiSoatVeData,
                        // })
                        dispatch({
                            type: ActionType.ALL_DOISOATVE,
                            payload: DoiSoatVeData
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