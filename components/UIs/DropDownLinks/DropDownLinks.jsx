import { useState } from "react";

import Box from "@mui/material/Box";

// STYLES FILES
import cls from "./dropDownLinks.module.scss";


const DropDownLinks = ({ }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = () => {
        setOpenMenu(!openMenu);
    };

    const handleClose = () => {
        setOpenMenu(false);
    };

    return (
        <div className={cls.dropdown}>
            {openMenu && <div className={cls.overlay} onClick={handleClose}></div>}

            <span onClick={handleClick}>Links</span>

            <i className="fa-solid fa-angle-down" onClick={handleClick}></i>

            <Box
                className={`${cls.dropdownMenu} ${openMenu ? cls.show : ""}`}
            >
                <ul>
                    <li><a href="dashboard.html">My Account</a></li>
                    <li><a href="demo1-contact.html">Contact Us</a></li>
                    <li><a href="wishlist.html">My Wishlist</a></li>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="#" class="login-link">Log In</a></li>
                </ul>
            </Box>
        </div>
    );
};

export default DropDownLinks;