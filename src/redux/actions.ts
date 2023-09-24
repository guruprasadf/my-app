import { action } from "typesafe-actions";
import { ACTIONS } from "./types";
export const setParticipantsAction = (payload:any) => action(ACTIONS.SET_PARTICIPANTS, payload);
export const setParticipantsNameAction = (payload:any) => action(ACTIONS.SET_PARTICIPANTS_NAME, payload);
export const fetchActivities = (payload:any) => action(ACTIONS.FETCH_ACTIVITIES, payload);
export const setActivities = (payload:any) => action(ACTIONS.SET_ACTIVITIES, payload);