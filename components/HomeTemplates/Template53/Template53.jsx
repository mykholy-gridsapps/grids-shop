import HeaderTwentySeven from '../../Headers/HeaderTwentySeven/HeaderTwentySeven';
import SliderThirtyTwo from '../../MainSlider/SliderThirtyTwo/SliderThirtyTwo';
import CategoriesThirtyThree from '../../Categories/CategoriesThirtyThree/CategoriesThirtyThree';
import FeaturesSixteen from '../../Features/FeaturesSixteen/FeaturesSixteen';
import CollectionEightyFive from '../../Collections/CollectionEightyOne/CollectionEightyOne';
import SaleSixtySeven from '../../Sale/SaleSixtySeven/SaleSixtySeven';
import CollectionFourtyEight from '../../Collections/CollectionFourtyEight/CollectionFourtyEight';
import CollectionEightySeven from '../../Collections/CollectionEightySeven/CollectionEightySeven';
import BriefCollectionFour from '../../BriefCollections/BriefCollectionFour/BriefCollectionFour';
import BlogTwelve from '../../Blogs/BlogTwelve/BlogTwelve';
import BrandsOne from '../../Brands/BrandsOne/BrandsOne';
import NewsletterSix from '../../Newsletter/NewsletterSix/NewsletterSix';
import FooterFourteen from '../../Footers/FooterFourteen/FooterFourteen';

import Container from '@mui/material/Container';

const Template53 = () => {
  return (
    <div>

      <HeaderTwentySeven />

      <SliderThirtyTwo />

      <CategoriesThirtyThree />

      <Container maxWidth="xl">

        <div className="margin">
          <FeaturesSixteen />
        </div>

        <CollectionEightyFive />

        <SaleSixtySeven />

        <div className="marginTop">
          <CollectionFourtyEight />
        </div>

        <CollectionEightySeven />

        <div className="marginBig">
          <BriefCollectionFour />
        </div>

        <BlogTwelve />

        <div className="margin">
          <BrandsOne />
        </div>

      </Container>

      <NewsletterSix />

      <div style={{ marginTop: '-80px' }}>
        <FooterFourteen />
      </div>

    </div>
  )
}

export default Template53;
