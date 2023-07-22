import React from 'react'
import shopImage1 from "../../assets/images/shop-img-1.jpg"
import shopImage2 from "../../assets/images/shop-img-2.jpg"
import shopImage3 from "../../assets/images/shop-img-3.jpg"
import shopImage4 from "../../assets/images/shop-img-4.jpg"

const Shop = () => {
    return (
        <section class="section shop" id="shop" aria-label="shop"
        style={{backgroundImage: "url('../../assets/images/shop-bg.jpg')"}}>
        <div class="container">

          <h2 class="h2 section-title">
            Gaming Product <span class="span">Corner</span>
          </h2>

          <p class="section-text">
            Compete with 100 players on a remote island for winner takes showdown known issue where certain skin
            strategic
          </p>

          <ul class="has-scrollbar">

            <li class="scrollbar-item">
              <div class="shop-card">

                <figure class="card-banner img-holder" style={{width: "300", height: "260"}}>
                  <img src={shopImage1} width="300" height="260" loading="lazy"
                    alt="Women Black T-Shirt" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <a href="/" class="card-badge skewBg">t-shirt</a>

                  <h3 class="h3">
                    <a href="/" class="card-title">Women Black T-Shirt</a>
                  </h3>

                  <div class="card-wrapper">
                    <p class="card-price">$29.00</p>

                    <button class="card-btn">
                      <ion-icon name="basket"></ion-icon>
                    </button>
                  </div>

                </div>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="shop-card">

                <figure class="card-banner img-holder" style={{width: "300", height: "260"}}>
                  <img src={shopImage2} width="300" height="260" loading="lazy"
                    alt="Gears 5 Xbox Controller" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <a href="/" class="card-badge skewBg">x-box</a>

                  <h3 class="h3">
                    <a href="/" class="card-title">Gears 5 Xbox Controller</a>
                  </h3>

                  <div class="card-wrapper">
                    <p class="card-price">$29.00</p>

                    <button class="card-btn">
                      <ion-icon name="basket"></ion-icon>
                    </button>
                  </div>

                </div>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="shop-card">

                <figure class="card-banner img-holder" style={{width: "300", height: "260"}}>
                  <img src={shopImage3} width="300" height="260" loading="lazy"
                    alt="GeForce RTX 2070" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <a href="/" class="card-badge skewBg">Graphics</a>

                  <h3 class="h3">
                    <a href="/" class="card-title">GeForce RTX 2070</a>
                  </h3>

                  <div class="card-wrapper">
                    <p class="card-price">$29.00</p>

                    <button class="card-btn">
                      <ion-icon name="basket"></ion-icon>
                    </button>
                  </div>

                </div>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="shop-card">

                <figure class="card-banner img-holder" style={{width: "300", height: "260"}}>
                  <img src={shopImage4} width="300" height="260" loading="lazy"
                    alt="Virtual Reality Smiled" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <a href="/" class="card-badge skewBg">VR-Box</a>

                  <h3 class="h3">
                    <a href="/" class="card-title">Virtual Reality Smiled</a>
                  </h3>

                  <div class="card-wrapper">
                    <p class="card-price">$29.00</p>

                    <button class="card-btn">
                      <ion-icon name="basket"></ion-icon>
                    </button>
                  </div>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    )
}

export default Shop