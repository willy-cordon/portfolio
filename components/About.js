import React from 'react'

const About = () => {
    return (
        <div> 
            <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>About</h2>
                <p> Hola mi nombre es Willy Cordon, soy un desarrollador web Full Stack, apasionado por la tegnologia, pasion que me llevo a estar en este mundo de la programacion ya hace mas de 3 años </p>
                </div>

                <div className="row">
                <div className="col-lg-4">
                    <img src="assets/img/asset.svg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Full Stack Web Developer.</h3>
                        {/* <p className="font-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p> */}
                    <div className="row">
                    <div className="col-lg-6">
                        <ul>
                        <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 5 de junio 1993</li>
                        <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> willycordon.dev</li>
                        <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +54 1164595061</li>
                        <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Buenos Aires - Argentina</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                        <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 27</li>
                        <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li>
                        <li><i className="icofont-rounded-right"></i> <strong>PhEmailone:</strong> willy.cordon93@gmail.com</li>
                        <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Disponible</li>
                        </ul>
                    </div>
                    </div>
                    <p>
                    Como desarrollador web, disfruto usar mi obsesiva atención a los detalles, mi amor inequívoco por hacer cosas y mi ética de trabajo impulsada por la misión para literalmente cambiar el mundo. Es por eso que estoy emocionado de tener un gran impacto en una empresa de alto crecimiento.
                    </p>
           
                </div>
                </div>

            </div>
            </section>

            
            <section id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Skills</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row skills-content">

                <div className="col-lg-6">

                    <div className="progress">
                    <span className="skill">HTML <i className="val">100%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">CSS <i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">JavaScript <i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                </div>

                <div className="col-lg-6">

                    <div className="progress">
                    <span className="skill">PHP <i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                    <div className="progress">
                    <span className="skill">Photoshop <i className="val">55%</i></span>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>

                </div>

                </div>

            </div>
            </section>
  
        </div>
    )
}

export default About
