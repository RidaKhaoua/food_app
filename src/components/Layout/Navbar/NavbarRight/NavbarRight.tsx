import { Img } from "@components/ui";
import { assets } from "@assets";
import styles from "../style.module.css";
import { Button } from "@components/ui";
import { Link } from "react-router-dom";

const btnStyle = {
  backgroundColor: "transparent",
  borderRadius: "50px",
  padding: "8px 16px",
  color: "black",
  cursor: "pointer",
  transition: "0.5s ease-in-out"
};

function NavbarRight() {
  return (
    <div className={styles.navbar_right}>
      <Img imgName={assets.search_icon} title="search_icon" />
      <div className={styles.navbar_right_basket_icon}>
        <Link to="/Cart">
        <Img imgName={assets.basket_icon} title="basket_icon" />
        <div className={styles.navbar_right_size_product}>0</div>
        </Link>
        
      </div>
      <div className="navbar_right_login">
        <Button
          className="sing-in"
          type="button"
          disabled={false}
          style={btnStyle}>
          Sing In
        </Button>
      </div>
    </div>
  );
}

export default NavbarRight;
