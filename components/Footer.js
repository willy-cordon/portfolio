import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <h3>Willy Cordon</h3>
                    <p>Desarrollador Full Stack y Líder Técnico especializado en Laravel, Vue 2 y Vue 3.</p>
                    <div className="social-links">
                        <a target="_blank" rel="noreferrer" href="https://github.com/willy-cordon" className="github"><i className="bx bxl-github"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/willycordon93" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/willy.cordon/" className="instagram"><i className="bx bxl-instagram"></i></a>
                    </div>
                    <div className="copyright">
                        &copy; {new Date().getFullYear()} <strong><span>Willy Cordon</span></strong>. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
