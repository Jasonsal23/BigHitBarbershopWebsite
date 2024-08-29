import React from 'react'
import { Link } from 'react-router-dom';

export default function footer () {
  return (
    <div className="footer">
        <div className="socials">
          
          <div className="LasVegas">
          <Link to="/lasvegas" className="footer-title"><h4>Las Vegas</h4></Link>
          <a href="https://www.facebook.com/BigHitBarbershopLasVegas?mibextid=LQQJ4d&rdid=sBuHhyLAJ2beWy08&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FAHPKVeGEF9w1ij9Z%2F%3Fmibextid%3DLQQJ4d" target="_blank">Facebook</a>
          <br/>
          <a href="https://www.instagram.com/bighitbarbershop/" target="_blank">Instagram</a>
          </div>
          <div className="Kenosha">
          <Link to="/kenosha" className="footer-title"><h4>Kenosha</h4></Link>
          <a href="https://www.facebook.com/people/Big-Hit-Barber-Shop/100063522822677/" target="_blank">Facebook</a>
          <br />
          <a href="https://www.instagram.com/big_hit_kenosha/" target="_blank">Instagram</a>
          </div>
        </div>
        <br />
        
    </div>
  )
}
