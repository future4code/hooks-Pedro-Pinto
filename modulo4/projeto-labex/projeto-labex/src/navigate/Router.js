import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListTripPage from "../pages/ListTripsPage";
import {AdminHomePage} from "../pages/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage"

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="listTripPage" element={<ListTripPage/>}/>
                <Route path="adminHomePage" element={<AdminHomePage/>}/>
                <Route path="tripDetailsPage" element={<TripDetailsPage/>}/>
                </Routes>
        </BrowserRouter>
            )
        }

export default Router;

