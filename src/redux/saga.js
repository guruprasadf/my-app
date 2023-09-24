import { ACTIONS } from "./types";
import {takeEvery, put, call } from "redux-saga/effects";
import  axios  from "axios";
import { setActivities } from "./actions";
const getActivities =  (payload) => {
    // const response =  axios.get("https://www.boredapi.com/api/activity", {
    //         params: {
    //             participants : payload
    //         }
    //     });

       // return response;

        const p = new Promise(async (res, rej) => {
            const result = [];
            while(result.length < 5){
                const response = await axios.get("https://www.boredapi.com/api/activity", {
                    params: {
                        participants : payload
                    }
                });
                result.push(response.data)
            }
                res(result) ;
        });
        return p ;
}


export function* fetchActivities ({payload}) {
        // const response = yield axios.get("https://www.boredapi.com/api/activity", {
        //     params: {
        //         participants : payload
        //     }
        // });
        // console.log("response", response.data);
        // yield put(fetchActivities(payload));
        const response = yield getActivities(payload);
        yield put(setActivities(response));
        console.log("response", response);
} 
export const plannerSaga = [
    {
        type : ACTIONS.FETCH_ACTIVITIES,
        function : fetchActivities,
        method : takeEvery
    }
]