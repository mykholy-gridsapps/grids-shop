import { useTranslation } from 'next-i18next';

import cls from './newsLetterSeventeen.module.scss';

const NewsLetterSeventeen = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.newsletter}>
      <h2>Sign up to TRIPPLE SHOP</h2>
      <p>It only takes a second to find out about our latest
        news and promotions...</p>
      <div className={cls.input}>
        <input type="text" placeholder='Email address here...' />
        <button>Subscribe <i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></button>
      </div>
      <div className={cls.social}>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-google"></i>
      </div>
    </div>
  )
}

export default NewsLetterSeventeen
