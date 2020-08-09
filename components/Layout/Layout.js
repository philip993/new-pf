import Navbar from "../Navbar/NavbarActions.js";

const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
