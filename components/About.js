import React from 'react'

const About = () => {
    return (
        <div>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Sobre mí</h2>
                        <p>
                            Hola, mi nombre es Willy Cordon. Soy Desarrollador Web Full Stack y Líder Técnico,
                            apasionado por la tecnología. Esa pasión me llevó a dedicarme de forma profesional y
                            constante a crear soluciones digitales escalables y de calidad.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <img src="assets/img/asset.svg" className="img-fluid" alt="Ilustración de perfil" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>Algunos datos 📄</h3>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Cumpleaños:</strong> 5 de junio</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Web:</strong> willycordon.dev</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Celular:</strong> +54 11 6459-5061</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Ciudad:</strong> Buenos Aires, Argentina</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Edad:</strong> 28</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>E-mail:</strong> willy.cordon93@gmail.com</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Disponible</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Me enfoco en construir productos mantenibles, con buenas prácticas y una fuerte atención
                                al detalle. Disfruto liderar equipos, mejorar procesos y convertir necesidades de negocio
                                en soluciones técnicas concretas.
                            </p>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default About
