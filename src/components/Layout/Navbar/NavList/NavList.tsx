
import { Link } from "react-router-dom";
import styles from "../style.module.css";


type TNavList = {
  data: string[];
  activeLink : string,
  handleActiveLink: (activeLink: string) => void
};

const { navbar_list } = styles;
const LINK_IS_Home = "home";

function NavList({ data, activeLink, handleActiveLink }: TNavList) {
  // const [activeLink, setActiveLink] = useState("home");

  // const handelActiveLink = (activeLinkValue: string) => {
  //   console.log(activeLinkValue);
  //   setActiveLink(activeLinkValue);
  // };


  const displayData = data.map((item) => {
    return (
      <li key={item} onClick={() => handleActiveLink(item)}>
        <Link
          key={item}
          to={item === LINK_IS_Home ? "/" : item}
          className={item === activeLink ? styles["active-link"] : ""}>
          {item}
        </Link>
      </li>
    );
  });
  return <ul className={navbar_list}>{displayData}</ul>;
}

export default NavList;
