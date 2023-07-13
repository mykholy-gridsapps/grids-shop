import HeaderThirtySix from '../../Headers/HeaderThirtySix/HeaderThirtySix';
import SliderFourty from '../../MainSlider/SliderFourty/SliderFourty';
import FeaturesNineteen from '../../Features/FeaturesNineteen/FeaturesNineteen';
import Collection116 from '../../Collections/Collection116/Collection116';
import Collection117 from '../../Collections/Collection117/Collection117';
import Collection118 from '../../Collections/Collection118/Collection118';
import Collection119 from '../../Collections/Collection119/Collection119';
import CollectionFive from '../../Collections/CollectionFive/CollectionFive';
import Collection120 from '../../Collections/Collection120/Collection120';
import SaleThirteen from '../../Sale/SaleThirteen/SaleThirteen';

import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import BriefCollectionSix from '../../BriefCollections/BriefCollectionSix/BriefCollectionSix';
import FooterTwentyFive from '../../Footers/FooterTwentyFive/FooterTwentyFive';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template65 = () => {
  return (
    <>
      <HeaderThirtySix />
      <SliderFourty />

      <Container maxWidth="xxl">
        <div className="margin">
          <FeaturesNineteen />
        </div>
      </Container>

      <Collection116 />

      <div className="margin">
        <Collection117 />
      </div>

      <Container maxWidth="xxl">

        <Collection118 />

        <div className="margin">
          <Collection119 />
        </div>

        <CollectionFive />

        <div className="margin">
          <Collection120 />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <SaleThirteen />
            </Grid>
            <Grid item xs={12} md={6}>
              <SaleThirteen />
            </Grid>
          </Grid>
        </div>

      </Container>

      <Container maxWidth="xxl">
        <div className="margin">
          <BrandsTwelve />
        </div>
      </Container>

      <BriefCollectionSix />

      <FooterTwentyFive />
    </>
  )
}

export default Template65;