import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="fw-bold mb-3">Sistema de Citas Médicas</h1>
          <p className="lead text-muted">
            Agenda, consulta y gestiona tus citas médicas desde cualquier
            dispositivo, incluso sin conexión a Internet.
          </p>
          <div className="d-flex gap-2 mt-4">
            <Link to="/booking" className="btn btn-primary btn-lg">
              Agendar Cita
            </Link>
            <Link to="/specialties" className="btn btn-outline-primary btn-lg">
              Ver Especialidades
            </Link>
          </div>
        </div>
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <i className="bi bi-hospital display-1 text-primary" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default Home;