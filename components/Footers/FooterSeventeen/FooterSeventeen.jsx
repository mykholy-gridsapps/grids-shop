import Container from '@mui/material/Container';

import cls from './footerSeventeen.module.scss';

const FooterSeventeen = () => {
  return (
    <div className={cls.footer}>
      <div className={cls.topPart}>
        <Container maxWidth="xl" className={cls.wrapper}>
          <div className={cls.logo}>
            <img src="/imgs/logos/smallColoredLogo.png" alt="logo" />
          </div>
          <div className={cls.links}>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className={cls.social}>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-facebook-f"></i>
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
