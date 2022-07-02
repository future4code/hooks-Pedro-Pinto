import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListTripPage from "../pages/ListTripsPage";
import AdminHomePage from "../pages/AdminHomePage"
import TripDetailsPage from "../pages/TripDetailsPage"
import LoginPage from "../pages/LoginPage";
import CreateTripPage from "../pages/CreateTripPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/trips/list" element={<ListTripPage/>}/>
                <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
                <Route path="/admin/trips/:id" element={<TripDetailsPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin/trips/create" element={<CreateTripPage/>}/>
                <Route path="/trips/application" element={<ApplicationFormPage/>}/>
                </Routes>
        </BrowserRouter>
            )
        }

export default Router;

