import React from 'react'

export default function LandingFooter() {
    return (
<footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-12">
            <div className="footer-info">
              <h3>Auric Finance</h3>
              <p>
                No 1st Street <br/>
                Ashok pillar, chennai<br/><br/>
                <strong>Phone:</strong>044-24262589<br/>
                <strong>Email:</strong> Auricfinance@gmail.com<br/>
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Auricfinance</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
      
      </div>
    </div>
  </footer>
    )
}
