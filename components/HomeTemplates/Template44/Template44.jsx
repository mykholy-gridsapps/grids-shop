import HeaderTen from "../../Headers/HeaderTen/HeaderTen";
import SliderTwentyFour from '../../MainSlider/SliderTwentyFour/SliderTwentyFour';
import CategoriesThirtySix from '../../Categories/CategoriesThirtySix/CategoriesThirtySix';
import CollectionSixtyOne from "../../Collections/CollectionSixtyOne/CollectionSixtyOne";
import CollectionSixtyTwo from "../../Collections/CollectionSixtyTwo/CollectionSixtyTwo";
import CollectionFourtySix from "../../Collections/CollectionFourtySix/CollectionFourtySix";
import CollectionFourtySeven from "../../Collections/CollectionFourtySeven/CollectionFourtySeven";
import BlogThirteen from '../../Blogs/BlogThirteen/BlogThirteen';
import FooterFifteen from '../../Footers/FooterFifteen/FooterFifteen';

import Container from "@mui/material/Container";

const Template44 = () => {
  return (
    <div>
      <HeaderTen openCategories={false} />

      <Container maxWidth="xl" style={{ margin: '20px auto 0' }}>

        <SliderTwentyFour />

        <div className="margin">
          <CategoriesThirtySix />
        </div>

        <CollectionSixtyOne />

        <div className="margin">
          <CollectionSixtyTwo />
        </div>

      </Container>

      <CollectionFourtySix />

      <Container maxWidth="xl">
        <div className="margin">
          <CollectionSixtyOne />
        </div>
      </Container>

      <Container maxWidth="xl">
        <div className="margin">
          <CollectionFourtySeven />
        </div>

        <BlogThirteen />

      </Container>

      <FooterFifteen />
    </div>
  )
}

export default Template44;
