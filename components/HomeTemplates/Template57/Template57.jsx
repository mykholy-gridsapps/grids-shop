import HeaderThirtyOne from "../../Headers/HeaderThirtyOne/HeaderThirtyOne";
import SliderSeventeen from '../../MainSlider/SliderSeventeen/SliderSeventeen';
import CategoriesTwentyNine from '../../Categories/CategoriesTwentyNine/CategoriesTwentyNine';
import SaleSixtyEight from "../../Sale/SaleSixtyEight/SaleSixtyEight";
import CollectionNinetyFour from '../../Collections/CollectionNinetyFour/CollectionNinetyFour';
import CollectionNinetyFive from '../../Collections/CollectionNinetyFive/CollectionNinetyFive';
import CollectionThirtySeven from '../../Collections/CollectionThirtySeven/CollectionThirtySeven';
import BlogNineteen from '../../Blogs/BlogNineteen/BlogNineteen';
import FeaturesEleven from '../../Features/FeaturesEleven/FeaturesEleven';
import NewsletterNineteen from '../../Newsletter/NewsletterNineteen/NewsletterNineteen';
import FooterSixteen from '../../Footers/FooterSixteen/FooterSixteen';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './template57.module.scss';

const Template57 = () => {
  return (
    <div>

      <HeaderThirtyOne />

      <Container maxWidth="xxl">

        <div style={{ marginTop: '20px' }}>
          <SliderSeventeen />
        </div>

        <div className="margin">
          <CategoriesTwentyNine />
        </div>

        <Grid container spacing={2}>

          <Grid item xs={12} sm={6} lg={4}>

            <SaleSixtyEight />

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <SaleSixtyEight />

          </Grid>

          <Grid item xs={12} sm={12} lg={4}>

            <SaleSixtyEight />

          </Grid>

        </Grid>

        <div className="margin">
          <CollectionNinetyFour />
        </div>

        <CollectionNinetyFive />

        <div className={cls.sales}>
          <div className={cls.sale}>
            <SaleSixtyEight />
          </div>
          <div className={cls.sale}>
            <SaleSixtyEight />
          </div>
          <div className={cls.sale}>
            <SaleSixtyEight />
          </div>
          <div className={cls.sale}>
            <SaleSixtyEight />
          </div>
          <div className={cls.sale}>
            <SaleSixtyEight />
          </div>
        </div>

        <div className="margin">
          <CollectionNinetyFour />
        </div>

        <CollectionThirtySeven />

        <div className="margin">
          <BlogNineteen />
        </div>

        <FeaturesEleven />

        <div className="margin">
          <NewsletterNineteen />
        </div>

        <FooterSixteen />

      </Container>

    </div>
  )
}

export default Template57;
