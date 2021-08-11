import React from 'react'
import hero from '../assets/img/hero-img.png'
import hero1 from '../assets/img/about.jpg'
import abt from '../assets/img/features-3.png'
import tab1 from '../assets/img/features-1.png'

export default function LandingContent() {
    return (
        <div>
          <section>     
            <div className="container">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
                  <div>
                    <h1>Auric Finance is a passionate, clever, solution-driven mortgage broker </h1>
           
                    <h2>We listens to your needs and delivers you the right mortgage at the right time at the right price.</h2>
                    
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img" >
                  <img src={hero} className="img-fluid" alt=""/>
                </div>
              </div>
            </div>

          </section>

  <main id="main">

   
    <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6" data-aos="zoom-in">
            <img src={abt} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-contents-center" data-aos="fade-left">
            <div className="content pt-4 pt-lg-0">
              <h3>Learn more about us</h3>
              <p className="font-italic">
              At Auric Finance we are an authentic, customer-focused mortgage broking team and we are all about solutions.
              We are all about delivering the best possible outcome for you by way of a great mortgage.
              </p>
              <ul>
                <li><i className="icofont-check-circled"></i>The Auric Finance team is highly qualified, built upon genuine
                expertise</li>
                <li><i className="icofont-check-circled"></i> We allow you to access funds in lieu of your gold jewellery,ornaments, etc.</li>
                <li><i className="icofont-check-circled"></i>We ensures complete ease and total customer satisfaction when it comes to availing a gold loan</li>
              </ul>
              <p>
              Gone are the days when you had to wait endlessly and bear troublesome process of taking a loan.If you’re looking for an easy and quick way to get financing, Auric Finance Gold loan is just what you’re looking for
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

   
    <section id="features" className="features">
      <div className="container">

        <div className="row">
          <div className="col-lg-6 mt-2 mb-tg-0 order-2 order-lg-1">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item" data-aos="fade-up">
                <a className="nav-link active show" data-toggle="tab" href="#tab-1">
                  <h4>What is gold loan?</h4>
                  <p> the loan is provided against collateral in the form of different types of gold jewellery or gold coins.</p>
                </a>
              </li>
              <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="100">
                <a className="nav-link" data-toggle="tab" href="#tab-2">
                  <h4>Why to choose a gold loan?</h4>
                  <p>Gold loan can be a better choice if you can repay the loan in a shorter duration and also have a lower interest rate..</p>
                </a>
              </li>
              <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="200">
                <a className="nav-link" data-toggle="tab" href="#tab-3">
                  <h4>Gold loan Features</h4>
                  <p>An investment, worthy of its name, gold comes in handy when one requires instant funds</p>
                </a>
              </li>
              <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="300">
                <a className="nav-link" data-toggle="tab" href="#tab-4">
                  <h4>Things To Know</h4>
                  <p>Gold loans tenure are usually short, ranging from a period of 1 year to a maximum of 2 years</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <figure>
                  <img src="../assets/img/features-1.png" alt="" className="img-fluid"/>
                  <img src={tab1} className="img-fluid" alt=""/>
                </figure>
              </div>
              <div className="tab-pane" id="tab-2">
                <figure>
                  <img src="../assets/img/features-2.png" alt="" className="img-fluid"/>
                  <img src={tab1} className="img-fluid" alt=""/>
                </figure>
              </div>
              <div className="tab-pane" id="tab-3">
                <figure>
                  <img src="../assets/img/features-3.png" alt="" className="img-fluid"/>
                  <img src={tab1} className="img-fluid" alt=""/>
                </figure>
              </div>
              <div className="tab-pane" id="tab-4">
                <figure>
                  <img src="../assets/img/features-4.png" alt="" className="img-fluid"/>
                  <img src={tab1} className="img-fluid" alt=""/>
                </figure>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>  Gold loans by Auric Finance allow you to access funds in lieu of your gold jewellery, ornaments, etc. If you are unable to get credit from banking channels or are unable to get the exact amount you need, a gold loan is the easiest way to meet your financial needs...</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
            <div className="icon-box icon-box-pink">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href="">GOLD LOAN SCHEMES</a></h4>
              <p className="description">Star Ultimate Loan, Delight Loan, Super Saver Scheme, Advantage Loan</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box icon-box-cyan">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="">EMI SCHEMES</a></h4>
              <p className="description">Designed for EMI payments,Loan Amount: Starting at ₹20,000</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box icon-box-green">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="">QUICK LOAN</a></h4>
              <p className="description">Loan approval in 5 minutes.loan disbursal in 30 minutes</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box icon-box-blue">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="">ONE PERCENT LOAN</a></h4>
              <p className="description">Small loans at low interest rates.Loan Amount: ₹1,500 to ₹50,000</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="cta" className="cta">
      <div className="container">

        <div className="row" data-aos="zoom-in">
          <div className="col-lg-9 text-center text-lg-left">
            <h3>Gold loan calculator</h3>
            <p>  Get a loan at attractive rates with minimum documentation. Use this Gold Loan Calculator, to work out your EMIs and tenure.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">Eligibility calculator</a>
          </div>
        </div>

      </div>
    </section>

  

    <section id="faq" className="faq">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>

        <ul className="faq-list">
          
          
          <li data-aos="fade-up" data-aos-delay="100">
            <a data-toggle="collapse" href="#faq2" className="collapsed">What is the eligibility criterion to qualify for a gold loan?  <i className="icofont-simple-up"></i></a>
            <div id="faq2" className="collapse show" data-parent=".faq-list">
             
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="100">
            <a data-toggle="collapse" href="#faq2" className="collapsed"> How long does it take to complete the gold loan approval process? <i className="icofont-simple-up"></i></a>
            <div id="faq2" className="collapse show" data-parent=".faq-list">
             
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="200">
            <a data-toggle="collapse" href="#faq3" className="collapsed">What is the repayment tenure of a gold loan?  <i className="icofont-simple-up"></i></a>
            <div id="faq3" className="collapse show" data-parent=".faq-list">
             
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="300">
            <a data-toggle="collapse" href="#faq4" className="collapsed">Are there any foreclosure charges on a gold loan? <i className="icofont-simple-up"></i></a>
            <div id="faq4" className="collapse show" data-parent=".faq-list">
             
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="400">
            <a data-toggle="collapse" href="#faq5" className="collapsed">How can the pledged gold against the loan be reclaimed? <i className="icofont-simple-up"></i></a>
            <div id="faq5" className="collapse show" data-parent=".faq-list">
            
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="500">
            <a data-toggle="collapse" href="#faq6" className="collapsed">What medium should I use to repay the loan? <i className="icofont-simple-up"></i></a>
            <div id="faq6" className="collapse show" data-parent=".faq-list">
             
            </div>
          </li>

        </ul>

      </div>
    </section>

   
    <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-right">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>Chennai</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>Auricfinance@gmail.com</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>044-24262589</p>
              </div>

             
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-left">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label >Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label >Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <label >Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

  </main>
  </div>

    )
}

