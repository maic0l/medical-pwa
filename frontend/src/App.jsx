import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Specialties from './pages/Specialties.jsx';
import Booking from './pages/Booking.jsx';
import MyAppointments from './pages/MyAppointments.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;