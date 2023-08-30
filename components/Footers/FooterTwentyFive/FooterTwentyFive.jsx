/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useTranslation } from "next-i18next";

import cls from "./footerTwentyFive.module.scss";

const FooterTwentyFive = () => {
  const { t, i18n } = useTranslation('nav');
  const router = useRouter();

  return (
    <div className={cls.footer}>
      <div className={cls.footer__top}>
        <Container maxWidth="xxl">
          <div className={cls.footer__top_wrapper}>
            <h5>
              <i className="fa-light fa-paper-plane-top"></i>{" "}
              Sign up to Newsletter ...and receive $20 coupon for first shopping
            </h5>

            <div
              className={`${cls.navbar__search__searchArea} ${cls.rounded} ${cls[i18n.language]
                }`}
            >
              <input type="text" placeholder="Enter Email Address" />

              <button>
                SignUp
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Container maxWidth="xxl">
        <div className={cls.footer__columns}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <div className={cls.logoArea}>
                <Link href="/">
                  <img
                    className={cls.bigImage}
                    src="./imgs/logos/coloredLogo.png"
                    alt="tripple-shop-logo"
                  />
                </Link>

                <div>
                  <h6>Contact</h6>
                  <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>

                <div className={cls.footer__columns_links}>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-whatsapp"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <div className={cls.footerPart}>
                <h4>Will Find</h4>
                <ul>
                  <li>Laptops & Computers</li>
                  <li>Cameras & Photography</li>
                  <li>Smart Phones & Tablets</li>
                  <li>Video Games & Consoles</li>
                  <li>TV & Audio</li>
                  <li>Gadgets</li>
                  <li>Waterproof Headphones</li>
                </ul>
              </div>
              <div className={cls.mobileAccordion}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <p>Will Find</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>Laptops & Computers</li>
                      <li>Cameras & Photography</li>
                      <li>Smart Phones & Tablets</li>
                      <li>Video Games & Consoles</li>
                      <li>TV & Audio</li>
                      <li>Gadgets</li>
                      <li>Waterproof Headphones</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <p>Usefull Links</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        <Link href="/wishlist">wishlist</Link>
                      </li>
                      <li>
                        <Link href="/about">about</Link>
                      </li>
                      <li>
                        <Link href="/contact">contact</Link>
                      </li>
                      <li>
                        <Link href="/policy">policy</Link>
                      </li>
                      <li>
                        <Link href="/faq">faqs</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <p>Care</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>My Account</li>
                      <li>Track your Order</li>
                      <li>Customer Service</li>
                      <li>Returns/Exchange</li>
                      <li>FAQs</li>
                      <li>Product Support</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3} className={cls.footerPart}>
              <h5></h5>
              <ul>
                <li>
                  <Link href="/wishlist">wishlist</Link>
                </li>
                <li>
                  <Link href="/about">about</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
                <li>
                  <Link href="/policy">policy</Link>
                </li>
                <li>
                  <Link href="/faq">faqs</Link>
                </li>
              </ul>
            </Grid>

            <Grid item xs={12} sm={6} md={2} className={cls.footerPart}>
              <h4>Customer Care</h4>
              <ul>
                <li>My Account</li>
                <li>Track your Order</li>
                <li>Customer Service</li>
                <li>Returns/Exchange</li>
                <li>FAQs</li>
                <li>Product Support</li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </Container>

      <div className={cls.footer__bottom}>
        <Container maxWidth="xxl" className={cls.footer__bottom_wrapper}>
          <span>© Tripple shop - All Rights Reserved</span>

          <img
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/patment-icon1.png"
            alt="image"
          />
        </Container>
      </div>
    </div>
  );
};

export default FooterTwentyFive;
