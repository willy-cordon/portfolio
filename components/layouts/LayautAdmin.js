import React from 'react'
import Navbar from '../admin/Navbar';
import Header from '../admin/Header';
import Main from '../admin/Main';
import Head from 'next/head';


const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="assets_admin/vendors/mdi/css/materialdesignicons.min.css" />
                <link rel="stylesheet" href="assets_admin/vendors/css/vendor.bundle.base.css" />
                <link rel="stylesheet" href="assets_admin/vendors/jvectormap/jquery-jvectormap.css" />
                <link rel="stylesheet" href="assets_admin/vendors/flag-icon-css/css/flag-icon.min.css" />
                <link rel="stylesheet" href="assets_admin/vendors/owl-carousel-2/owl.carousel.min.css" />
                <link rel="stylesheet" href="assets_admin/vendors/owl-carousel-2/owl.theme.default.min.css" />
			    <link href="assets_admin/css/style.css" rel="stylesheet" />
			</Head>
            <div class="container-scroller">
                <Navbar></Navbar>
                <div class="container-fluid page-body-wrapper">
                    <Header></Header>
                    <div class="main-panel">
                        {children}
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Layout
