import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import UserDashboard from './pages/Dashboard';
import SearchFlights from './pages/SearchFlights';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';
import FlightOffers from './components/FlightOffers';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Router>
      <Navbar />
        <h1>hi</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      
        <Route path="/search" element={<SearchFlights />} />
        <Route path="/booking/:flightId" element={<BookingPage />} />

      </Routes>
      <FlightOffers />
      < Testimonials/>
      <Footer /> 
    </Router>
  );
}

export default App;

