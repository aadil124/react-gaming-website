import React from 'react'

const Navbar = () => {
    return (
        <header class="header">

            {/* <div class="header-top">
                <div class="container">

                    <div class="countdown-text">
                        Exclusive Black Friday ! Offer <span class="span skewBg">10</span> Days
                    </div>

                    <div class="social-wrapper">

                        <p class="social-title">Follow us on :</p>

                        <ul class="social-list">

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-pinterest"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>
            </div> */}

            <div class="header-bottom skewBg" data-header>
                <div class="container">

                    <a href="/" class="logo">Pheixon
                    <p style={{color:"black" , fontSize: "15px"}}>Its More Than Gaming</p>
                    </a>
                    

                    <nav class="navbar" data-navbar>
                        <ul class="navbar-list">

                            <li class="navbar-item">
                                <a href="/home" class="navbar-link skewBg" data-nav-link>Home</a>
                            </li>

                            <li class="navbar-item">
                                <a href="/live" class="navbar-link skewBg" data-nav-link>Live</a>
                            </li>

                            <li class="navbar-item">
                                <a href="/features" class="navbar-link skewBg" data-nav-link>Features</a>
                            </li>

                            <li class="navbar-item">
                                <a href="/shop" class="navbar-link skewBg" data-nav-link>Shop</a>
                            </li>

                            <li class="navbar-item">
                                <a href="/blog" class="navbar-link skewBg" data-nav-link>Blog</a>
                            </li>

                            <li class="navbar-item">
                                <a href="/" class="navbar-link skewBg" data-nav-link>Contact</a>
                            </li>

                        </ul>
                    </nav>

                    <div class="header-actions">

                        <button class="cart-btn" aria-label="cart">
                            <ion-icon name="cart"></ion-icon>

                            <span class="cart-badge">0</span>
                        </button>

                        <button class="search-btn" aria-label="open search" data-search-toggler>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>

                        <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
                            <ion-icon name="menu-outline" class="menu"></ion-icon>
                            <ion-icon name="close-outline" class="close"></ion-icon>
                        </button>

                    </div>

                </div>
            </div>

        </header>


    )
}

export default Navbar