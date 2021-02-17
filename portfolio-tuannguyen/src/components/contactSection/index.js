import { h } from 'preact'
import style from './style.scss'

const ContactSection = () => {
  return (
    <>
      <div class={style.contact}>
        <div class={style.heading}>
          <h2 class={`heading-section`}>get in touch</h2>
        </div>
        <div class={style.main}>
          <div class={style.content}>content</div>
          <div class={style.info}>info</div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
