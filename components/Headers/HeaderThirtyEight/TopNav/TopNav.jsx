import { useRouter } from 'next/router';

import Container from '@mui/material/Container';

import { useTranslation } from 'next-i18next';

import cls from './topNav.module.scss';

const TopNav = () => {
  const { t, i18n } = useTranslation('nav');
  const router = useRouter();

  return (
    <div className={cls.topNav}>
      <Container maxWidth="xxl" className={`${cls.wrapper}`}>
        <div>
          <span>Welcome to tripple</span>
        </div>
        <div className={cls.options}>
          <span><i className="fa-light fa-location-dot"></i> Store</span>
          <span onClick={() => router.push('/track-order')}><i className="fa-light fa-truck"></i> Track</span>
          <span><i className="fa-light fa-bag-shopping"></i> Shop</span>
          <span onClick={() => router.push('/account')}><i className="fa-light fa-user"></i> Account</span>
        </div>
      </Container>
    </div>
  )
}

export default TopNav