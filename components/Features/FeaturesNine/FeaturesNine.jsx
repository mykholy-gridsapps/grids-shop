import ZoomImage from '../../UIs/ZoomImage/ZoomImage';
import ItemDetails from './ItemDetails';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './featuresNine.module.scss';

const FeaturedNine = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.featuredNine}>
      <div className={cls.head}>
        <span>Trending 2022</span>
        <h2>Featured Item</h2>
      </div>

      <Grid container spacing={5}>
        <Grid item xs={12} md={7}>
          <div className={cls.itemImage}>
            <img src="/imgs/bg.jpg" alt="item image" />
            <div className={[cls.zoomImage, cls[i18n.language]].join(' ')}>
              {/* <ZoomImage image='/imgs/zoom.jpg' XPosition={600} YPosition={300} /> */}
              <ZoomImage image='/imgs/zoom.jpg' />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <ItemDetails />
        </Grid>
      </Grid>
    </div>
  )
}

export default FeaturedNine
