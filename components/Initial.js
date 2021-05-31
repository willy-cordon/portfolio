import React from 'react'

const Initial = () => {
    return (
        <div>
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1 className="text-white">Willy Cordon</h1>
                <p className="text-white">I'm <span className="typed" data-typed-items="Developer, Frelancer, Freelancer"></span></p>
                <div className="social-links">
                    <a href="#" className="twitter text-white"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook text-white"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram text-white"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus text-white"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin text-white"><i className="bx bxl-linkedin"></i></a>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Initial
