import { Img } from "@components/ui";
import { assets } from "@assets";
import styles from "../style.module.css";
import { Button } from "@components/ui";
import { Link, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelectore } from "@store/hooks";
import cartTotalQuantitySelectore from "@store/Cart/selectores/selectors";
import { resetAuth } from "@store/auth/authSlice";

const btnStyle = {
  backgroundColor: "transparent",
  borderRadius: "50px",
  padding: "8px 16px",
  color: "black",
  cursor: "pointer",
  transition: "0.5s ease-in-out",
};

type TNavbarRight = {
  setIsVisibleShowLoginPopUp: (val: boolean) => void;
};

function NavbarRight({ setIsVisibleShowLoginPopUp }: TNavbarRight) {
  const accessToken = useAppSelectore((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("render");
  const handelShowLogin = () => {
    setIsVisibleShowLoginPopUp(true);
  };

  const cartTotalQuantity = useAppSelectore(cartTotalQuantitySelectore);
  return (
    <div className={styles.navbar_right}>
      <Img imgName={assets.search_icon} title="search_icon" />
      <div className={styles.navbar_right_basket_icon}>
        <Link to="/Cart">
          <Img imgName={assets.basket_icon} title="basket_icon" />
          <div className={styles.navbar_right_size_product}>
            {cartTotalQuantity}
          </div>
        </Link>
      </div>
      <div className={styles.navbar_right_login}>
        {!accessToken ? (
          <Button
            className="sing-in"
            type="button"
            disabled={false}
            style={btnStyle}
            fn={handelShowLogin}>
            Sing In
          </Button>
        ) : (
          <Button
            className="logOut"
            type="button"
            disabled={false}
            style={btnStyle}
            fn={() => {
              dispatch(resetAuth());
              if(searchParams.get("message"))
                setSearchParams("");
            }}>
            logOut
          </Button>
        )}
      </div>
    </div>
  );
}

export default NavbarRight;
