import Link from 'next/link';

import cls from './saleFifty.module.scss';

const SaleFifty = () => {
  return (
    <div className={cls.sale}>
      <img src="/imgs/sale.jpg" alt="product" />
      <div className={cls.details}>
        <span>Small Title</span>
        <h2>Our Sale Title</h2>
      </div>
      <Link href="/">
        Read More
      </Link>
    </div>
  )
}

export default SaleFifty;
