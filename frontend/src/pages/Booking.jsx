import { useEffect, useState } from 'react';
import { getSpecialties, createAppointment } from '../services/api';

function Booking() {
  const [specialties, setSpecialties] = useState([]);
  const [formData, setFormData] = useState({
    specialtyId: '',
    date: '',
    time: '',
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getSpecialties().then((res) => setSpecialties(res.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAppointment(formData);
    setSuccess(true);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="mb-4">Agendar Cita</h2>

              {success && (
                <div className="alert alert-success" role="alert">
                  ¡Tu cita ha sido registrada exitosamente!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="specialtyId" className="form-label">Especialidad</label>
                  <select
                    id="specialtyId"
                    name="specialtyId"
                    className="form-select"
                    value={formData.specialtyId}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona una especialidad</option>
                    {specialties.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Fecha</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">Hora</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="form-control"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Confirmar Cita
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;