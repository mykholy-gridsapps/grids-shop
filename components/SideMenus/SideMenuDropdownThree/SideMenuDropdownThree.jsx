import SaleTwentyFour from '../../Sale/SaleTwentyFour/SaleTwentyFour';
import SaleTwentyThree from '../../Sale/SaleTwentyThree/SaleTwentyThree';

import cls from './sideMenuDropdownThree.module.scss';

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
          <SaleTwentyFour />
          <SaleTwentyFour />
        </div>
      </div>
    </div>
  )
}

export default SideMenuDropdown
