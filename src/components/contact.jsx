export const Contact = (props) => {
    return (
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Contacto</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
          </div>
  
          <div className="row" data-aos="fade-up" data-aos-delay="100">
  
            <div className="col-lg-6">
  
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bx bx-map"></i>
                    <h3>Nosso endereço</h3>
                    <p>Av. Emília Daússe, 1061. Maputo, Moçambique</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3>Email</h3>
                    <p>comercial@onemedia.com<br/>contacto@onemedia.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call"></i>
                    <h3>Telefone</h3>
                    <p>+258 82 3642 642<br/> </p>
                  </div>
                </div>
              </div>
  
            </div>
  
            <div className="col-lg-6">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="form-row">
                  <div className="col form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Seu nome" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate"></div>
                  </div>
                  <div className="col form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Seu Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Assunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Mensagem"></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
  
          </div>
  
        </div>
      </section>
    )
}