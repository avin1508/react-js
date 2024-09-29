import React from 'react'
import images from '../.././assets/HeroImage.svg'

const Hero = () => {
  return (
    <section>
      <div>
        <h1> read the most important article</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quo temporibus quae, eius modi unde explicabo rem quis consectetur ipsam illum reiciendis commodi voluptatum exercitationem illo quam vitae nisi alias!
        </p>
        <div>
            <div>
                <input type="text" />
            </div>
            <button>search</button>
        </div>
        <div>
            <span>Popular tags</span>
            <ul>
                <li>design</li>
                <li>user Experience</li>
                <li>user interface</li>
            </ul>
        </div>
      </div>
      <div className='hidd'>
        <img src={images} alt="users are reading an article" />
      </div>
    </section>
  )
}

export default Hero
