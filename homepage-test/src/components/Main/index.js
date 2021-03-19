import { h } from 'preact'
import {useState} from 'preact/hooks'
import style from './style.scss'
import { config } from '../../../site.config'

const Main = () => {

  const [menu, setMenu] = useState(false)
  return (
    <>
      <div class={style.main}>
        <ul class={style.main__list}>
          {config.mainSection.map((photo) =>
          {
            return (
              <li class={style.main__items}>
                <img class={style.main__photo} src={photo.src} />
                <p class={style.main__label}>{photo.label}</p>
              </li>
            ) 
          })}

        </ul>
      </div>
    </>
  )
}

export default Main
