import { useTranslation } from 'next-i18next';

import cls from './smallScreenSearch.module.scss';

const SmallScreenSearch = ({ setOpenSmallSearch }) => {
  const { t, i18n } = useTranslation('common');

  const blur = () => {
    setTimeout(() => {
      setOpenSmallSearch(false)
    }, 200)
  }

  return (
    <div className={[cls.search, cls[i18n.language]].join(" ")} onBlur={blur}>
      <input type="search" placeholder="Search" autoFocus />
      <button onClick={() => console.log('clicked')}><i className="fa-light fa-magnifying-glass"></i></button>
    </div>
  )
}

export default SmallScreenSearch