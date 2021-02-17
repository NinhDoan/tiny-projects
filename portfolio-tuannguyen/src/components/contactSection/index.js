import { h } from 'preact'
import style from './style.scss'

const ContactSection = () => {
  return (
    <>
      <div class={style.contact}>
        <div class={style.heading} id='contact'>
          <h2 class={`heading-section`}>get in touch</h2>
        </div>
        <div class={style.main}>
          <div class={style.content}>
            Whether you’re trying to build your business for an exit are looking
            for new ways to scale. I’m here to help you and your business grow.{' '}
          </div>
          <div class={style.info}>
            <div class={style.info__title}>
              <p>Follow me</p>
            </div>
            <div class={style.info__icons}>
              <ul class={style.info__icons__list}>
                <li>
                  <a
                    href='https://www.linkedin.com/in/tuan-nguyen-763a2112b/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src='../../assets/logo-linkedin.svg' alt='logo linked' />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/nguyentuan1696/tiny-projects' target='_blank' rel='noreferrer'>
                    <img src='../../assets/logo-github.svg' alt='logo github' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
