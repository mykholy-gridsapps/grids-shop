/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import { useTranslation } from "next-i18next";

import 'swiper/css';
import cls from './sliderFourtyFour.module.scss';

const SliderFourtyFour = () => {
  const [dropDown, setDropDown] = useState(0);
  const { i18n } = useTranslation();

  return (
    <div className={cls.header}>
      <div className={cls.header_wrapper}>

        <Container maxWidth="xxl">

          <Grid container>

            <Grid item lg={3} className={cls.categoriesGrid}>

              <div className={cls.categoriesList}>
                <h6>Explore Categories</h6>
                <ul>

                  <li>
                    <span>Accessories</span>
                    <i className="fa-duotone fa-eye"></i>
                  </li>

                  <li onMouseEnter={() => setDropDown(1)} onMouseLeave={() => setDropDown(0)}>
                    <span>Cameras</span>
                    <i className={`fa-regular fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>

                    {dropDown === 1 &&

                      <div className={`${cls.dropDown} ${cls[i18n.language]}`}>

                        <Grid container>

                          <Grid item lg={6}>

                            <ul>
                              <li>Computers</li>
                              <li>Cases</li>
                              <li>Laptops</li>
                              <li>Mobiles</li>
                              <li>Tv & Audios</li>
                              <li>Samsung</li>
                              <li>Dell</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Thin Laptops</li>
                              <li>Lenovo</li>
                              <li>Acer</li>
                              <li>Panasonic</li>
                              <li>Microsoft</li>
                              <li>Gadgets</li>
                              <li>Store</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Deals</li>
                              <li>Security</li>
                              <li>Headphones</li>
                              <li>Computers</li>
                              <li>Cameras</li>
                              <li>Bikes</li>
                              <li>Software</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <img src="/imgs/products/play.png" alt="productImage" />

                          </Grid>

                        </Grid>

                      </div>

                    }

                  </li>

                  <li>
                    <span>Cameras & Photography</span>
                    <i className="fa-duotone fa-eye"></i>
                  </li>

                  <li onMouseEnter={() => setDropDown(2)} onMouseLeave={() => setDropDown(0)}>
                    <span>Cases</span>
                    <i className={`fa-regular fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>

                    {dropDown === 2 &&

                      <div className={`${cls.dropDown} ${cls[i18n.language]}`}>

                        <Grid container>

                          <Grid item lg={6}>

                            <ul>
                              <li>Computers</li>
                              <li>Cases</li>
                              <li>Laptops</li>
                              <li>Mobiles</li>
                              <li>Tv & Audios</li>
                              <li>Samsung</li>
                              <li>Dell</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Thin Laptops</li>
                              <li>Lenovo</li>
                              <li>Acer</li>
                              <li>Panasonic</li>
                              <li>Microsoft</li>
                              <li>Gadgets</li>
                              <li>Store</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Deals</li>
                              <li>Security</li>
                              <li>Headphones</li>
                              <li>Computers</li>
                              <li>Cameras</li>
                              <li>Bikes</li>
                              <li>Software</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <img src="/imgs/products/laptop.png" alt="productImage" />

                          </Grid>

                        </Grid>

                      </div>

                    }

                  </li>

                  <li>
                    <span>Chargers</span>
                    <i className="fa-duotone fa-eye"></i>
                  </li>

                  <li onMouseEnter={() => setDropDown(3)} onMouseLeave={() => setDropDown(0)}>
                    <span>Computer Cases</span>
                    <i className={`fa-regular fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>

                    {dropDown === 3 &&

                      <div className={`${cls.dropDown} ${cls[i18n.language]}`}>

                        <Grid container>

                          <Grid item lg={6}>

                            <ul>
                              <li>Computers</li>
                              <li>Cases</li>
                              <li>Laptops</li>
                              <li>Mobiles</li>
                              <li>Tv & Audios</li>
                              <li>Samsung</li>
                              <li>Dell</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Thin Laptops</li>
                              <li>Lenovo</li>
                              <li>Acer</li>
                              <li>Panasonic</li>
                              <li>Microsoft</li>
                              <li>Gadgets</li>
                              <li>Store</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Deals</li>
                              <li>Security</li>
                              <li>Headphones</li>
                              <li>Computers</li>
                              <li>Cameras</li>
                              <li>Bikes</li>
                              <li>Software</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <img src="/imgs/products/headphone.png" alt="productImage" />

                          </Grid>

                        </Grid>

                      </div>

                    }
                  </li>

                  <li>
                    <span>Labtops</span>
                    <i className="fa-duotone fa-eye"></i>
                  </li>

                  <li>
                    <span>Bluetooth Speakers</span>
                    <i className="fa-duotone fa-eye"></i>
                  </li>

                  <li onMouseEnter={() => setDropDown(1)} onMouseLeave={() => setDropDown(0)}>
                    <span>Cameras</span>
                    <i className={`fa-regular fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>

                    {dropDown === 1 &&

                      <div className={`${cls.dropDown} ${cls[i18n.language]}`}>

                        <Grid container>

                          <Grid item lg={6}>

                            <ul>
                              <li>Computers</li>
                              <li>Cases</li>
                              <li>Laptops</li>
                              <li>Mobiles</li>
                              <li>Tv & Audios</li>
                              <li>Samsung</li>
                              <li>Dell</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Thin Laptops</li>
                              <li>Lenovo</li>
                              <li>Acer</li>
                              <li>Panasonic</li>
                              <li>Microsoft</li>
                              <li>Gadgets</li>
                              <li>Store</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Deals</li>
                              <li>Security</li>
                              <li>Headphones</li>
                              <li>Computers</li>
                              <li>Cameras</li>
                              <li>Bikes</li>
                              <li>Software</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <img src="/imgs/products/play.png" alt="productImage" />

                          </Grid>

                        </Grid>

                      </div>

                    }

                  </li>

                  <li>
                    <span>Cameras & Photography</span>
                    <i className="fa-duotone fa-eye"></i>
                  </li>

                  <li onMouseEnter={() => setDropDown(2)} onMouseLeave={() => setDropDown(0)}>
                    <span>Cases</span>
                    <i className={`fa-regular fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>

                    {dropDown === 2 &&

                      <div className={`${cls.dropDown} ${cls[i18n.language]}`}>

                        <Grid container>

                          <Grid item lg={6}>

                            <ul>
                              <li>Computers</li>
                              <li>Cases</li>
                              <li>Laptops</li>
                              <li>Mobiles</li>
                              <li>Tv & Audios</li>
                              <li>Samsung</li>
                              <li>Dell</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Thin Laptops</li>
                              <li>Lenovo</li>
                              <li>Acer</li>
                              <li>Panasonic</li>
                              <li>Microsoft</li>
                              <li>Gadgets</li>
                              <li>Store</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Deals</li>
                              <li>Security</li>
                              <li>Headphones</li>
                              <li>Computers</li>
                              <li>Cameras</li>
                              <li>Bikes</li>
                              <li>Software</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <img src="/imgs/products/laptop.png" alt="productImage" />

                          </Grid>

                        </Grid>

                      </div>

                    }

                  </li>

                  <li>
                    <span>Chargers</span>
                    <i className="fa-duotone fa-eye"></i>
                  </li>

                  <li onMouseEnter={() => setDropDown(3)} onMouseLeave={() => setDropDown(0)}>
                    <span>Computer Cases</span>
                    <i className={`fa-regular fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>

                    {dropDown === 3 &&

                      <div className={`${cls.dropDown} ${cls[i18n.language]}`}>

                        <Grid container>

                          <Grid item lg={6}>

                            <ul>
                              <li>Computers</li>
                              <li>Cases</li>
                              <li>Laptops</li>
                              <li>Mobiles</li>
                              <li>Tv & Audios</li>
                              <li>Samsung</li>
                              <li>Dell</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Thin Laptops</li>
                              <li>Lenovo</li>
                              <li>Acer</li>
                              <li>Panasonic</li>
                              <li>Microsoft</li>
                              <li>Gadgets</li>
                              <li>Store</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <ul>
                              <li>Deals</li>
                              <li>Security</li>
                              <li>Headphones</li>
                              <li>Computers</li>
                              <li>Cameras</li>
                              <li>Bikes</li>
                              <li>Software</li>
                            </ul>

                          </Grid>

                          <Grid item lg={6}>

                            <img src="/imgs/products/headphone.png" alt="productImage" />

                          </Grid>

                        </Grid>

                      </div>

                    }
                  </li>

                  <li>
                    <span>Labtops</span>
                    <i className="fa-duotone fa-eye"></i>
                  </li>

                </ul>

              </div>

            </Grid>

            <Grid item xs={12} lg={9}>

              <div className={cls.swiperSide}>
                <Grid container>
                  <Grid item xs={12} lg={9}>
                    <Swiper className={`${cls.header__slider} header__slider`} modules={[Autoplay]}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}>
                      <SwiperSlide className={`${cls.slide} slide`}>
                        <Grid container alignItems="center" spacing={5}>
                          <Grid item xs={12} md={6}>
                            <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                            <h1 className={cls.title}>The New Standard</h1>
                            <p className={cls.price}>$749</p>
                            <div className={cls.btn}>
                              <button>Start Buying</button>
                            </div>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <img src="/imgs/header/Smartwatchess.png" alt="offerImage" />
                          </Grid>
                        </Grid>
                      </SwiperSlide>
                      <SwiperSlide className={`${cls.slide} slide`}>
                        <Grid container alignItems="center">
                          <Grid item xs={12} md={6}>
                            <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                            <h1 className={cls.title}>The New Standard</h1>
                            <p className={cls.price}>$749</p>
                            <div className={cls.btn}>
                              <button>Start Buying</button>
                            </div>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <img src="/imgs/header/Smartphones.png" alt="offerImage" />
                          </Grid>
                        </Grid>
                      </SwiperSlide>
                      <SwiperSlide className={`${cls.slide} slide`}>
                        <Grid container alignItems="center">
                          <Grid item xs={12} md={6}>
                            <h5 className={cls.label}>SHOP WHAT YOU LOVE</h5>
                            <h1 className={cls.title}>The New Standard</h1>
                            <p className={cls.price}>$749</p>
                            <div className={cls.btn}>
                              <button>Start Buying</button>
                            </div>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <img src="/imgs/header/iphone.png" alt="offerImage" />
                          </Grid>
                        </Grid>
                      </SwiperSlide>
                    </Swiper>
                    <div className={cls.downAnnouns}>
                      <Grid container spacing={0.2}>
                        <Grid item xs={12} sm={4} lg={3} xl={12 / 5}>
                          <div className={cls.announs_box}>
                            <img src="/imgs/header/Sounddevice.png" alt="image" />
                            <div className={cls.details}>
                              <h5>Accessories</h5>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={4} lg={3} xl={12 / 5}>
                          <div className={cls.announs_box}>
                            <img src="/imgs/header/annuon3.png" alt="image" />
                            <div className={cls.details}>
                              <h5>Accessories</h5>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={4} lg={3} xl={12 / 5}>
                          <div className={cls.announs_box}>
                            <img src="/imgs/header/headphone.png" alt="image" />
                            <div className={cls.details}>
                              <h5>Accessories</h5>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={4} lg={3} xl={12 / 5}>
                          <div className={cls.announs_box}>
                            <img src="/imgs/header/annuon3.png" alt="image" />
                            <div className={cls.details}>
                              <h5>Accessories</h5>
                            </div>
                          </div>
                        </Grid>

                        <Grid item xs={12} sm={4} lg={3} xl={12 / 5}>
                          <div className={cls.announs_box}>
                            <img src="/imgs/header/headphone.png" alt="image" />
                            <div className={cls.details}>
                              <h5>Accessories</h5>
                            </div>
                          </div>
                        </Grid>

                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <div className={cls.announs}>
                      <div className={`${cls.announs_box} ${cls[i18n.language]}`}>
                        <img src="/imgs/header/Sounddevice.png" alt="image" />
                        <div className={cls.details}>
                          <h6>Catch Big Deals On The Consoles</h6>
                          <span>Shop Now <i class={`fa-solid fa-circle-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></span>
                        </div>
                      </div>
                      <div className={`${cls.announs_box} ${cls[i18n.language]}`}>
                        <img src="/imgs/header/Sounddevice.png" alt="image" />
                        <div className={cls.details}>
                          <h6>Catch Big Deals On The Consoles</h6>
                          <span>Shop Now <i class={`fa-solid fa-circle-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></span>
                        </div>
                      </div>
                      <div className={`${cls.announs_box} ${cls[i18n.language]}`}>
                        <img src="/imgs/header/Sounddevice.png" alt="image" />
                        <div className={cls.details}>
                          <h6>Catch Big Deals On The Consoles</h6>
                          <span>Shop Now <i class={`fa-solid fa-circle-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></span>
                        </div>
                      </div>
                      <div className={`${cls.announs_box} ${cls[i18n.language]}`}>
                        <img src="/imgs/header/Sounddevice.png" alt="image" />
                        <div className={cls.details}>
                          <h6>Catch Big Deals On The Consoles</h6>
                          <span>Shop Now <i class={`fa-solid fa-circle-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>

            </Grid>

          </Grid>

        </Container>

      </div>

      <Container maxWidth="xxl">
      </Container>
    </div>
  )
}

export default SliderFourtyFour;