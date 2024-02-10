import "../css/FooterApp.css";

function FooterApp() {
  return (
    <div className="contenedor2 d-flex flex-column">
      <footer className="py-3 mt-auto d-flex flex-wrap justify-content-between align-items-center border-top color w-100">
        <div className="col-md-4 d-flex align-items-center text-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-white">ZetaDev & Leonel © 2023 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#twitter"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default FooterApp;