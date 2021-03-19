import { h } from 'preact'
import style from './style.scss'
import { config } from '../../../site.config'

const Main = () => {
  return (
    <>
      <div class={style.main}>
        <ul class={style.main__list}>
          {config.mainSection.map((photo) =>
          {
            return <li class={style.main__items}>
              <img class={style.main__photo} src={photo.src} />
            </li>
          })}

        </ul>
      </div>
    </>
  )
}

export default Main
