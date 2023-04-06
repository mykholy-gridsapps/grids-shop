import Link from 'next/link';
import { useRouter } from 'next/router';

import cls from './sideMenuTwo.module.scss';

const SideMenuTwo = () => {
  const router = useRouter();

  return (
    <div className={cls.sideMenu}>
      <ul>
        <li>
          <Link href='/' className={router.pathname === '/' ? cls.active : ''}>
            01. Home
            <span></span>
          </Link>
        </li>
        <li>
          <Link href='/categories' className={router.pathname === '/categories' ? cls.active : ''}>
            02. Categories
            <span></span>
          </Link>
        </li>
        <li>
          <Link href='/products' className={router.pathname === '/products' ? cls.active : ''}>
            03. Products
            <span></span>
          </Link>
        </li>
        <li>
          <Link href='/pages' className={router.pathname === '/pages' ? cls.active : ''}>
            04. Pages
            <span></span>
          </Link>
        </li>
        <li>
          <Link href='/contact' className={router.pathname === '/contact' ? cls.active : ''}>
            05. Contact Us
            <span></span>
          </Link>
        </li>
        <li>
          <Link href='/blogs' className={router.pathname === '/blogs' ? cls.active : ''}>
            06. Blogs
            <span></span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideMenuTwo
