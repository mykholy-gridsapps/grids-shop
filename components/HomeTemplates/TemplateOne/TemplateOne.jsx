// TEMPLATE COMPONENTS
import SliderOne from "../../MainSlider/SliderOne/SliderOne";
import InfoBoxOne from "../../InfoBox/InfoBoxOne/InfoBoxOne";
import FeaturesEight from "../../Features/FeaturesEight/FeaturesEight";
import NewsletterFour from './../../Newsletter/NewsletterFour/NewsletterFour';
// MATERIAL UI STUFF
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// STYLES FILES
import cls from './templateOne.module.scss';

const TemplateOne = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={3}>
          </Grid>
          <Grid item md={9}>
            <SliderOne />
          </Grid>
        </Grid>
        <div className={cls.secondPart}>
          <InfoBoxOne />
          <FeaturesEight />
          <NewsletterFour />
        </div>
      </Container>
    </div>
  )
}

export default TemplateOne