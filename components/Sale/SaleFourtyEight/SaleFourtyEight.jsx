import Link from 'next/link';

import cls from './saleFourtyEight.module.scss';

const SaleFourtyEight = () => {
  return (
    <div className={cls.sale}>
      <img src="/imgs/5.jpg" alt="product image" />
      <div className={cls.content}>
        <h4>
          All Jackets
          <br />
          Discount-30%
        </h4>
        <Link href='/'>
          READ MORE
        </Link>
      </div>
    </div>
  )
}

export default SaleFourtyEight
