import { ACTIONS } from "./types";
import { all } from "@redux-saga/core/effects";
import { plannerSaga} from "./saga";

const initialState = {
    noOfParticipants : "",
    actvities : [],
    participants : []
}

export const ActionsReducer = (state = initialState , action:any) => {
    switch(action.type){
        case ACTIONS.SET_PARTICIPANTS : {
            let {payload} = action ;
             return { ...state, noOfParticipants : payload} ;
        }
        case ACTIONS.SET_PARTICIPANTS_NAME : {
            let {payload} = action ;
            let { name , index} = payload;
            const participants:any = [...state.participants];
            participants[index] = name;
             return { ...state, participants : participants} ;
        }
        case ACTIONS.SET_ACTIVITIES : {
            let {payload} = action ;
            const _activities = normalizeActivities(payload);
             return { ...state, actvities : _activities} ;
        }
        default :
            return { ...state }; 
    }
}

export function* rootSaga() {
    const configuration :any= [
        ...plannerSaga
    ];
    const tasks = [];
    for (const config of configuration){
        tasks.push(config.method(config.type, config.function))
    }

    yield all(tasks);
}
export default ActionsReducer;

const normalizeActivities = (activities:any) => {
    return activities?.sort((a:any, b:any)=> a?.price - b?.price)
}