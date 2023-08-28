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
        <span>Welcome to tripple shop</span>
        <span>FREE SHIPPING FOR OVER $40</span>
        <span>BEST WORLDWIDE DELIVERY</span>
      </Container>
    </div>
  )
}

export default TopNav