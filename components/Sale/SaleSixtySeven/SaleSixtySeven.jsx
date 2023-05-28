import Link from 'next/link';

import cls from './saleSixtySeven.module.scss';

const SaleSixtySeven = () => {
  return (
    <div className={cls.container}>
      <div className={cls['item-1']}>
        <img src="/imgs/slide1.png" alt="product" />
        <span className={cls.title}>Title</span>
        <h2 className={cls['large-title']}>NEW GAMING
          EXPERIENCE</h2>
        <Link href="/">
          VIEW MORE
        </Link>
      </div>
      <div className={cls['item-2']}>
        <img src="/imgs/scarf.jpg" alt="product" />
        <span className={cls.title}>Title</span>
        <h2 className={cls['large-title']}>NEW GAMING
          EXPERIENCE</h2>
      </div>
      <div className={cls['item-3']}>
        <img src="/imgs/slide1.png" alt="product" />
        <span className={cls.title}>Title</span>
        <h2 className={cls['large-title']}>NEW GAMING
          EXPERIENCE</h2>
      </div>
      <div className={cls['item-4']}>
        <img src="/imgs/scarf.jpg" alt="product" />
        <span className={cls.title}>Title</span>
        <h2 className={cls['large-title']}>NEW GAMING
          EXPERIENCE</h2>
      </div>
      <div className={cls['item-5']}>
        <img src="/imgs/slide1.png" alt="product" />
        <span className={cls.title}>Title</span>
        <h2 className={cls['large-title']}>NEW GAMING
          EXPERIENCE</h2>
        <Link href="/">
          VIEW MORE
        </Link>
      </div>
      <div className={cls['item-6']}>
        <img src="/imgs/scarf.jpg" alt="product" />
        <span className={cls.title}>Title</span>
        <h2 className={cls['large-title']}>NEW GAMING
          EXPERIENCE</h2>
      </div>
    </div>
  )
}

export default SaleSixtySeven
