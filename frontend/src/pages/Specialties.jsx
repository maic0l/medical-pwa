import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSpecialties } from '../services/api';

function Specialties() {
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSpecialties()
      .then((res) => setSpecialties(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando especialidades...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Especialidades Disponibles</h2>
      <div className="row g-4">
        {specialties.map((item) => (
          <div className="col-sm-6 col-lg-3" key={item.id}>
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <i className={`bi ${item.icon} display-5 text-primary mb-3`} aria-hidden="true"></i>
                <h5 className="card-title">{item.name}</h5>
                <Link to="/booking" className="btn btn-outline-primary btn-sm mt-2">
                  Agendar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specialties;