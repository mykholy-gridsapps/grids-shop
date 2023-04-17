import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import cls from './saleFourtySeven.module.scss';

const SaleFourtySeven = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.sale}>
      <p>From Online Store</p>
      <h3>Xbox One's <span>Limited</span> Edition</h3>
      <Link href='/'>
        VIEW DETAILS <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i>
        <span></span>
      </Link>
    </div>
  )
}

export default SaleFourtySeven
