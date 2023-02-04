import AnimatedIcons from "../../UIs/AnimatedIcons/AnimatedIcons";
import * as animationData from "../../../public/animated/wishlist.json";

import { useTranslation } from "next-i18next";

import cls from "./wishlistDropdown.module.scss";

const WishlistDropdown = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className={`${cls.wishlist__dropdown} ${cls[i18n.language]}`}>
      {/* <div className={cls.item}>

                    <img src="/imgs/products/laptop.png" alt="productImage" />

                    <div>

                      <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h6>

                    </div>

                  </div>
                    
                  <div className={cls.item}>

                    <img src="/imgs/products/laptop.png" alt="productImage" />

                    <div>

                      <h6>Dell Vostro 3500 laptop - 11th Intel core i7-1165G7, 8GB RAM, 1TB HDD</h6>

                    </div>

                  </div> */}

      <div className={cls.wishlistEmpty}>
        <AnimatedIcons animationData={animationData} />
        <h6>No items in your wishlist!</h6>
      </div>

      <div className={cls.actions}>
        <button className={cls.view} onClick={() => router.push("/wishlist")}>
          View wishlist
        </button>

        <button>clear wishlist</button>
      </div>
    </div>
  );
};

export default WishlistDropdown;
