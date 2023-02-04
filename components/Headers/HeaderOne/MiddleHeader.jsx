/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import cls from "./middleHeader.module.scss";

const MiddleHeader = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <div className={[cls.headerMiddle, cls.textDark].join(" ")}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={2} className={cls.headerLeft} sx={{ pr: "10px" }}>
            <Box
              component="button"
              className={cls.mobileMenuToggler}
              sx={{ display: { lg: "none", xs: "block" }, mr: "5px" }}
              type="button"
            >
              <i className="fas fa-bars"></i>
            </Box>
            <a href="demo1.html" className="logo">
              <img
                src="./imgs/logos/logo.png"
                width="111"
                height="44"
                alt="Porto Logo"
              />
            </a>
          </Grid>

          <Grid className={cls.headerRight} lg={10}>
            <div
              className={[
                cls.headerSearch,
                cls.headerIcon,
                cls.headerSearchInline,
                cls.headerSearchCategory,
              ].join(" ")}
            >
              <a
                href="#"
                onClick={() => setToggleSearch(!toggleSearch)}
                className={[
                  cls.searchToggle,
                  `${toggleSearch ? cls.show : ""}`,
                ].join(" ")}
                role="button"
              >
                <i></i>
              </a>
              <form action="#" method="get">
                <div
                  className={[
                    cls.headerSearchWrapper,
                    `${toggleSearch ? cls.show : ""}`,
                  ].join(" ")}
                >
                  <input
                    type="search"
                    className={cls.formControl}
                    name="q"
                    id="q"
                    placeholder="Search..."
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
                      <option value="32">
                        - Motorcycles &amp; Powersports
                      </option>
                      <option value="33">- Parts &amp; Accessories</option>
                      <option value="34">- Boats</option>
                      <option value="57">- Auto Tools &amp; Supplies</option>
                    </select>
                  </div>
                  <button className={cls.btn} type="submit">
                    <i></i>
                  </button>
                </div>
              </form>
            </div>

            <div className={cls.headerContact}>
              <i className={cls.iconPhone}></i>
              <h6>
                Call us now<a href="tel:#">+123 5678 890</a>
              </h6>
            </div>

            <a
              href="login.html"
              className={[cls.headerIcon, cls.headerIconUser].join(" ")}
            >
              <i></i>
            </a>

            <a
              href="wishlist.html"
              className={[cls.headerIcon, cls.iconWishlist].join(" ")}
            >
              <i></i>
            </a>

            <div className={cls.cartDropdown}>
              <a
                href="#"
                title="Cart"
                className={cls.cartToggle}
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i className={cls.minicartIcon}></i>
                <span className={cls.badgeCircle}>3</span>
              </a>

              {/* <div className="cart-overlay"></div>

                            <div className="dropdown-menu mobile-cart">
                                <a href="#" title="Close (Esc)" className="btn-close">×</a>

                                <div className="dropdownmenu-wrapper custom-scrollbar">
                                    <div className="dropdown-cart-header">Shopping Cart</div>

                                    <div className="dropdown-cart-products">
                                        <div className="product">
                                            <div className="product-details">
                                                <h4 className="product-title">
                                                    <a href="demo1-product.html">Ultimate 3D Bluetooth Speaker</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span> × $99.00
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="demo1-product.html" className="product-image">
                                                    <img src="@/assets/images/products/product-1.jpg" alt="product" width="80"
                                                        height="80" />
                                                </a>

                                                <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                                            </figure>
                                        </div>

                                        <div className="product">
                                            <div className="product-details">
                                                <h4 className="product-title">
                                                    <a href="demo1-product.html">Brown Women Casual HandBag</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span> × $35.00
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="demo1-product.html" className="product-image">
                                                    <img src="@/assets/images/products/product-2.jpg" alt="product" width="80"
                                                        height="80" />
                                                </a>

                                                <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                                            </figure>
                                        </div>

                                        <div className="product">
                                            <div className="product-details">
                                                <h4 className="product-title">
                                                    <a href="demo1-product.html">Circled Ultimate 3D Speaker</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span> × $35.00
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="demo1-product.html" className="product-image">
                                                    <img src="@/assets/images/products/product-3.jpg" alt="product" width="80"
                                                        height="80" />
                                                </a>
                                                <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="dropdown-cart-total">
                                        <span>SUBTOTAL:</span>

                                        <span className="cart-total-price float-right">$134.00</span>
                                    </div>

                                    <div className="dropdown-cart-action">
                                        <a href="cart.html" className="btn btn-gray btn-block view-cart">View
                                            Cart</a>
                                        <a href="checkout.html" className="btn btn-dark btn-block">Checkout</a>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* <div className="mobile-menu-overlay"></div>

            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="fa fa-times"></i></span>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu menu-with-icon">
                            <li><a href="demo1.html"><i className="icon-home"></i>Home</a></li>
                            <li>
                                <a href="demo1-shop.html" className="sf-with-ul"><i className="sicon-badge"></i>Categories</a>
                                <ul>
                                    <li><a href="category.html">Full Width Banner</a></li>
                                    <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                                    <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                                    <li><a href="category-sidebar-left.html">Left Sidebar</a></li>
                                    <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                    <li><a href="category-off-canvas.html">Off Canvas Filter</a></li>
                                    <li><a href="category-horizontal-filter1.html">Horizontal Filter 1</a></li>
                                    <li><a href="category-horizontal-filter2.html">Horizontal Filter 2</a></li>
                                    <li><a href="#">List Types</a></li>
                                    <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll<span
                                        className="tip tip-new">New</span></a>
                                    </li>
                                    <li><a href="category.html">3 Columns Products</a></li>
                                    <li><a href="category-4col.html">4 Columns Products</a></li>
                                    <li><a href="category-5col.html">5 Columns Products</a></li>
                                    <li><a href="category-6col.html">6 Columns Products</a></li>
                                    <li><a href="category-7col.html">7 Columns Products</a></li>
                                    <li><a href="category-8col.html">8 Columns Products</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="demo1-product.html" className="sf-with-ul"><i className="sicon-basket"></i>Products</a>
                                <ul>
                                    <li>
                                        <a href="#" className="nolink">PRODUCT PAGES</a>
                                        <ul>
                                            <li><a href="product.html">SIMPLE PRODUCT</a></li>
                                            <li><a href="product-variable.html">VARIABLE PRODUCT</a></li>
                                            <li><a href="product.html">SALE PRODUCT</a></li>
                                            <li><a href="product.html">FEATURED & ON SALE</a></li>
                                            <li><a href="product-sticky-info.html">WIDTH CUSTOM TAB</a></li>
                                            <li><a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a></li>
                                            <li><a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a></li>
                                            <li><a href="product-addcart-sticky.html">ADD CART STICKY</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="nolink">PRODUCT LAYOUTS</a>
                                        <ul>
                                            <li><a href="product-extended-layout.html">EXTENDED LAYOUT</a></li>
                                            <li><a href="product-grid-layout.html">GRID IMAGE</a></li>
                                            <li><a href="product-full-width.html">FULL WIDTH LAYOUT</a></li>
                                            <li><a href="product-sticky-info.html">STICKY INFO</a></li>
                                            <li><a href="product-sticky-both.html">LEFT & RIGHT STICKY</a></li>
                                            <li><a href="product-transparent-image.html">TRANSPARENT IMAGE</a></li>
                                            <li><a href="product-center-vertical.html">CENTER VERTICAL</a></li>
                                            <li><a href="#">BUILD YOUR OWN</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="sf-with-ul"><i className="sicon-envelope"></i>Pages</a>
                                <ul>
                                    <li>
                                        <a href="wishlist.html">Wishlist</a>
                                    </li>
                                    <li>
                                        <a href="cart.html">Shopping Cart</a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="dashboard.html">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="login.html">Login</a>
                                    </li>
                                    <li>
                                        <a href="forgot-password.html">Forgot Password</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="blog.html"><i className="sicon-book-open"></i>Blog</a></li>
                            <li><a href="demo1-about.html"><i className="sicon-users"></i>About Us</a></li>
                        </ul>

                        <ul className="mobile-menu menu-with-icon mt-2 mb-2">
                            <li className="border-0">
                                <a href="#" target="_blank"><i className="sicon-star"></i>Buy Porto!<span
                                    className="tip tip-hot">Hot</span></a>
                            </li>
                        </ul>

                        <ul className="mobile-menu">
                            <li><a href="login.html">My Account</a></li>
                            <li><a href="demo1-contact.html">Contact Us</a></li>
                            <li><a href="wishlist.html">My Wishlist</a></li>
                            <li><a href="#">Site Map</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="login.html" className="login-link">Log In</a></li>
                        </ul>
                    </nav>

                    <form className="search-wrapper mb-2" action="#">
                        <input type="text" className="form-control mb-0" placeholder="Search..." required />
                        <button className="btn icon-search text-white bg-transparent p-0" type="submit"></button>
                    </form>

                    <div className="social-icons">
                        <a href="#" className="social-icon social-facebook icon-facebook" target="_blank">
                        </a>
                        <a href="#" className="social-icon social-twitter icon-twitter" target="_blank">
                        </a>
                        <a href="#" className="social-icon social-instagram icon-instagram" target="_blank">
                        </a>
                    </div>
                </div>
            </div > */}
    </div>
  );
};

export default MiddleHeader;
