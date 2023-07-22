import React from 'react'
import liveMatchPlayer1 from "../../assets/images/live-match-player-1.png"
import liveMatchPlayer2 from "../../assets/images/live-match-player-2.png"
import liveMatchBanner from "../../assets/images/live-match-banner.jpg"
const LiveMatch = () => {
    return (
        <section class="section live-match" id="live" aria-label="live match">
          <div class="container">

            <h2 class="h2 section-title">
              Watch Live <span class="span">Match</span>
            </h2>

            <figure class="live-match-banner img-holder" style={{width: "800" ,  height: "470"}}>

              <img src={liveMatchBanner} width="800" height="470" loading="lazy"
                alt="Live Match Video" class="img-cover"/>

              <button class="play-btn" aria-label="play video">
                <ion-icon name="play"></ion-icon>
              </button>

            </figure>

            <div class="live-match-player">

              <figure class="player player-1 img-holder" style={{width: "406" ,  height: "277"}}>
                <img src={liveMatchPlayer1} width="406" height="277" loading="lazy"
                  alt="tokyo eagle" class="w-100"/>
              </figure>

              <div class="live-match-detail">

                <p class="live-match-subtitle">Upcoming Live Matches</p>

                <time class="live-match-time" datetime="08:30">08:30</time>

              </div>

              <figure class="player player-2 img-holder" style={{width: "400" ,  height: "305"}}>
                <img src={liveMatchPlayer2} width="400" height="305" loading="lazy"
                  alt="new york hunter7" class="w-100"/>
              </figure>

            </div>

          </div>
        </section>
    )
}

export default LiveMatch