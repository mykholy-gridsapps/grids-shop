import HeaderNineteen from "../../Headers/HeaderNineteen/HeaderNineteen";
import SliderTwentyEight from '../../MainSlider/SliderTwentyEight/SliderTwentyEight';
import CollectionSeventyNine from '../../Collections/CollectionSeventyNine/CollectionSeventyNine';
import CategoriesFourty from "../../Categories/CategoriesFourty/CategoriesFourty";
import FeaturesFourteen from '../../Features/FeaturesFourteen/FeaturesFourteen';
import BlogEighteen from '../../Blogs/BlogEighteen/BlogEighteen';
import TestimonialSeven from '../../Testimonials/TestimonialSeven/TestimonialSeven';

import NewsletterEighteen from '../../Newsletter/NewsletterEighteen/NewsletterEighteen';
import FooterFourteen from "../../footers/FooterFourteen/FooterFourteen";

import Container from "@mui/material/Container";

const Template49 = () => {
  return (
    <div>

      <HeaderNineteen />

      <Container maxWidth="xl">

        <SliderTwentyEight />

        <div className="margin">
          <CollectionSeventyNine />
        </div>

        <CategoriesFourty />

        <div className="margin">
          <FeaturesFourteen />
        </div>

        <BlogEighteen />

      </Container>

      <Container maxWidth="xl">
        <div className="margin">
          <TestimonialSeven />
        </div>
      </Container>

      <div style={{ marginBottom: '-80px' }}>
        <NewsletterEighteen />
      </div>

      <FooterFourteen />

    </div>
  )
}

export default Template49
