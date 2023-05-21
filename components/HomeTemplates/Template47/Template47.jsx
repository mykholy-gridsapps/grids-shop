import HeaderFifteen from '../../Headers/HeaderFifteen/HeaderFifteen';
import SliderThree from '../../MainSlider/SliderThree/SliderThree';
import CategoriesThirtyEight from '../../Categories/CategoriesThirtyEight/CategoriesThirtyEight';
import CollectionFourtyEight from '../../Collections/CollectionFourtyEight/CollectionFourtyEight';
import CollectionFourtyNine from '../../Collections/CollectionFourtyNine/CollectionFourtyNine';
import CollectionSeventyOne from '../../Collections/CollectionSeventyOne/CollectionSeventyOne';
import CollectionFifty from '../../Collections/CollectionFifty/CollectionFifty';
import CollectionSeventyTwo from '../../Collections/CollectionSeventyTwo/CollectionSeventyTwo';
import BlogTwelve from '../../Blogs/BlogTwelve/BlogTwelve';

import FeaturesFifteen from '../../Features/FeaturesFifteen/FeaturesFifteen';
import FooterEighteen from '../../Footers/FooterEighteen/FooterEighteen';

import Container from '@mui/material/Container';

const Template47 = () => {
  return (
    <div>

      <HeaderFifteen />

      <SliderThree />

      <CategoriesThirtyEight />

      <Container maxWidth="xl">

        <div className="marginTop">
          <CollectionFourtyEight />
        </div>

        <CollectionSeventyOne />

        <div className="margin">
          <FeaturesFifteen />
        </div>

        <div className="marginTop">
          <CollectionFourtyEight reverse={true} />
        </div>

        <CollectionSeventyOne reverse={true} />

        <div className='margin'>
          <CollectionFifty slides={4} />
        </div>

      </Container>

      <CollectionSeventyTwo />

      <Container maxWidth="xl">

        <div className='marginTop'>
          <CollectionFourtyNine />
        </div>

        <BlogTwelve />

      </Container>

      <FooterEighteen />


    </div>
  )
}

export default Template47
