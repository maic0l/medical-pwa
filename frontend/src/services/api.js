import axios from 'axios';

// URL base del backend (Python/FastAPI) - se ajustará cuando el backend esté disponible
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- Autenticación ---
export const loginUser = async (credentials) => {
  // return api.post('/auth/login', credentials);
  console.log('Simulando login con:', credentials);
  return { data: { token: 'mock-token', user: { name: 'Paciente Demo' } } };
};

export const registerUser = async (userData) => {
  // return api.post('/auth/register', userData);
  console.log('Simulando registro con:', userData);
  return { data: { success: true } };
};

// --- Especialidades ---
export const getSpecialties = async () => {
  // return api.get('/specialties');
  return {
    data: [
      { id: 1, name: 'Medicina General', icon: 'bi-heart-pulse' },
      { id: 2, name: 'Pediatría', icon: 'bi-emoji-smile' },
      { id: 3, name: 'Odontología', icon: 'bi-emoji-laughing' },
      { id: 4, name: 'Ginecología', icon: 'bi-gender-female' },
    ],
  };
};

// --- Citas ---
export const createAppointment = async (appointmentData) => {
  // return api.post('/appointments', appointmentData);
  console.log('Simulando creación de cita:', appointmentData);
  return { data: { success: true, id: Date.now() } };
};

export const getMyAppointments = async () => {
  // return api.get('/appointments/me');
  return {
    data: [
      { id: 1, doctor: 'Dra. Ana Gómez', specialty: 'Medicina General', date: '2025-06-10', time: '09:00' },
      { id: 2, doctor: 'Dr. Luis Pérez', specialty: 'Pediatría', date: '2025-06-15', time: '14:30' },
    ],
  };
};

export default api;