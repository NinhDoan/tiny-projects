/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import './index.css'
import { useDetectOutsideClick } from './useDetectOutsideClick'
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function App() {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const onClick = () => setIsActive(!isActive)

  return (
    <div className='container'>
      <div className='menu-container'>
        <button onClick={onClick} className='menu-trigger'>
          <span>User</span>
          <img
            src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg'
            alt='User avatar'
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? 'active' : 'inactive'}`}
        >
          <ul>
            <li>
              <a href='#'>Messages</a>
            </li>
            <li>
              <a href='#'>Trips</a>
            </li>
            <li>
              <a href='#'>Saved</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
