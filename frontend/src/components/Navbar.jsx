import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm" aria-label="Navegación principal">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <i className="bi bi-heart-pulse-fill me-2"></i>
          MedApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/specialties">Especialidades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booking">Agendar Cita</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-appointments">Mis Citas</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-light btn-sm ms-lg-2 mt-2 mt-lg-0" to="/login">Ingresar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;