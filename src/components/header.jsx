export const Header = (props) => {
    return (
        <header id="header" className="fixed-top">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-10 d-flex align-items-center">
                <h1 className="logo mr-auto"><a href="index.html">Onemedia<span>.</span></a></h1>
                {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                {/* <!-- <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt=""></a>--> */}
      
                <nav className="nav-menu d-none d-lg-block">
                  <ul>
                    <li className="active"><a href="#header">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                
                    <li><a href="blog.html">Pacotes</a></li>
                    {/* <li className="drop-down"><a href="">Drop Down</a>
                      <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="drop-down"><a href="#">Deep Drop Down</a>
                          <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                      </ul>
                    </li> */}
                    <li><a href="#contact">Contacto</a></li>
                  </ul>
                </nav>
                {/* .nav-menu */}
      
                <a href="#about" className="get-started-btn scrollto">Minha conta</a>
              </div>
            </div>
      
          </div>
        </header>
    )
}