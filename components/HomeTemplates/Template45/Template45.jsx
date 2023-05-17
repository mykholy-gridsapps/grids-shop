import FooterSixteen from '../../Footers/FooterSixteen/FooterSixteen';
import HeaderTwelve from '../../Headers/HeaderTwelve/HeaderTwelve';
import SliderTwentySeven from '../../MainSlider/SliderTwentySeven/SliderTwentySeven';
import CategoriesThirtySeven from '../../Categories/CategoriesThirtySeven/CategoriesThirtySeven';
import CollectionSixtySeven from '../../Collections/CollectionSixtySeven/CollectionSixtySeven';
import FeaturesThirteen from '../../Features/FeaturesThirteen/FeaturesThirteen';
import CollectionSixtyFive from '../../Collections/CollectionSixtyFive/CollectionSixtyFive';
import CollectionSixtySix from '../../Collections/CollectionSixtySix/CollectionSixtySix';
import BlogSeventeen from '../../Blogs/BlogSeventeen/BlogSeventeen';
import NewsletterFive from '../../Newsletter/NewsletterFive/NewsletterFive';

import Container from '@mui/material/Container';

const Template45 = () => {
  return (
    <div>

      <HeaderTwelve />

      <SliderTwentySeven />

      <Container maxWidth="xl">

        <div className='margin'>
          <CategoriesThirtySeven />
        </div>

        <CollectionSixtySeven />

        <div className="margin">
          <FeaturesThirteen />
        </div>

        <CollectionSixtyFive />

        <div className="margin">
          <CollectionSixtySix />
        </div>

        <BlogSeventeen />

      </Container>

      <NewsletterFive />

      <FooterSixteen />

    </div>
  )
}

export default Template45
