// filename: Typing.js
// React version: "^16.12.0"
import React from "react";
// Import the desired words
import words from "./partials/words";
class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
      <>
        <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1 className="text-white">Willy Cordon</h1>
                <p className="text-white">I'm <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        /></p>
                <div className="social-links">
                    <a href="#" className="twitter text-white"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook text-white"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram text-white"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus text-white"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin text-white"><i className="bx bxl-linkedin"></i></a>
                </div>
                </div>
            </section>

        
      </>
    );
  }
}
export default Typing;