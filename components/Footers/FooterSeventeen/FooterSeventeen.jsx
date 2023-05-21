import Link from 'next/link';

import Container from '@mui/material/Container';

import cls from './footerSeventeen.module.scss';

const FooterSeventeen = () => {
  return (
    <div className={cls.footer}>
      <div className={cls.topPart}>
        <Container maxWidth="xl" className={cls.wrapper}>
          <div className={cls.logo}>
            <img src="/imgs/logos/coloredSmallLogo.png" alt="logo" />
          </div>
          <div className={cls.links}>
            <ul>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          <div className={cls.social}>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </Container>
      </div>

      <Container maxWidth="xl">
        <div className={cls.bottomPart}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, aperiam.</p>
          <div className={cls.methods}>
            <img src="/imgs/payments/payment-paypal.svg" alt="" />
            <img src="/imgs/payments/payment-paypal.svg" alt="" />
            <img src="/imgs/payments/payment-paypal.svg" alt="" />
            <img src="/imgs/payments/payment-paypal.svg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FooterSeventeen
