import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './newsletterEighteen.module.scss';
import Link from 'next/link';

const NewsletterEighteen = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.newsletter}>
      <Container maxWidth="xl">
        <span>Hey, How are you!</span>
        <h2>HEY YOU, SIGN UP AND</h2>
        <h2>CONNECT TO TRIPPLE SHOP!</h2>
        <div className={cls.input}>
          <input type="text" placeholder='Email address here...' />
          <button>Subscribe <i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></button>
        </div>
        <p>Will be used in accordance with our <Link href="/">Privacy Policy</Link></p>
        <div className={cls.social}>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-google"></i>
        </div>
      </Container>
    </div>
  )
}

export default NewsletterEighteen;
