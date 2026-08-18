import { useEffect, useState } from 'react';
import { getMyAppointments } from '../services/api';

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyAppointments()
      .then((res) => setAppointments(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Mis Citas</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando citas...</span>
          </div>
        </div>
      ) : appointments.length === 0 ? (
        <p className="text-muted">No tienes citas programadas.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">Médico</th>
                <th scope="col">Especialidad</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id}>
                  <td>{a.doctor}</td>
                  <td>{a.specialty}</td>
                  <td>{a.date}</td>
                  <td>{a.time}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-danger">
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyAppointments;