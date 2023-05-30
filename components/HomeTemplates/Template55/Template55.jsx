import HeaderTwentyNine from '../../Headers/HeaderTwentyNine/HeaderTwentyNine';
import SliderTwenty from '../../MainSlider/SliderTwentyNine/SliderTwentyNine';
import CategoriesFourtyThree from '../../Categories/CategoriesFourtyThree/CategoriesFourtyThree';
import CollectionNinety from '../../Collections/CollectionNinety/CollectionNinety';
import FooterTwentyTwo from '../../Footers/FooterTwentyTwo/FooterTwentyTwo';

import Container from '@mui/material/Container';

const Template55 = () => {
  return (
    <div>

      <Container maxWidth="xxxl">
        <HeaderTwentyNine />
      </Container>

      <SliderTwenty />

      <Container maxWidth="xxxl">

        <div style={{ marginTop: '20px', marginBottom: '80px' }}>
          <CategoriesFourtyThree />
        </div>

      </Container>

      <Container maxWidth="xl">
        <CollectionNinety />
      </Container>

      <Container maxWidth="xxxl">
        <FooterTwentyTwo />
      </Container>
    </div>
  )
}

export default Template55
