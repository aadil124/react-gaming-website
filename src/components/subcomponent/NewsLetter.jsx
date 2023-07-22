import React from 'react'

const NewsLetter = () => {
    return (
        <section class="newsletter" aria-label="newsletter">
        <div class="container">

          <div class="newsletter-card">

            <h2 class="h2">
              Our <span class="span">Newsletter</span>
            </h2>

            <form action="" class="newsletter-form">

              <div class="input-wrapper skewBg">
                <input type="email" name="email_address" aria-label="email" placeholder="Enter your email..." required
                  class="email-field"/>

                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <button type="submit" class="btn newsletter-btn skewBg">
                <span class="span">Subscribe</span>

                <ion-icon name="paper-plane" aria-hidden="true"></ion-icon>
              </button>

            </form>

          </div>

        </div>
      </section>

    )
}

export default NewsLetter