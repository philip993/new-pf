import Layout from "../components/Layout/Layout";
import styles from "../styles/index.module.scss";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Index = () => (
  <div className={styles.index}>
    <img alt='background' />
    <Layout>
      <div className={styles.indexMenu}>
        <h1>FILIP MIHAJLOVSKI</h1>
        <h4>JavaScript Developer</h4>
      </div>
      <div className={styles.indexIcons}>
        <IconButton>
          <a href='http://facebook.com'>
            <FacebookIcon className={styles.fbIcon} />
          </a>
        </IconButton>
        <IconButton>
          <a href='https://linkedin.com/in/filip-mihajlovski-68773116b'>
            <LinkedInIcon className={styles.linkedIcon} />
          </a>
        </IconButton>
        <IconButton>
          <a href='https://github.com/philip993?tab=repositories'>
            <GitHubIcon className={styles.gitIcon} />
          </a>
        </IconButton>
      </div>
      <footer className={styles.footer}>
        <h6>Copyright &#169; 2020</h6>
        <h6>All Rights Reserved</h6>
      </footer>
    </Layout>
  </div>
);

export default Index;
