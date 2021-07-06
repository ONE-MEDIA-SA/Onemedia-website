import { Link } from "react-router-dom"

export const Tab = (props) => {
    return (
        <section id="tabs" className="tabs">
        <div className="container" data-aos="fade-up">
  
          <ul className="nav nav-tabs row d-flex">
            <li className="nav-item col-3">
              <a className="nav-link active show" data-toggle="tab" href="#tab-1">
                <i className="ri-gps-line"></i>
                {/* <i className="fab fa-chrome"></i> */}
                <h4 className="d-none d-lg-block">Websites</h4>
              </a>
            </li>
            <li className="nav-item col-3">
              <a className="nav-link" data-toggle="tab" href="#tab-2">
                <i className="ri-body-scan-line"></i>
                <h4 className="d-none d-lg-block">Aplicativos</h4>
              </a>
            </li>
            <li className="nav-item col-3">
              <a className="nav-link" data-toggle="tab" href="#tab-3">
                <i className="ri-sun-line"></i>
                <h4 className="d-none d-lg-block">Flyers</h4>
              </a>
            </li>
            <li className="nav-item col-3">
              <a className="nav-link" data-toggle="tab" href="#tab-4">
                <i className="ri-store-line"></i>
                <h4 className="d-none d-lg-block">Publicidade</h4>
              </a>
            </li>
          </ul>
  
          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                  <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                  <ul>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                
                   <Link to="/request_budget" className="btn btn-primary" >Solicitar Orçamento</Link>
                
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                  <img src="assets/img/tabs-1.jpg" alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                  {/* <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p> */}
                  <ul>
                  <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui.</li>
                   
                  </ul>

                  <button className="btn btn-primary">Solicitar Orçamento</button>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/tabs-2.jpg" alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                  <ul>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                  </ul>
                  {/* <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p> */}
                   <button className="btn btn-primary">Solicitar Orçamento</button>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/tabs-3.jpg" alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-4">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                  {/* <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p> */}
                  <ul>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                  </ul>
                  <button className="btn btn-primary">Solicitar Orçamento</button>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/tabs-4.jpg" alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    )
}