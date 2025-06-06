import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import ArtistLayout from "../layouts/ArtistLayout";
import Dashboard from "../pages/Artist/Dashboard";
import Signup from "../pages/Artist/Signup";
import Login from "../pages/Artist/Login";
import Leads from "../pages/Artist/leads";
import LeadsByService from "../pages/Artist/leadsByService";
import Services from "../pages/Artist/Services";
import ViewService from "../pages/Artist/ViewService";
import Wallet from "../pages/Artist/Wallet";
import Profile from "../pages/Artist/Profile";
import Terms from "../pages/Artist/Terms&Condition";
import PrivacyPolicy from "../pages/Artist/PrivacyPolicy";
import Others from "../pages/Artist/Others";

import Review from "../pages/Artist/Review";

import AddService from "../pages/Artist/AddService";
import ArtistVerification from "../pages/Artist/ArtistVerification";


// Private Route component
const PrivateRoute = () => {
    const artistToken = localStorage.getItem("artistToken");
    return artistToken ? <Outlet /> : <Navigate to="/artist/login" replace />;
};

const ArtistRoutes = () => {
    return (
        <Routes>
            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
                <Route element={<ArtistLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/leads" element={<Leads />} />
                    <Route path="/leads/:serviceId" element={<LeadsByService />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/service/:id" element={<ViewService />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/profile" element={<Profile />} />

                    <Route path="/more" element={<Others/>} />
                    <Route path="/reviews-ratings" element={<Review/>} />
                    <Route path="/terms&condition" element={<Terms/>} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

                    <Route path="/add-service" element={<AddService />} />
                    <Route path="/verify" element={<ArtistVerification />} />   

                </Route>
            </Route>

            {/* Public Routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default ArtistRoutes;
