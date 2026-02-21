import React from 'react'

const Resume = () => {
    return (
        <div>
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Currículum</h2>
                        <a href="documents/cv.pdf" download="CvWillyCordon" className="btn btn-outline-primary ">Descargar currículum</a>
                        {/* <p>Les presento algunos de los datos más destacados de mi CV, el cual se puede descargar.</p> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            {/* <h3 className="resume-title">Resumen</h3>
                    <div className="resume-item pb-0">
                    <h4>Brandon Johnson</h4>
                    <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                    <ul>
                        <li>Portland par 127,Orlando, FL</li>
                        <li>(123) 456-7891</li>
                        <li>alice.barkley@example.com</li>
                    </ul>
                    </div> */}

                            <h3 className="resume-title">Educación</h3>
                            <div className="resume-item">
                                <h4>Técnico Superior en Diseño &amp; Programación Web</h4>
                                <h5>2017 - Actualidad</h5>
                                <p><em>Escuela Davinci</em></p>
                                <p>En la Escuela Da Vinci aprendí técnicas para la creación de páginas web RESS (Responsive + Server Side Components) y aplicaciones móviles (Progressive Web Apps), que me permiten desarrollarme como Full Stack Developer en frontend y backend de forma moderna y funcional.</p>
                            </div>
                            <div className="resume-item">
                                <h4>Inglés</h4>
                                <h5>2021 - Actualidad</h5>
                                <p><em>Liceo Británico</em></p>
                                <p>Intensivo de verano - Level I</p>
                            </div>
                            <div className="resume-item">
                                <h4>Diseño Gráfico</h4>
                                <h5>2016 - No continuado</h5>
                                <p><em>U.B.A.</em></p>
                                <p>1er año de Diseño Gráfico</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">Experiencia Profesional</h3>
                            <div className="resume-item">
                                <h4>Líder Técnico</h4>
                                <h5>Diciembre 2021 - Actualidad</h5>
                                <p><em>Provincianet</em></p>
                                <ul>
                                    <li>Liderazgo técnico de equipos y proyectos</li>
                                    <li>Desarrollo e implementación de componentes y módulos para aplicaciones web</li>
                                    <li>Desarrollo de servicios y microservicios</li>
                                    <li>Desarrollo de APIs</li>
                                    <li>Manejo de Laravel</li>
                                    <li>Manejo de Vue 2 y Vue 3</li>
                                    <li>Manejo de base de datos MySQL</li>
                                    <li>Scrum</li>
                                    <li>Arquitectura de proyectos</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>SSR Full Stack Developer</h4>
                                <h5>2020 - 2021</h5>
                                <p><em>Agencia Broobe</em></p>
                                <ul>
                                    <li>Desarrollo e implementación de componentes y módulos para aplicaciones web</li>
                                    <li>Desarrollo de servicios y microservicios</li>
                                    <li>Desarrollo de APIs</li>
                                    <li>Manejo de base de datos MySQL y PostgreSQL</li>
                                    <li>Implementación de proyectos en servidores Linux</li>
                                    <li>Participación en la arquitectura de proyectos</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Jr Full Stack Developer</h4>
                                <h5>2019 - 2020</h5>
                                <p><em>Agencia Onlife</em></p>
                                <ul>
                                    <li>Desarrollo e implementación de componentes y módulos para aplicaciones web</li>
                                    <li>Manejo de bases de datos MySQL y Firebird</li>
                                    <li>Implementación de proyectos en servidores</li>
                                    <li>Contacto con clientes</li>
                                    <li>Arquitectura de proyectos</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>Jr Full Stack Developer</h4>
                                <h5>2018 - 2018</h5>
                                <p><em>Agencia TormaWeb - México</em></p>
                                <ul>
                                    <li>Desarrollo de componentes backend y frontend</li>
                                    <li>Manejo de bases de datos MySQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Resume
