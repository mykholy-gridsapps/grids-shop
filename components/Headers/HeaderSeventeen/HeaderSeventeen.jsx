import { useState } from "react";

import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';
import LinkDropdown from '../LinkDropdown/LinkDropdown';
import CategoriesSideTwo from "../../CategoriesSide/CategoriesSideTwo/CategoriesSideTwo";
import AnimatedIcons from "./../../UIs/AnimatedIcons/AnimatedIcons";

import { useTranslation } from "next-i18next";

import * as animationData from "../../../public/animated/call2.json";

import cls from './headerSeventeen.module.scss';

const HeaderSeventeen = ({ openCategories }) => {
  const [navDropdown, setNavDropdown] = useState(0);
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.navbar}>
      <TopHeader />
      <MiddleHeader />

      <div className={cls.navbar__main}>
        <div className={`${cls.navbar_mainNav}`}>

          <div className={cls.side}>

            <CategoriesSideTwo open={true} />

            <div className={cls.headerSearchWrapper}>

              <input
                type="search"
                className={cls.formControl}
                placeholder="Search for products..."
                required
              />
              <div className={cls.selectCustom}>
                <select id="cat" name="cat">
                  <option value="">All Categories</option>
                  <option value="4">Fashion</option>
                  <option value="12">- Women</option>
                  <option value="13">- Men</option>
                  <option value="66">- Jewellery</option>
                  <option value="67">- Kids Fashion</option>
                  <option value="5">Electronics</option>
                  <option value="21">- Smart TVs</option>
                  <option value="22">- Cameras</option>
                  <option value="63">- Games</option>
                  <option value="7">Home &amp; Garden</option>
                  <option value="11">Motors</option>
                  <option value="31">- Cars and Trucks</option>
                  <option value="32">- Motorcycles &amp; Powersports</option>
                  <option value="33">- Parts &amp; Accessories</option>
                  <option value="34">- Boats</option>
                  <option value="57">- Auto Tools &amp; Supplies</option>
                </select>
              </div>
              <button className={cls.btn} type="submit">
                <i className="fa-regular fa-magnifying-glass"></i>
              </button>
            </div>

          </div>


          <div className={cls.actions}>

            <div className={cls.contact}>
              <AnimatedIcons animationData={animationData} />
              <div>
                <h6>1900-888</h6>
                <span>24/7 support center</span>
              </div>
            </div>

            <div className={`${cls.cart} ${cls[i18n.language]}`}>
              <i className="fa-light fa-bag-shopping"></i>
              <div>
                <span>$0.00</span>
                <p>0 items</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default HeaderSeventeen;