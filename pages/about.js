import Layout from "../components/Layout/Layout";
import styles from "../styles/about.module.scss";
import { Avatar, Button } from "@material-ui/core";
import Link from "next/link";

const About = () => (
  <div className={styles.about}>
    <Layout />
    <header className={styles.header}>
      <h1>About Me</h1>
    </header>
    <div className={styles.body}>
      <section>
        <Avatar
          className={styles.avatar}
          src={require("../public/pf.png")}
          alt='profie'
        />
        <span>
          <h2>BIO</h2>
          <p>
            My name is Filip Mihajlovski. I'm 27 years old. Based in Kumanovo,
            N. Macedonia.
          </p>
          <p>
            I'm Full Stack JavaScript Developer. Prefer working with MERN stack.
          </p>
          <p>Follow the link to view or download my CV</p>
          <p>
            <Link href='/cv'>
              <a>Get CV</a>
            </Link>
          </p>
        </span>
      </section>
      <div className={styles.info}>
        <section>
          <ul>
            <h2>Frameworks/Libraries</h2>
            <li>Proficient with React and Express</li>
            <li>Used Angular and Handlebars</li>
            <li>REST API</li>
          </ul>
        </section>
        <section>
          <ul>
            <h2>Databases</h2>
            <li>MongoDB from the NoSQL Databases.</li>
            <li>MySQL from SQL Databases.</li>
          </ul>
        </section>
        <section>
          <ul>
            <h2>Features</h2>
            <li>Implementation of Payment systems for E-commerce.</li>
            <li>Adding Admin Panel to websites.</li>
            <li>Authentication and Authorization</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default About;
