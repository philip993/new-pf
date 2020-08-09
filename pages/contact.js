import Layout from "../components/Layout/Layout";

import styles from "../styles/contact.module.scss";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Contact = () => (
  <div className={styles.contact}>
    <Layout />
    <header className={styles.header}>
      <h1>Contact Me</h1>
    </header>
    <body className={styles.body}>
      <section className={styles.sectionOne}>
        <MailOutlineIcon className={styles.icon} />
        <h4 className={styles.title}>f.mihajlovski93@gmail.com</h4>
      </section>

      <section className={styles.sectionTwo}>
        <PhoneIphoneIcon className={styles.icon} />
        <h4 className={styles.title}>+389 70 262 797</h4>
      </section>
    </body>
  </div>
);

export default Contact;
