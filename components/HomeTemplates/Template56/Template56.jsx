import HeaderThirty from '../../Headers/HeaderThirty/HeaderThirty';
import SliderThirtyFour from '../../MainSlider/SliderThirtyFour/SliderThirtyFour';
import CollectionNinetyTwo from '../../Collections/CollectionNinetyTwo/CollectionNinetyTwo';
import SaleSixtyFour from '../../Sale/SaleSixtyFour/SaleSixtyFour';
import CollectionNinetyThree from '../../Collections/CollectionNinetyThree/CollectionNinetyThree';
import CategoriesFourtyFour from '../../Categories/CategoriesFourtyFour/CategoriesFourtyFour';
import FooterFourteen from '../../Footers/FooterFourteen/FooterFourteen';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template56 = () => {
  return (
    <div>

      <HeaderThirty />

      <SliderThirtyFour />

      <Container maxWidth="xl">

        <div className="marginBottom" style={{ marginTop: '30px' }}>
          <CollectionNinetyTwo />
        </div>

        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <SaleSixtyFour />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SaleSixtyFour />
          </Grid>

        </Grid>

        <div className="margin">
          <CollectionNinetyThree />
        </div>

        <CategoriesFourtyFour />

      </Container>

      <FooterFourteen />

    </div>
  )
}

export default Template56;