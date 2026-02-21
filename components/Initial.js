import React from "react";
import Typed from "react-typed";

const textLines = [
  "Líder Técnico",
  "Full Stack Developer",
  "Laravel Developer",
  "Vue 2 & Vue 3",
  "Freelancer"
];

class Typing extends React.Component {
  render() {
    return (
      <>
        <section id="hero" className="d-flex flex-column justify-content-center">
          <div className="container" data-aos="zoom-in" data-aos-delay="100">
            <h1 className="text-white">Willy Cordon</h1>

            <p>
              <span className="text-white">Soy </span>
              <Typed strings={textLines} typeSpeed={80} />
            </p>
            <div className="social-links">
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/people/Willy-Cordon/100025864328373/" className="facebook text-white"><i className="bx bxl-facebook"></i></a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/willy.cordon/" className="instagram text-white"><i className="bx bxl-instagram"></i></a>
              <a target="_blank" rel="noreferrer" href="https://github.com/willy-cordon" className="github text-white"><i className="bx bxl-github"></i></a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/willycordon93" className="linkedin text-white"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Typing;
