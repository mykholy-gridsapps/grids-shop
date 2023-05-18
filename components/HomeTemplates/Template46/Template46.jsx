import HeaderThirteen from '../../Headers/HeaderThirteen/HeaderThirteen';
import SliderTwentyFive from '../../MainSlider/SliderTwentyFive/SliderTwentyFive';
import FooterSeventeen from '../../Footers/FooterSeventeen/FooterSeventeen';
import BrandsOne from '../../Brands/BrandsOne/BrandsOne';
import SaleFourtyEight from '../../Sale/SaleFourtyEight/SaleFourtyEight';
import CollectionSixtyNine from '../../Collections/CollectionSixtyNine/CollectionSixtyNine';
import FeaturesFourteen from '../../Features/FeaturesFourteen/FeaturesFourteen';
import BlogFourteen from '../../Blogs/BlogFourteen/BlogFourteen';

import Container from '@mui/material/Container';

import cls from './template46.module.scss';

const Template46 = () => {
  return (
    <div>

      <HeaderThirteen />

      <Container maxWidth="xl">

        <SliderTwentyFive />

        <BrandsOne />

        <div className={cls.sales}>
          <div className={cls.big}>
            <SaleFourtyEight />
          </div>
          <div className={cls.small}>
            <SaleFourtyEight />
          </div>
          <div className={cls.small}>
            <SaleFourtyEight />
          </div>
        </div>

        <div className="margin">
          <CollectionSixtyNine />
        </div>

        <FeaturesFourteen />

        <div className='marginTop'>
          <BlogFourteen />
        </div>

      </Container>

      <FooterSeventeen />

    </div>
  )
}

export default Template46;
