import { useTranslation } from 'next-i18next';

import cls from './categoriesList.module.scss';

const CategoriesList = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.categoriesList}>
      <ul>
        <li><span>Accessories</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
        <li><span>All In one</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
        <li><span>Audio Speakers</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
        <li><span>Bluetooth Speakers</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
        <li><span>Cameras</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
        <li><span>Cameras & Photography</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
        <li><span>Cases</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
        <li><span>Chargers</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
        <li><span>Computer Cases</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
        <li><span>Labtops</span> <i className={i18n.language === 'en' ? 'fa-duotone fa-arrow-right' : 'fa-duotone fa-arrow-left'}></i></li>
      </ul>
    </div>
  )
}

export default CategoriesList;