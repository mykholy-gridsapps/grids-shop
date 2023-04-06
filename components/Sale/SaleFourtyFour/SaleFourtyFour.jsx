import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import cls from './saleFourtyFour.module.scss';

const SaleFourtyFour = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={[cls.saleFourtyFour, i18n.language === 'ar' ? cls.ar : ''].join(' ')}>
      <span>Black Friday Sale</span>
      <div>
        <h2>LATEST POWER BANK</h2>
        <Link href='/'>
          SHOP NOW <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i>
        </Link>
      </div>
    </div>
  )
}

export default SaleFourtyFour
