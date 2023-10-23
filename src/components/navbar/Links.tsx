import { Link } from "react-router-dom";
import { Nav } from "../../ts/types/lang";

const Links = (str: Nav) => {
  return (
    <>
      <li>
        <Link to="/">{str.links[0]}</Link>
      </li>
      <li>
        <Link to="/tools">{str.links[1]}</Link>
      </li>
      <li>
        <Link to="/task">{str.links[2]}</Link>
      </li>
      <li>
        <Link to="/about-us">{str.links[3]}</Link>
      </li>
    </>
  );
};

export default Links;
