import { useState } from 'react';
import { useRouter } from 'next/router';

import LinkDropdown from './../LinkDropdown/LinkDropdown';
import AnimatedIcons from '../../UIs/AnimatedIcons/AnimatedIcons';
import CartDropdown from "../CartDropdown/CartDropdown";
import WishlistDropdown from "../WishlistDropdown/WishlistDropdown";
import BigScreenSearch from '../BigScreenSearch/BigScreenSearch';
import MobSidebar from "../MobSidebar/MobSidebar";

import Tooltip from '@mui/material/Tooltip';

import * as animationData from "../../../public/animated/call3.json";

import { useTranslation } from 'next-i18next';

import cls from './headerEight.module.scss';

const HeaderSix = () => {
    const [navDropdown, setNavDropdown] = useState("");
    const [openSidebar, setOpenSidebar] = useState(false);
    const [openSmallSearch, setOpenSmallSearch] = useState(false)
    const router = useRouter();
    const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.headerEight}>
        <div className={cls.side}>
            <div className={cls.logo}>
                <img src="/imgs/logos/justLogo.png" alt="logoImage" />
                <h5>Tripple Shop</h5>
            </div>
            <ul className={`${cls.navLinks} ${cls[i18n.language]}`}>
                <li
                    onMouseEnter={() => setNavDropdown(1)}
                    onMouseLeave={() => setNavDropdown(0)}
                >
                    <span>
                    {" "}
                    Movies & Games <i className="fa-regular fa-angle-down"></i>
                    </span>

                    {navDropdown === 1 && (
                    <LinkDropdown />
                    )}
                </li>

                <li
                    onMouseEnter={() => setNavDropdown(2)}
                    onMouseLeave={() => setNavDropdown(0)}
                >
                    <span>
                    {" "}
                    Cameras & Accessories{" "}
                    <i className="fa-regular fa-angle-down"></i>
                    </span>

                    {navDropdown === 2 && (
                    <LinkDropdown />
                    )}
                </li>

                <li
                    onMouseEnter={() => setNavDropdown(3)}
                    onMouseLeave={() => setNavDropdown(0)}
                >
                    <span>
                    {" "}
                    GPS & Car <i className="fa-regular fa-angle-down"></i>
                    </span>

                    {navDropdown === 3 && (
                    <LinkDropdown />
                    )}
                </li>

                <li
                    onMouseEnter={() => setNavDropdown(4)}
                    onMouseLeave={() => setNavDropdown(0)}
                >
                    <span>
                    {" "}
                    Electronics <i className="fa-regular fa-angle-down"></i>
                    </span>

                    {navDropdown === 4 && (
                    <LinkDropdown />
                    )}
                </li>

                <li
                    onMouseEnter={() => setNavDropdown(5)}
                    onMouseLeave={() => setNavDropdown(0)}
                >
                    <span>
                    {" "}
                    Tv & Audio <i className="fa-regular fa-angle-down"></i>
                    </span>

                    {navDropdown === 5 && (
                    <LinkDropdown />
                    )}
                </li>
            </ul>
            <div className={[cls.search, cls[i18n.language]].join(" ")} onMouseEnter={() => setOpenSmallSearch(true)} onMouseLeave={() => setOpenSmallSearch(false)}>
                <i className="fa-regular fa-magnifying-glass"></i>

                {openSmallSearch && 
                    <BigScreenSearch setOpenSmallSearch={setOpenSmallSearch} />
                }
            </div>
        </div>
        <div className={cls.actions}>

            <div className={cls.headerContact}>
                <AnimatedIcons animationData={animationData} />
                <div className={cls.contactInfo}>
                    <h6>Live chat on:</h6>
                    <a href="tel:#">+123 5678 890</a>
                </div>
            </div>

            <div className={cls.navbar__main__account}>
                <div className={cls.account}>
                    <Tooltip title="compare" placement="top">
                        <span onClick={() => router.push("/compare")}>
                            <i className="fa-light fa-code-compare"></i>
                        </span>
                    </Tooltip>
                </div>

                <div
                    className={cls.wishlist}
                    onMouseEnter={() => setNavDropdown("wishlist")}
                    onMouseLeave={() => setNavDropdown("")}
                >
                    <Tooltip title="wishlist" placement="top">
                        <span onClick={() => router.push("/wishlist")}>
                            <i className="fa-light fa-heart"></i>
                        </span>
                    </Tooltip>

                    {navDropdown === "wishlist" && <WishlistDropdown />}
                </div>

                <div
                    className={cls.cart}
                    onMouseEnter={() => setNavDropdown("cart")}
                    onMouseLeave={() => setNavDropdown("")}
                >
                    <Tooltip title="Cart" placement="top">
                        <span onClick={() => router.push("/cart")}>
                            <i className="fa-light fa-cart-shopping"></i>{" "}
                            <span>$0.00</span>
                        </span>
                    </Tooltip>

                    {navDropdown === "cart" && <CartDropdown />}
                </div>
                <i
                    className="fa-light fa-grid-2"
                    onClick={() => setOpenSidebar((prev) => !prev)}
                ></i>
            </div>

        </div>

        {/* SMALL SCREEN SIDE BAR */}
        <MobSidebar
            className={openSidebar ? cls.show : cls.hide}
            isOpen={openSidebar}
            closeMobileMenu={setOpenSidebar}
        />
    </div>
  )
}

export default HeaderSix;
