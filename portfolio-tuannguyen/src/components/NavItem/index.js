import { h } from 'preact'
import style from './style.scss'

const NavItem = () =>
{
  return (
    <>
      <div class={style.nav}>
        <ul>
          <li><a href=''>Bio</a></li>
          <li><a href=''>Skills</a></li>
          <li><a href='#project'>Projects</a></li>
          <li><a href=''>Contact</a></li>
        </ul>
      </div>
      </>
  )
}

export default NavItem