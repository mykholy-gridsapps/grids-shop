import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderTwentySix.module.scss';

const SliderTwentySix = () => {

  return (
    <div className={cls.slider}>
      <div className={cls.big}>
        <img src="/imgs/chair.jpg" alt="product" />
        <div className={cls.slide}>
          <span>Modern</span>
          <h2>Dinner Chair</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum.</p>
          <span className={cls.price}>
            $199.00
          </span>
        </div>
      </div>
      <div className={cls.small}>
        <img src="/imgs/scarf.jpg" alt="product" />
        <span>Wool</span>
        <h5>Scarves</h5>
        <button>View Details</button>
      </div>
      <div className={cls.tall}>
        <img src="/imgs/chair.jpg" alt="product" />
        <span>Modern</span>
        <h2>Dinner Chair</h2>
        <span className={cls.price}>
          $199.00
        </span>
      </div>
      <div className={cls.small}>
        <img src="/imgs/scarf.jpg" alt="product" />
        <span>Wool</span>
        <h5>Scarves</h5>
        <button>View Details</button>
      </div>
    </div>
  )
}

export default SliderTwentySix;
