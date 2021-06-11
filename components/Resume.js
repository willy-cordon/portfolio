import React from 'react'

const Resume = () => {
    return (
        <div>
             
            <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Curriculum</h2>
                <a href="documents/cv.pdf" download="CvWillyCordon"  className="btn btn-outline-primary ">Descargar Curriculum</a>
                {/* <p>Les presento alguno de los datos más destacados de mí cv, el cual se puede descargar</p> */}
                </div>

                <div className="row">
                <div className="col-lg-6">
                    {/* <h3 className="resume-title">Sumary</h3>
                    <div className="resume-item pb-0">
                    <h4>Brandon Johnson</h4>
                    <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                    <ul>
                        <li>Portland par 127,Orlando, FL</li>
                        <li>(123) 456-7891</li>
                        <li>alice.barkley@example.com</li>
                    </ul>
                    </div> */}

                    <h3 className="resume-title">Educacion</h3>
                    <div className="resume-item">
                    <h4>Técnico Superior en Diseño &amp; Programación Web</h4>
                    <h5>2017 - Actualidad</h5>
                    <p><em>Escuela Davinci</em></p>
                    <p>En la escuela davinci Aprendé técnicas para la creación de Páginas Web RESS (Responsive + Server Side Components), y Aplicaciones Móviles (Progressive Web Apps), que te permitirán convertirte en un Desarrollador Web y Mobile experto, capaz de desarrollar front y backend (Full Stack Developer) de páginas atractivas, modernas y funcionales.</p>
                    </div>
                    <div className="resume-item">
                    <h4>Ingles </h4>
                    <h5>2021 - Actualidad</h5>
                    <p><em>Liceo Britanico</em></p>
                    <p>Intensivo de verano Level I</p>
                    </div>
                    <div className="resume-item">
                    <h4>Diseño grafico </h4>
                    <h5>2016 - No continuado</h5>
                    <p><em>U.B.A</em></p>
                    <p>1er año de diseño grafico</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="resume-title">Experiencia Profecional</h3>
                    <div className="resume-item">
                    <h4>SSR Full Stack developer</h4>
                    <h5>2020 - Actualidad</h5>
                    <p><em>Agencia Broobe </em></p>
                    <ul>
                        <li>Desarrollo e implementacion de componentes y modulos para aplicaciones web</li>
                        <li>Desarrollo Servicios y microservicios</li>
                        <li>Desarrollo API</li>
                        <li>Manejo de base de datos MySQL y Postgress </li>
                        <li>Implementacion de proyectos en el servidor Linux</li>
                        <li>Participacion en la arquitectura de proyectos</li>
                    </ul>
                    </div>
                    <div className="resume-item">
                    <h4>Jr Full Stack developer</h4>
                    <h5>2019 - 2020</h5>
                    <p><em>Agencia Onlife</em></p>
                    <ul>
                        <li>Desarrollo e implementacion de componentes y modulos para aplicaciones web</li>
                        <li>Manejo de base datos MySQL y Firebird</li>
                        <li>Implementacion de todos los proyectos en los servidores</li>
                        <li>Contacto con clientes</li>
                        <li>Arquitectura de proyectos</li>
                    </ul>
                    </div>

                    <div className="resume-item">
                    <h4>Jr Full Stack developer</h4>
                    <h5>2018 - 2018</h5>
                    <p><em>Agencia TormaWeb - Mexico</em></p>
                    <ul>
                        <li>Desarrollo de componentes backend y frontend</li>
                        <li>Manejo de base datos MySQL</li>
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
