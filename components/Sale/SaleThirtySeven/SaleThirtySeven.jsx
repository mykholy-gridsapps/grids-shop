import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './saleThirtySeven.module.scss';

const SaleThirtySeven = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.saleWrapper}>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <div className={cls.sale}>
            <div className={cls.content}>
              <span>UP TO 30% OFF</span>
              <h2>Cyber Monday Sale</h2>
              <p>Get our outdoor shoe selection has everything
              </p>
              <p>you need to go the distance</p>

              <div className={cls.btns}>
                <button>SHOP MEN <i className={`fa-duotone fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></button>
                <button>SHOP WOMEN <i className={`fa-duotone fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={cls.saleImage}>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SaleThirtySeven
