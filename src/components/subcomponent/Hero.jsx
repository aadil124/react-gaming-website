import React from 'react'
import heroBanner from "../../assets/images/hero-banner.png"

const Hero = () => {
    return (
       <section class="section hero" id="home" aria-label="home"
        style={{backgroundImage: "url('./assets/images/hero-bg.jpg')"}}>
        <div class="container">

          <div class="hero-content">

            <p class="hero-subtitle">World Gaming</p>

            <h1 class="h1 hero-title">
              Create <span class="span">Manage</span> Matches
            </h1>

            <p class="hero-text">
              Find technology or people for digital projects in public sector and Find an individual specialist develope
              researcher.
            </p>

            <button class="btn skewBg">Read More</button>

          </div>

          <figure class="hero-banner img-holder" style={{width: "700" ,height: "700"}}>
            <img src={heroBanner} width="700" height="700" alt="hero banner" class="w-100"/>
          </figure>

        </div>
      </section>


    )
}

export default Hero