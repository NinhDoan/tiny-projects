import { h } from 'preact'
import style from './style.scss'

const HeroSection = () =>
{
  return (
    <>
      <div class={style.hero}>
        <h1 class={`style.hero__heading margin-bottom-medium`}>
          <span>I'm Tuan Nguyen</span>
          <span>A Developer</span>
        </h1>
        <p class={`style.hero__sub margin-bottom-medium`}>
          <span>
            My full name is Nguyen Minh Tuan, I work as a front-end developer
            and also keen on design and marketing,
          </span>
          <span>
            I love working and learning new front-end technologies to build
            customer-centric & blazing fast websites.
          </span>
        </p>
        <button>download my cv</button>
      </div>
    </>
  )
}

export default HeroSection