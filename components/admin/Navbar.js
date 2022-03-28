import React from 'react'
import Link from 'next/link'

const navbar = () => {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
            <Link href="/dashboard">
                <a className="sidebar-brand brand-logo " style={{color:"white !important"}}  href="../../index.html"><span>DEVELOPER</span></a>
            </Link>
            <Link href="/dashboard">
          <a className="sidebar-brand brand-logo-mini" href="../../index.html"><img src="assets/img/w.png" alt="logo" /></a>
          </Link>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src="assets/img/cort.jpg" alt="" />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">Willy Cordon</h5>
                  <span>Admin</span>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">Menu</span>
          </li>
          <li class="nav-item menu-items">
            <a class="nav-link" data-toggle="collapse" href="#blog" aria-expanded="false" aria-controls="blog">
              <span class="menu-icon">
                <i class="mdi mdi-laptop"></i>
              </span>
              <span class="menu-title">Blog</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="blog">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                        <Link href="/form_post">                           
                            <a class="nav-link" href="pages/ui-features/buttons.html">Create Post</a>
                       </Link>
                </li>
              </ul>
            </div>
          </li>
          
          <li class="nav-item menu-items">
            <a class="nav-link" data-toggle="collapse" href="#portfolio" aria-expanded="false" aria-controls="portfolio">
              <span class="menu-icon">
                <i class="mdi mdi-laptop"></i>
              </span>
              <span class="menu-title">Portfolio</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="portfolio">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> 
                <Link href="/form_portfolio">
                     <a class="nav-link" href="pages/ui-features/buttons.html">Crear entrada portfolio</a>
                </Link>
                </li>
              </ul>
            </div>
          </li>
          {/* <li className="nav-item menu-items">
            <a className="nav-link" href="../../pages/tables/basic-table.html">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title">Tables</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="../../pages/charts/chartjs.html">
              <span className="menu-icon">
                <i className="mdi mdi-chart-bar"></i>
              </span>
              <span className="menu-title">Charts</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="../../pages/icons/mdi.html">
              <span className="menu-icon">
                <i className="mdi mdi-contacts"></i>
              </span>
              <span className="menu-title">Icons</span>
            </a>
          </li> */}
         
         
        </ul>
      </nav>
    )
}

export default navbar