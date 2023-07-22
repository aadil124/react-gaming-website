import React from 'react'
import "../../src/"
import footerBottomImg from "../assets/images/footer-bottom-img.png"

const Footer = () => {
    return (
        <footer class="footer">

            <div class="footer-top">
                <div class="container">

                    <div class="footer-brand">

                        <a href="/" class="logo">Pheixon
                        <p class="footer-text">
                        Its More Than Gaming !!!
                        </p>
                        </a>


                        <ul class="contact-list">

                            <li class="contact-item">
                                <div class="contact-icon">
                                    <ion-icon name="location"></ion-icon>
                                </div>

                                <address class="item-text">
                                    Address : Roshan Bagh Bhiwandi Thane Mumbai
                                </address>
                            </li>

                            <li class="contact-item">
                                <div class="contact-icon">
                                    <ion-icon name="headset"></ion-icon>
                                </div>

                                <a href="/el:+241245654235" class="item-text">Phone : +91 727 645 0124</a>
                            </li>

                            <li class="contact-item">
                                <div class="contact-icon">
                                    <ion-icon name="mail-open"></ion-icon>
                                </div>

                                <a href="/" class="item-text">Email : it.aadil124@gmail.com</a>
                            </li>

                        </ul>

                    </div>

                    <ul class="footer-list">

                        <li>
                            <p class="footer-list-title">Products</p>
                        </li>

                        <li>
                            <a href="/" class="footer-link">Graphics (12)</a>
                        </li>

                        <li>
                            <a href="/" class="footer-link">Backgrounds (19)</a>
                        </li>

                        <li>
                            <a href="/" class="footer-link">Fonts (11)</a>
                        </li>

                        <li>
                            <a href="/" class="footer-link">Music (9)</a>
                        </li>

                        <li>
                            <a href="/" class="footer-link">Photography (3)</a>
                        </li>

                    </ul>

                    <ul class="footer-list">

                        <li>
                            <p class="footer-list-title">Need Help?</p>
                        </li>

                        <li>
                            <a href="/" class="footer-link">Terms & Conditions</a>
                        </li>

                        <li>
                            <a href="/" class="footer-link">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="/" class="footer-link">Refund Policy</a>
                        </li>

                        <li>
                            <a href="/" class="footer-link">Affiliate</a>
                        </li>

                        <li>
                            <a href="/" class="footer-link">Use Cases</a>
                        </li>

                    </ul>

                    <div class="footer-wrapper">

                        <div class="social-wrapper">

                            <p class="footer-list-title">Follow Us</p>

                            <ul class="social-list">

                                <li>
                                    <a href="/" class="social-link" style={{ backgroundColor: "#3b5998" }}>
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="/" class="social-link" style={{ backgroundColor: "#55acee" }}>
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="/" class="social-link" style={{ backgroundColor: "#d71e18" }}>
                                        <ion-icon name="logo-pinterest"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="/" class="social-link" style={{ backgroundColor: "#1565c0" }}>
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>

                            </ul>

                        </div>

                        <div class="footer-newsletter">

                            <p class="footer-list-title">Newsletter Sign Up</p>

                            <form action="" class="footer-newsletter">
                                <input type="email" name="email_address" aria-label="email" placeholder="Enter your email" required
                                    class="email-field" />

                                <button type="submit" class="footer-btn" aria-label="submit">
                                    <ion-icon name="rocket"></ion-icon>
                                </button>
                            </form>

                        </div>

                    </div>

                </div>
            </div>

            <div class="footer-bottom">
                <div class="container">

                    <p class="copyright">
                        &copy; 2023 Pheixon. All Right Reserved by codewithadil
                    </p>

                    <img src={footerBottomImg} width="340" height="21" loading="lazy" alt=""
                        class="footer-bottom-img" />

                </div>
            </div>
            {/* <!--- #BACK TO TOP--> */}
            <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
                <ion-icon name="caret-up"></ion-icon>
            </a>
        </footer>


    )
}

export default Footer