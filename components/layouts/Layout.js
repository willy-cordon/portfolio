import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Head from 'next/head';


const Layout = ({children}) => {
    return (
        <div>
            <Head>
					 <link href="assets/css/style.css" rel="stylesheet" />
				</Head>
            <Navbar></Navbar>
                {children}
            {/* <Footer></Footer> */}
        </div>
    )
}

export default Layout
