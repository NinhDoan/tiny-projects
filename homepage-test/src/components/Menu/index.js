import { h } from 'preact'
import style from './style.scss'

import {config} from '../../../site.config'

const Menu = () =>
{
  return (
    <>
      <nav class={style.navigation}>
        <ul>
          {config.headerMenu.map((menu) =>
          {
            return (
              <li key={menu.label}>
                <a href={menu.link} target="_blank rel='noopener noreferrer">
                  {menu.label}
                </a>
              </li>
            )
          })}
        </ul>
    </nav>
    </>
  )
}

export default Menu