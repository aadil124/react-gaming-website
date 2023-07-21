import React from 'react'
import latestGame1 from "../../assets/images/latest-game-1.jpg"
import latestGame2 from "../../assets/images/latest-game-2.jpg"
import latestGame3 from "../../assets/images/latest-game-3.jpg"

const LastestGame = () => {
    return (
        <section class="section latest-game" aria-label="latest game">
          <div class="container">

            <p class="section-subtitle">Latest Releases</p>

            <h2 class="h2 section-title">
              Create & <span class="span">Manage</span>
            </h2>

            <ul class="has-scrollbar">

              <li class="scrollbar-item">
                <div class="latest-game-card">

                  <figure class="card-banner img-holder" style={{width: "400" , height: "470"}}>
                    <img src={latestGame1} width="400" height="470" loading="lazy"
                      alt="White Walker Daily" class="img-cover"/>
                  </figure>

                  <div class="card-content">

                    <a href="/" class="card-badge skewBg">Zombie</a>

                    <h3 class="h3">
                      <a href="/" class="card-title">White Walker <span class="span">Daily</span></a>
                    </h3>

                    <p class="card-price">
                      Entry Fee : <span class="span">Free</span>
                    </p>

                  </div>

                </div>
              </li>

              <li class="scrollbar-item">
                <div class="latest-game-card">

                  <figure class="card-banner img-holder" style={{width: "400" , height: "470"}}>
                    <img src={latestGame2} width="400" height="470" loading="lazy"
                      alt="Hunter Killer II" class="img-cover"/>
                  </figure>

                  <div class="card-content">

                    <a href="/" class="card-badge skewBg">Adventure</a>

                    <h3 class="h3">
                      <a href="/" class="card-title">Hunter Killer <span class="span">II</span></a>
                    </h3>

                    <p class="card-price">
                      Entry Fee : <span class="span">$25.00</span>
                    </p>

                  </div>

                </div>
              </li>

              <li class="scrollbar-item">
                <div class="latest-game-card">

                  <figure class="card-banner img-holder" style={{width: "400" , height: "470"}}>
                    <img src={latestGame3} width="400" height="470" loading="lazy"
                      alt="Cyberpunk Daily" class="img-cover"/>
                  </figure>

                  <div class="card-content">

                    <a href="/" class="card-badge skewBg">Action</a>

                    <h3 class="h3">
                      <a href="/" class="card-title">Cyberpunk <span class="span">Daily</span></a>
                    </h3>

                    <p class="card-price">
                      Entry Fee : <span class="span">$25.00</span>
                    </p>

                  </div>

                </div>
              </li>

            </ul>

          </div>
        </section>



    )
}

export default LastestGame