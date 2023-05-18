import HeaderFifteen from '../../Headers/HeaderFifteen/HeaderFifteen';
import SliderFourteen from '../../MainSlider/SliderFourteen/SliderFourteen';
import CategoriesThirtySix from '../../Categories/CategoriesThirtySix/CategoriesThirtySix';
import FooterEighteen from '../../Footers/FooterEighteen/FooterEighteen';

import Container from '@mui/material/Container';

import cls from './template47.module.scss';

const Template47 = () => {
  return (
    <div>

      <HeaderFifteen />

      <SliderFourteen />

      <Container maxWidth="xl">
        <CategoriesThirtySix />
      </Container>

      <FooterEighteen />

    </div>
  )
}

export default Template47
