import React from 'react'
import featuredGame1 from "../../assets/images/featured-game-1.jpg"
import featuredGame2 from "../../assets/images/featured-game-2.jpg"
import featuredGame3 from "../../assets/images/featured-game-3.jpg"
import featuredGame4 from "../../assets/images/featured-game-4.jpg"
import featuredGameIcon from "../../assets/images/featured-game-icon.png"

const FeaturedGame = () => {
    return (
        <section class="section featured-game" id="features" aria-label="featured game">
        <div class="container">

          <h2 class="h2 section-title">
            All Released <span class="span">Games</span>
          </h2>

          <ul class="has-scrollbar">

            <li class="scrollbar-item">
              <div class="featured-game-card">

                <figure class="card-banner img-holder" style={{width: "450" , height: "600"}}>
                  <img src={featuredGame1} width="450" height="600" loading="lazy"
                    alt="Just for Gamers" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="/" class="card-title" tabindex="-1">
                      Just for <span class="span">Gamers</span>
                    </a>
                  </h3>

                  <span class="card-meta">
                    <ion-icon name="notifications"></ion-icon>

                    <span class="span">Playstation 5, Xbox</span>
                  </span>

                </div>

                <div class="card-content-overlay">

                  <img src={featuredGameIcon} width="36" height="61" loading="lazy" alt=""
                    class="card-icon"/>

                  <h3 class="h3">
                    <a href="/" class="card-title">
                      Just for <span class="span">Gamers</span>
                    </a>
                  </h3>

                  <span class="card-meta">
                    <ion-icon name="notifications"></ion-icon>

                    <span class="span">Playstation 5, Xbox</span>
                  </span>

                </div>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="featured-game-card">

                <figure class="card-banner img-holder" style={{width: "450" , height: "600"}}>
                  <img src={featuredGame2} width="450" height="600" loading="lazy"
                    alt="Need for Speed" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="/" class="card-title" tabindex="-1">
                      Need for <span class="span">Speed</span>
                    </a>
                  </h3>

                  <span class="card-meta">
                    <ion-icon name="notifications"></ion-icon>

                    <span class="span">Playstation 5, Xbox</span>
                  </span>

                </div>

                <div class="card-content-overlay">

                  <img src={featuredGameIcon} width="36" height="61" loading="lazy" alt=""
                    class="card-icon"/>

                  <h3 class="h3">
                    <a href="/" class="card-title">
                      Need for <span class="span">Speed</span>
                    </a>
                  </h3>

                  <span class="card-meta">
                    <ion-icon name="notifications"></ion-icon>

                    <span class="span">Playstation 5, Xbox</span>
                  </span>

                </div>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="featured-game-card">

                <figure class="card-banner img-holder" style={{width: "450" , height: "600"}}>
                  <img src={featuredGame3} width="450" height="600" loading="lazy"
                    alt="Egypt Hunting Gamers" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="/" class="card-title" tabindex="-1">
                      Egypt Hunting <span class="span">Gamers</span>
                    </a>
                  </h3>

                  <span class="card-meta">
                    <ion-icon name="notifications"></ion-icon>

                    <span class="span">Playstation 5, Xbox</span>
                  </span>

                </div>

                <div class="card-content-overlay">

                  <img src={featuredGameIcon} width="36" height="61" loading="lazy" alt=""
                    class="card-icon"/>

                  <h3 class="h3">
                    <a href="/" class="card-title">
                      Egypt Hunting <span class="span">Gamers</span>
                    </a>
                  </h3>

                  <span class="card-meta">
                    <ion-icon name="notifications"></ion-icon>

                    <span class="span">Playstation 5, Xbox</span>
                  </span>

                </div>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="featured-game-card">

                <figure class="card-banner img-holder" style={{width: "450" , height: "600"}}>
                  <img src={featuredGame4} width="450" height="600" loading="lazy"
                    alt="Just for Gamers" class="img-cover"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="/" class="card-title" tabindex="-1">
                      Just for <span class="span">Gamers</span>
                    </a>
                  </h3>

                  <span class="card-meta">
                    <ion-icon name="notifications"></ion-icon>

                    <span class="span">Playstation 5, Xbox</span>
                  </span>

                </div>

                <div class="card-content-overlay">

                  <img src={featuredGameIcon} width="36" height="61" loading="lazy" alt=""
                    class="card-icon"/>

                  <h3 class="h3">
                    <a href="/" class="card-title">
                      Just for <span class="span">Gamers</span>
                    </a>
                  </h3>

                  <span class="card-meta">
                    <ion-icon name="notifications"></ion-icon>

                    <span class="span">Playstation 5, Xbox</span>
                  </span>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>


    )
}

export default FeaturedGame