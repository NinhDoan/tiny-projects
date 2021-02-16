import { h } from 'preact'
import style from './style.scss'

const SkillsSection = () => {
  return (
    <>
      <div class={style.skills}>
        <h2 class={`heading-section`}>My skills</h2>
        <div class={style.skills__content}>
          <p>
            <span>I have a solid understanding on </span>
            <span>HTML, CSS, Javascript</span>
          </p>
          <p>
            <span>Basic knowledge on</span>
            <span>ReactJS, NodeJS</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default SkillsSection
