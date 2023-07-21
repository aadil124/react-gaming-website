import React from 'react'
import brand1 from "../../assets/images/brand-1.png"
import brand2 from "../../assets/images/brand-2.png"
import brand3 from "../../assets/images/brand-3.png"
import brand4 from "../../assets/images/brand-4.png"
import brand5 from "../../assets/images/brand-5.png"
import brand6 from "../../assets/images/brand-6.png"

const Brand = () => {
    return (
         <section class="section brand" aria-label="brand">
        <div class="container">

          <ul class="has-scrollbar">

            <li class="brand-item">
              <img src={brand1} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

            <li class="brand-item">
              <img src={brand2} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

            <li class="brand-item">
              <img src={brand3} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

            <li class="brand-item">
              <img src={brand4} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

            <li class="brand-item">
              <img src={brand5} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

            <li class="brand-item">
              <img src={brand6} width="90" height="90" loading="lazy" alt="brand logo"/>
            </li>

          </ul>

        </div>
      </section>

    )
}

export default Brand