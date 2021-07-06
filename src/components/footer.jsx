export const Footer = (props) => {
    return (
        <footer id="footer">

        <div className="footer-top">
        <div className="container">
            <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Onemedia<span>.</span></h3>  
                <p>
                Av. Emília Daússe, <br/>
                1061. Maputo<br/>
                Moçambique <br/><br/>
                <strong>Phone:</strong> +258 82 3642 642<br/>
                <strong>Email:</strong> comercial@gmail.com<br/>
                </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Sobre</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Serviços</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Portfólio</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Contacto</a></li>
                </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Nossos serviços</h4>
                <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Publicidade</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Relações Públicas</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Produção de Eventos</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Junte-se ao nosso Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                {/* <form action="" method="post">
                <input type="email" name="email"><input type="submit" value="Subscribe" >
                </form> */}
            </div>

            </div>
        </div>
        </div>

        <div className="container d-md-flex py-4">

        <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
            &copy; Copyright <strong><span>Onemedia</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
            
            Designed by <a href="/">Onemedia</a>
            </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
        </div>
    </footer>
    )
}