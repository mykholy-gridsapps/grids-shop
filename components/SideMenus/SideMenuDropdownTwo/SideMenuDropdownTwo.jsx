import SaleTwentyThree from '../../Sale/SaleTwentyThree/SaleTwentyThree';

import cls from './sideMenuDropdownTwo.module.scss';

const SideMenuDropdown = () => {
  return (
    <div className={cls.sideMenuDropdown}>
      <div className={cls.wrapper}>
        <div className={cls.content}>
          <div>
            <h6>Women's clothes</h6>
            <ul>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
            </ul>
          </div>
          <div>
            <h6>Women's clothes</h6>
            <ul>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
            </ul>
          </div>
          <div>
            <h6>Women's clothes</h6>
            <ul>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
              <li>Dresses</li>
            </ul>
          </div>
        </div>
        <div className={cls.sales}>
          <SaleTwentyThree />
        </div>
      </div>
    </div>
  )
}

export default SideMenuDropdown
