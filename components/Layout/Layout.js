import Navbar from "../Navbar/Navbar.js";

const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
