import React from 'react'
import herofood from '../assets/bon-vivant-qom5MPOER-I-unsplash 1.png'
import gplay from '../assets/Google Play Badge.png'
import appstore from '../assets/App Store Badge.png'

import '../nav.css'

const Hero = () => {
  return (
    <section class="sec1">
            <article class="sec1inner">
                <div class="info">
                    <h2>Order <span>food</span> anytime, anywhere</h2>
                    <p>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>
                    <ul>
                        <li><img src={gplay} alt="" /></li>
                        
                        <li><img src={appstore} alt="" /></li>
                    </ul>
                </div>
                <div  class="info-pic">
                    <img src={herofood} alt="" />
                </div>
            </article>
        </section>
  )
}

export default Hero
