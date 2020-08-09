import Layout from "../components/Layout/Layout";
import styles from "../styles/projects.module.scss";
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Button,
  CardActions,
} from "@material-ui/core";

const Projects = () => (
  <div className={styles.projects}>
    <Layout />
    <header className={styles.header}>
      <h1>Projects</h1>
    </header>
    <div className={styles.body}>
      <section className={styles.sectionOne}>
        <Card className={styles.card}>
          <h2>E-COMMERCE</h2>
          <CardContent>
            <ul>
              <h5>STACK</h5>
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
            </ul>
            <div className={styles.cardSpan}>
              <h5>Description</h5>
              <p disabled>
                E-Commerce website. Provides User Sign-Up/Login with
                authentication system. Logged User can browse through Shop. User
                can select Book and add into Cart. Can clear all Cart or any
                selected Book. User can create Order, view or pay the any Order
                on his account. Implemented payment system - STRAPI. Added SKU
                for Books.
              </p>
            </div>
          </CardContent>
          <div className={styles.btnArea}>
            <Button className={styles.btn}>
              <a href='https://github.com/philip993/e-com'>GitHub</a>
            </Button>
          </div>
        </Card>
      </section>

      <section className={styles.sectionTwo}>
        <Card className={styles.card}>
          <h2>EMPLOYEE RECORDS</h2>
          <CardContent>
            <ul>
              <h5>STACK</h5>
              <li>MySQL</li>
              <li>Express</li>
              <li>React</li>
              <li>Node</li>
            </ul>
            <div className={styles.cardSpan}>
              <h5>Description</h5>
              <p>
                Employee Records is HR application. First need to add Employee
                in the system in the registration form. Next you can add
                Contract to the Employee. You can check for days left of any
                contract, as well as update or terminate contract. Option to
                send Emails for extentions or termination of contract. Next you
                need to insert Employee into Shift schedule. Option to change
                status from active to inactive or change Shift. Automatically
                show number of Meals per shift and total Meals. Lists for
                Inactive and Fired Employees.
              </p>
            </div>
          </CardContent>
          <div className={styles.btnArea}>
            <Button className={styles.btn}>
              <a href='https://github.com/philip993/employee-rec'>GitHub</a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  </div>
);

export default Projects;
