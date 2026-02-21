import React from 'react'

const Contact = () => {

    return (
        <div>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contacto</h2>
                    </div>

                    <div className="row mt-1">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="icofont-google-map"></i>
                                    <h4>Ubicación:</h4>
                                    <p>Buenos Aires, Argentina</p>
                                </div>

                                <div className="email">
                                    <i className="icofont-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>willy.cordon93@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="icofont-phone"></i>
                                    <h4>Celular:</h4>
                                    <p>+54 11 6459-5061</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" data-rule="minlen:4" data-msg="Ingresá al menos 4 caracteres" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Ingresá un email válido" />
                                        <div className="validate"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Ingresá al menos 8 caracteres" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Escribí tu mensaje" placeholder="Mensaje"></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Enviando...</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Tu mensaje fue enviado. ¡Gracias!</div>
                                </div>
                                <div className="text-center"><button type="submit">Enviar mensaje</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact
