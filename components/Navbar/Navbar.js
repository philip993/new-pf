import Link from "next/link";
import styles from "../../styles/navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerOpen, setDrawerClose } from "./NavbarActions";
import { Button, Drawer, List, ListItem, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  const { isOpen } = useSelector((state) => state.NavbarReducer);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch(setDrawerOpen());
  };
  const handleDrawerClose = () => {
    dispatch(setDrawerClose());
  };

  return (
    <div className={styles.navbar}>
      <IconButton
        onClick={!isOpen ? handleDrawerOpen : handleDrawerClose}
        edge='start'
      >
        <MenuIcon fontSize='large' className={styles.icon} />
      </IconButton>
      <Drawer open={isOpen} onClose={handleDrawerClose} anchor='right'>
        <List onClick={handleDrawerClose} className={styles.menu}>
          <CloseIcon className={styles.closeIcon} onClick={handleDrawerClose} />
          <ListItem className={styles.menuItems}>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </ListItem>
          <ListItem className={styles.menuItems}>
            <Link href='/about'>
              <a> About</a>
            </Link>
          </ListItem>
          <ListItem className={styles.menuItems}>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </ListItem>
          <ListItem className={styles.menuItems}>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </ListItem>
          <ListItem className={styles.menuItems}>
            <Link href='/cv'>
              <a>CV</a>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
