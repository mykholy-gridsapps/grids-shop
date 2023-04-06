import { useState } from 'react';

import SideMenuDropdown from '../SideMenuDropdown/SideMenuDropdown';

import cls from './sideMenuOne.module.scss';

const SideMenuOne = () => {
  const [openDropdown, setOpenDropdown] = useState('')

  return (
    <div className={cls.sideMenuOne}>
      <div className={cls.link}>
        <i className="fa-light fa-desktop"></i>
      </div>
      <div className={cls.link} onMouseOver={() => setOpenDropdown('1')} onMouseLeave={() => setOpenDropdown('0')}>
        <i className="fa-light fa-camera-retro"></i>
        <div className={[cls.dropdown, openDropdown === '1' ? cls.opened : ''].join(' ')}>
          <SideMenuDropdown />
        </div>
      </div>
      <div className={cls.link} onMouseOver={() => setOpenDropdown('2')} onMouseLeave={() => setOpenDropdown('0')}>
        <i className="fa-light fa-camera-polaroid"></i>
        <div className={[cls.dropdown, openDropdown === '2' ? cls.opened : ''].join(' ')}>
          <SideMenuDropdown />
        </div>
      </div>
      <div className={cls.link}>
        <i className="fa-sharp fa-light fa-tennis-ball"></i>
      </div>
      <div className={cls.link}>
        <i className="fa-sharp fa-light fa-cart-shopping"></i>
      </div>
      <div className={cls.link}>
        <i className="fa-light fa-heart"></i>
      </div>
      <div className={cls.link}>
        <i className="fa-sharp fa-light fa-loveseat"></i>
      </div>
      <div className={cls.link}>
        <i className="fa-sharp fa-light fa-basket-shopping-simple"></i>
      </div>
    </div>
  )
}

export default SideMenuOne
