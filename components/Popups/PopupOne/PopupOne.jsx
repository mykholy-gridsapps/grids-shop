import { useTranslation } from 'next-i18next';

import cls from './popupOne.module.scss';

const PopupOne = ({ openPopup }) => {
  const { i18n } = useTranslation('common');

  const close = () => {
    openPopup(false)
  }

  return (
    <div className={cls.popupOne}>
      <div className={[cls.close, cls[i18n.language]].join(' ')} onClick={close}>
        <i className="fa-regular fa-xmark"></i>
      </div>
      <div className={cls.circle}>
        <h4>UP TO <span>20% OFF</span></h4>
        <h2>Sign Up To Newsletter</h2>
        <p>Sing up today for free and receive updates by email..</p>
        <p>Sing up today for free..</p>
        <div className={cls.submit}>
          <input type="text" placeholder='email address here' />
          <button>Submit</button>
        </div>
        <div className={cls.checkbox}>
          <input id='show' type="checkbox" />
          <label htmlFor="show">Don't show this popup again</label>
        </div>
      </div>
    </div>
  )
}

export default PopupOne
