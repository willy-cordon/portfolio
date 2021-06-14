import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>

        <meta property="og:type" content="website" />
        <meta property="og:image" itemprop="image primaryImageOfPage" content="assets/img/cort.jpg" />
        <meta property="og:url" content="https://willycordon.vercel.app/" />

       
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TJYD2HCCX7"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-TJYD2HCCX7');
        </script>
        
            <link href="assets/img/favicon.png" rel="icon" />
            <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

            
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

           
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
            <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
            <link href="assets/vendor/venobox/venobox.css" rel="stylesheet" />
            <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
            <link href="assets/vendor/aos/aos.css" rel="stylesheet" />

            
            <link href="assets/css/style.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/thinline.css"></link>
        </Head>
        <body data-mobile-nav-trigger-alignment="right" data-mobile-nav-align="left"   > 
          <Main />
          <NextScript />


          
            <script src="assets/vendor/jquery/jquery.min.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>
            <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
            <script src="assets/vendor/counterup/counterup.min.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="assets/vendor/venobox/venobox.min.js"></script>
            <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
            <script src="assets/vendor/typed.js/typed.min.js"></script>
            <script src="assets/vendor/aos/aos.js"></script>

           
            <script src="assets/js/main.js"></script>
          
        </body>
      </Html>
    )
  }
}

export default MyDocument