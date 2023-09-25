import { ActivityType } from "../components/activity-planner/types";

export const ACTIONS =  {
    SET_PARTICIPANTS : "SET_PARTICIPANTS",
    SET_PARTICIPANTS_NAME : "SET_PARTICIPANTS_NAME",
    FETCH_ACTIVITIES : "FETCH_ACTIVITIES",
    SET_ACTIVITIES: "SET_ACTIVITIES"
}

export interface AppState {
    noOfParticipants : string;
    actvities: ActivityType[];
    participants: string[];
}