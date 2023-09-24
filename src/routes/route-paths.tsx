
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {BasicCard} from "../components/activity-planner/landing-page";
import { Participants } from "../components/activity-planner/participants";
import { Result } from "../components/activity-planner/result";
export const RoutePaths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element= {<BasicCard />}/>
                <Route path="/participants"  element= {<Participants />}/>
                <Route path="/result" element= {<Result />}/>
            </Routes>
        </BrowserRouter>

    )
}