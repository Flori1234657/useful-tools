import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tools">Tools</Link>
      </li>
      <li>
        <Link to="/task">Task</Link>
      </li>
      <li>
        <Link to="/about-us">About us</Link>
      </li>
    </>
  );
};

export default Links;
