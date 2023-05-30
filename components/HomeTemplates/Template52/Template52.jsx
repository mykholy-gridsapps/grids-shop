import HeaderTwentyFive from '../../Headers/HeaderTwentyFive/HeaderTwentyFive';
import FeaturesTwelve from '../../Features/FeaturesTwelve/FeaturesTwelve';
import CollectionFiftyFour from '../../Collections/CollectionFiftyFour/CollectionFiftyFour';
import CollectionEightyFive from '../../Collections/CollectionEightyFive/CollectionEightyFive';
import SaleSixtyFour from '../../Sale/SaleSixtyFour/SaleSixtyFour';
import SaleSixtyFive from '../../Sale/SaleSixtyFive/SaleSixtyFive';
import BlogTwelve from '../../Blogs/BlogTwelve/BlogTwelve';
import BriefCollectionThree from '../../BriefCollections/BriefCollectionThree/BriefCollectionThree';
import FooterTwentyOne from '../../Footers/FooterTwentyOne/FooterTwentyOne';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template52 = () => {
  return (
    <div>

      <HeaderTwentyFive openCategories={false} />

      <Container maxWidth="xxl">

        <FeaturesTwelve />

        <CollectionFiftyFour />

        <div className="margin">
          <CollectionEightyFive />
        </div>

      </Container>

      <div style={{ padding: '0 20px' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} lg={4}>
            <SaleSixtyFour />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <SaleSixtyFour />
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <SaleSixtyFour />
          </Grid>
        </Grid>
      </div>

      <Container maxWidth="xxl">

        <div className="margin">
          <CollectionEightyFive reverse={true} />
        </div>

        <div style={{ marginBottom: '150px' }}>
          <SaleSixtyFive />
        </div>

        <div className="margin">
          <BlogTwelve slides={4} />
        </div>

        <BriefCollectionThree />

      </Container>

      <FooterTwentyOne />

    </div>
  )
}

export default Template52
