import React from 'react'
import _ from "lodash"
import { Link, useNavigate } from "react-router-dom";
import './case2.css'


function Case2() {

    return (
        <div>
            <div className="page-wrapper">
                {/* START PRELOADER */}
                <div className="atf-preloader">
                    <div className="atf-status">
                        <div className="atf-status-mes" />
                    </div>
                </div>
                {/* END PRELOADER */}
                {/* START back-to-top */}
                <button className="atf-scroll-top atf-back-to-top" data-targets="html">
                    <i className="fa fa-angle-up atf-scrollup-icon" />
                </button>
                {/* END back-to-top*/}
                {/* START NAVBAR */}
                <header>
                    <nav className="navbar navbar-navs navbar-expend navbar-expand-md fixed-top" id="menu-top">
                        <div className="container">
                            <img class="imgclass" src="https://cdn.pixabay.com/photo/2018/03/28/04/02/logo-3268177_1280.png"></img>

                            <a className="navbar-brand" href="index.html">ATA KARİYER</a>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                                <span />
                                <span />
                                <span />
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarDefault">
                                <ul className="navbar-nav ml-auto">
                                    <li className="menu-nav"><a className="nav-link page-scroll active" href="#home">Anasayfa
                                    </a></li>
                                    <li className="menu-nav"><a className="nav-link page-scroll" href="#about">HAKKIMIZDA</a></li>
                                    <li className="menu-nav"><a className="nav-link page-scroll" href="#agency-team">Dersler ve EĞİTİMLERİMİZ</a></li>
                                    <li className="menu-nav"><a className="nav-link page-scroll" href="#service">KAYIT ve Kampanya
                                    </a></li>
                                    <li className="menu-nav"><a className="nav-link page-scroll" href="#gallery">GALERİ</a></li>
                                    <li className="menu-nav"><a className="nav-link page-scroll" href="#portfolio">Puan Hesaplama Robotu</a></li>

                                </ul>
                            </div>
                        </div> {/*- END CONTAINER */}
                    </nav>
                </header>



                {/* END NAVBAR */}
                {/* START HOME */}
                <section id="home" className="atf-header-area atf-align-items-details imageBg" data-stellar-background-ratio="0.3" >
                    <div className="container">
                        <div className="row atf-content-details align-items-center justify-content-center">
                            {/*LEFT COL*/}
                            <div className="col-xl-8 col-lg-7 col-12 atf-single-details text-center">
                                <h2 className="mb-0 d-block d-lg-block text-uppercase">
                                    ERKEN KAYIT DÖNEMİ BAŞLADI</h2>
                                <p className>
                                    Avantajlarımızdan yararlanmak için acele edin</p>
                                {/* Main-btn */}
                                <div className="atf-main-btn mt-3">
                                    <a href="https://www.templatemonster.com/landing-page-template/al-muhsi-multipurpose-landing-page-template-146026.html?_gl=1*1by1iar*_ga*MjgyMDU4MjUuMTYwODA1MDMzOQ..*_ga_FTPYEGT5LY*MTYwODA1NjEyNC4yLjEuMTYwODA1OTY1MS40OQ..&_ga=2.60495085.1397003643.1608056135-28205825.1608050339" className="page-scroll atf-themes-btn">Bize Ulaşın <i className="fa fa-angle-right" /></a>
                                </div>
                            </div>{/*- END COL */}
                        </div>{/*- END ROW */}
                    </div>{/*- END CONTAINER */}
                </section>
                {/* END HOME */}
                {/* START ABOUT */}
                <section id="about" className="atf-section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="atf-section-title text-center wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
                                    <h2 className>EĞİTİM KURUMUMUZA HOŞGELDİNİZ !</h2>
                                    <div className="animated-line" />
                                </div>
                            </div>{/*- END COL */}
                        </div>{/*- END ROW */}
                        <div className="row clearfix">
                            <div className="comment-widgets m-b-20">
                                <div className="d-flex flex-row comment-row">
                                    <div className="p-2"><span className="round"><img src="https://i.imgur.com/uIgDDDd.jpg" alt="user" width={50} /></span></div>
                                    <div className="comment-text w-100">
                                        <h5>Engin Tarhan</h5>
                                        <div className="comment-footer">
                                            <span className="date">April 14, 2019</span>
                                            <span className="label label-info">Pending</span> <span className="action-icons">
                                                <a href="#" data-abc="true"><i className="fa fa-pencil" /></a>
                                                <a href="#" data-abc="true"><i className="fa fa-rotate-right" /></a>
                                                <a href="#" data-abc="true"><i className="fa fa-heart" /></a>
                                            </span>
                                        </div>
                                        <p className="m-b-5 m-t-10">Iki sene önce büyük oğlumu, şimdi  de küçüğünü aynı kuruma gönderiyorum. Şu ana kadar ki izlenimlerimize göre cok memnun kaldık. Gerek eğitim öğretim kalitesi, gerekse de eğitmenlerin çocuklara hem bir öğretmen hem de birer arkadaş gibi yaklaşıyor olmaları güzel. Herkese tavsiye ediyorum. Teşekkürler</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row comment-row ">
                                    <div className="p-2"><span className="round"><img src="https://i.imgur.com/tT8rjKC.jpg" alt="user" width={50} /></span></div>
                                    <div className="comment-text active w-100">
                                        <h5>Hakan Altan</h5>
                                        <div className="comment-footer">
                                            <span className="date">March 13, 2020</span>
                                            <span className="label label-success">Approved</span> <span className="action-icons active">
                                                <a href="#" data-abc="true"><i className="fa fa-pencil" /></a>
                                                <a href="#" data-abc="true"><i className="fa fa-rotate-right text-success" /></a>
                                                <a href="#" data-abc="true"><i className="fa fa-heart text-danger" /></a>
                                            </span>
                                        </div>
                                        <p className="m-b-5 m-t-10">Guvenilir bir kurum gozunuz arkada kalmasin.tesekkur ederiz ogretmenlerimize</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row comment-row">
                                    <div className="p-2"><span className="round"><img src="https://i.imgur.com/cAdLHeY.jpg" alt="user" width={50} /></span></div>
                                    <div className="comment-text w-100">
                                        <h5>Esila Manangöz</h5>
                                        <div className="comment-footer">
                                            <span className="date">Jan 20, 2020</span>
                                            <span className="label label-danger">Rejected</span> <span className="action-icons">
                                                <a href="#" data-abc="true"><i className="fa fa-pencil" /></a>
                                                <a href="#" data-abc="true"><i className="fa fa-rotate-right" /></a>
                                                <a href="#" data-abc="true"><i className="fa fa-heart" /></a>
                                            </span>
                                        </div>
                                        <p className="m-b-5 m-t-10">Pandeminin ardından bu yıl tedirgin başlamıştık ata kariyer sayesinde özellikle Melike öğretmenimizin hakkını ödeyemeyiz  onun sayesinde    çok güzel bir dönem geçirdik ve önümüzdeki yıl içinde tekrar  ata kariyerde devam etme kararı aldık iyiki yolumuz düşmüş ve ata kariyer ailesine katılmışız💐💐</p>
                                    </div>
                                </div>

                            </div>

                        </div>{/*- END ROW */}



                    </div>{/*- END CONTAINER */}
                </section>
                {/* END ABOUT */}
                {/* START PROMOTION  */}
                {/* <section className="atf-promo-offer atf-align-items-details" data-stellar-background-ratio="0.3" style={{ backgroundImage: 'url(assets/img/bg/agency.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="text-center col-xl-8 col-lg-8 col-12 text-center">
                                <div className="atf-promo-content">
                                    <h3>Pro Version is Available.</h3>
                                    <a href="https://www.templatemonster.com/landing-page-template/al-muhsi-multipurpose-landing-page-template-146026.html?_gl=1*1by1iar*_ga*MjgyMDU4MjUuMTYwODA1MDMzOQ..*_ga_FTPYEGT5LY*MTYwODA1NjEyNC4yLjEuMTYwODA1OTY1MS40OQ..&_ga=2.60495085.1397003643.1608056135-28205825.1608050339" className="atf-themes-btn">Download Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* END PROMOTION */}
                {/* START COMPANY BRAND LOGO  */}
                {/* <div id="atf-brand-area" className="atf-brand-area atf-section-padding">
                    <div className="atf-brand-overlay">
                        <div className="container">
                            <div className="row clearfix">
                                <div className="col-md-12 col-lg-12">
                                    <div className="atf-brand-active owl-carousel">
                                        <a href="#"><img src="../../public/assets/img/partner/1.png" alt="image" /></a>
                                        <a href="#"><img src="assets/img/partner/2.png" alt="image" /></a>
                                        <a href="#"><img src="assets/img/partner/3.png" alt="image" /></a>
                                        <a href="#"><img src="assets/img/partner/4.png" alt="image" /></a>
                                        <a href="#"><img src="assets/img/partner/5.png" alt="image" /></a>
                                        <a href="#"><img src="assets/img/partner/1.png" alt="image" /></a>
                                        <a href="#"><img src="assets/img/partner/2.png" alt="image" /></a>
                                        <a href="#"><img src="assets/img/partner/3.png" alt="image" /></a>
                                        <a href="#"><img src="assets/img/partner/4.png" alt="image" /></a>
                                        <a href="#"><img src="assets/img/partner/5.png" alt="image" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* END COMPANY BRAND LOGO */}
                {/* START TESTIMONIAL DESIGN */}
                <section id="testimonial" className="atf-testimonial-area atf-section-padding testimonial">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="atf-section-title text-center wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
                                    <h2 className="color-w">GEÇMİŞ BAŞARILARIMIZ !</h2>
                                    <div className="animated-line" />
                                </div>
                            </div>{/*- END COL */}
                        </div>{/*- END ROW */}
                        <div className="row clearfix">
                            <div className="col-lg-3 col-12 col-md-6 atf-main-about text-center">
                                <div className="atf-about-content wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s" data-wow-offset={0}>
                                    <div className="atf-single-about">
                                        {/* <div className="atf-about-number">01</div> */}
                                        <div className="atf-about-icon text-center"><img src="https://i.imgur.com/cAdLHeY.jpg" alt="user" width={200} /></div>
                                        <div className="atf-about-text">
                                            <h3>High Quilty Theme</h3>
                                            <p className='color-w'>Türkiye 1.si</p>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*- END COL */}
                            <div className="col-lg-3 col-md-6 col-12  atf-main-about text-center">
                                <div className="atf-about-content wow fadeIn" data-wow-duration="3s" data-wow-delay="0.5s" data-wow-offset={0}>
                                    <div className="atf-single-about">
                                        {/* <div className="atf-about-number">02</div> */}
                                        <div className="atf-about-icon text-center"><img src="https://i.imgur.com/uIgDDDd.jpg" alt="user" width={200} /></div>
                                        <div className="atf-about-text">
                                            <h3>Retina Ready</h3>
                                            <p className='color-w'>Türkiye 2.si</p>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*- END COL */}
                            <div className="col-lg-3 col-12 col-md-6 atf-main-about text-center">
                                <div className="atf-about-content wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                                    <div className="atf-single-about">
                                        {/* <div className="atf-about-number">03</div> */}
                                        <div className="atf-about-icon text-center"><img src="https://i.imgur.com/tT8rjKC.jpg" alt="user" width={200} /></div>
                                        <div className="atf-about-text">
                                            <h3>Clean Code</h3>
                                            <p className='color-w'>Türkiye 3.sü</p>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*- END COL */}


                            <div className="col-lg-3 col-12 col-md-6 atf-main-about text-center">
                                <div className="atf-about-content wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                                    <div className="atf-single-about">
                                        {/* <div className="atf-about-number">03</div> */}
                                        <div className="atf-about-icon text-center"><img src="https://i.imgur.com/tT8rjKC.jpg" alt="user" width={200} /></div>
                                        <div className="atf-about-text">
                                            <h3>Clean Code</h3>
                                            <p className='color-w'>Türkiye 5.si</p>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*- END COL */}
                        </div>{/*- END ROW */}
                    </div>{/*- END CONTAINER */}
                </section>
                {/* END TESTIMONIAL DESIGN */}
                {/* START NEWSLETTER */}
                {/* <section className="atf-newsletter atf-section-padding">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-md-8 col-lg-8 offset-lg-2 offset-md-2 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                                <div className="atf-mailchamp-headding mb-4">
                                    <h2>Pro Version is Available</h2>
                                </div>
                                <div className="atf-mailchamp-subscribe">
                                    <form className="form-group" id="mc-form">
                                        <input type="email" name="email" className="form-control" id="email" placeholder="Your Email" required="required" />
                                        <button type="submit" id="subscribe-button" className="btn"><i className="fab fa-telegram-plane" /></button>
                                        
                                        <br />
                                        <label className="atf-subscription-label" htmlFor="email" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* END NEWSLETTER */}
                {/* CONTACT SECTION START*/}
                <section id="contact" className="atf-contact-area atf-section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="atf-contact-info wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                                    <div className="atf-section-title">
                                        <h2>İLETİŞİM BİLGİLERİ</h2>
                                        <p>Bilgi, soru ve görüşleriniz için bizimle iletişime geçebilirsiniz. </p>
                                    </div>
                                    <div className="atf-contact-details">
                                        <i className="fa fa-home" />
                                        <h4>Adres</h4>
                                        <p>Ata mahallesi. Mavi Yildiz caddesi. 11-E blok. No: 21-22 Yenimahalle/Ankara</p>
                                    </div>
                                    <div className="atf-contact-details">
                                        <i className="fa fa-phone" />
                                        <h4>Telefon</h4>
                                        <p> (0312) 502 41 01</p>
                                    </div>
                                    <div className="atf-contact-details">
                                        <i className="fa fa-envelope" />
                                        <h4>Email Adres</h4>
                                        <p>info@mysite.com</p>
                                    </div>
                                </div>{/*- END CONTACT */}
                            </div>{/*- END COL */}
                            <div className="col-lg-6 col-12 my-auto mx-auto">
                                <div className="contact wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                                    <div id="atf-map-area">
                                        <iframe style={{ border: 0 }} src="https://maps.google.com/maps?width=100%25&hl=tr&q=Ata%20Kariyer%20Etüt,%20Susuz,%20Maviyıldız%20Cd,%2006105%20Yenimahalle/Ankara&t=&z=14&ie=UTF8&iwloc=B&output=embed" allowFullScreen />
                                    </div>
                                </div>
                            </div>{/* END COL */}
                        </div>{/*- END ROW */}
                    </div>{/*- END CONTAINER */}
                </section>
                {/* CONTACT SECTION END*/}
                {/* Google Map start*/}
                {/* <div id="atf-map-area">
                    <iframe style={{ border: 0 }} src="https://www.google.com/maps/dir//Susuz,+Ata+Kariyer+Et%C3%BCt,+Maviy%C4%B1ld%C4%B1z+Caddesi,+Yenimahalle%2FAnkara/@40.001387,32.530567,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d3311f0e038995:0x65e9a718a912cf56!2m2!1d32.6006422!2d40.0013914" allowFullScreen />
                </div> */}
                {/* Google Map end */}
                {/* FOOTER SECTION START*/}
                <footer className="atf-footer-area">
                    <div className="container">
                        <div className="atf-footer-top mt-5">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 atf-footer-link wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
                                    <div className="atf-footer-box">
                                        
                                        <h5><a href>ATA KARİYER</a></h5>
                                        <p>Tüm görüşleriniz ve fikirleriniz için teşekkür ederiz.</p>
                                        <h4 className="mt-2 text-white">Bizi takip et!</h4>
                                        <div className="atf-footer-social-icon mt-3">
                                            <a href="#" className="icon"> <i className="fab fa-facebook" /> </a>
                                            <a href="#" className="icon"> <i className="fab fa-dribbble" /> </a>
                                            <a href="#" className="icon"> <i className="fab fa-behance" /> </a>
                                            <a href="#" className="icon"> <i className="fab fa-linkedin" /> </a>
                                            <a href="#" className="icon"> <i className="fab fa-twitter" /> </a>
                                        </div>
                                    </div>
                                </div>{/*- END COL */}
                                <div className="col-lg-2 col-md-6 col-12 atf-footer-link wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                                    <h5>
                                        HIZLI ERİŞİM</h5>
                                    <ul className="atf-list-menu">
                                        <li> <a href="#"><i className="fas fa-caret-right mr-2" />Anasayfa</a></li>
                                        <li> <a href="#"><i className="fas fa-caret-right mr-2" />Hakkımızda</a></li>
                                        <li> <a href="#"><i className="fas fa-caret-right mr-2" />Dersler ve Eğitimlerimiz</a></li>
                                        <li> <a href="#"><i className="fas fa-caret-right mr-2" />Kayıt ve Kampanya</a></li>
                                        <li> <a href="#"><i className="fas fa-caret-right mr-2" />Galeri</a></li>
                                    </ul>
                                </div>{/*- END COL */}
                                <div className="col-lg-2 col-md-6 col-12 atf-footer-link wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset={0}>
                                    <h5>
                                        BİZE ULAŞIN</h5>
                                    <ul className="atf-list-menu">
                                        <li><a href="#"><i className="fas fa-caret-right mr-2" />Ata mahallesi. Mavi Yildiz caddesi. 11-E blok. No: 21-22 Yenimahalle/Ankara</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right mr-2" />Tel: (0312) 502 41 01</a></li>
                                        <li><a href="#"><i className="fas fa-caret-right mr-2" />info@mysite.com</a></li>
                                    </ul>
                                </div>{/*- END COL */}
                                <div className="col-lg-4 col-md-6 col-12 atf-footer-link wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s" data-wow-offset={0}>
                                    <h5>Payment Method</h5>
                                    <p> Kurslarımızın gelişimi için tüm paydaşlarımızın yenilikçi fikirlerini değerlendiriyor ve hayata geçiriyoruz. Tüm görüşleriniz ve fikirleriniz için teşekkür ederiz.</p>
                                    {/* <div className="atf-payment-link mt-4">
                                        <a href><img src="assets/img/client/payment.png" alt="payment" /></a>
                                        <a href><img src="assets/img/client/payment.png" alt="payment" /></a>
                                        <a href><img src="assets/img/client/payment.png" alt="payment" /></a>
                                        <a href><img src="assets/img/client/payment.png" alt="payment" /></a>
                                    </div> */}
                                </div>{/*- END COL */}
                            </div>{/*- END ROW */}
                        </div>{/*- END SINGLE FOOTER */}
                    </div>{/*- END CONTAINER */}
                    <div className="atf-footer-boottom text-center mt-4">
                        <div className="row">
                            <div className="col-md-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
                                <p>©Copyright -  2023 Ata Kariyer Eğitim Merkezi. </p>
                            </div>{/*- END COL */}
                        </div>{/*- END ROW */}
                    </div>
                    {/* FOOTER SECTION END*/}
                </footer>{/*- END FOOTER */}
            </div>
        </div>



    );
}

export default Case2;
