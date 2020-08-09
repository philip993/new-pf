import styles from "../styles/cv.module.scss";

const CV = () => (
  <div className={styles.cv}>
    <header className={styles.header}>
      <span className={styles.spanLeft}>
        <h1>FILIP MIHAJLOVSKI</h1>
        <h4>JavaScript Developer</h4>
      </span>
      <span className={styles.spanRight}>
        <p className={styles.street}>Ul. Oktomvriska Revolucija 49/7</p>
        <p className={styles.city}>Kumanovo</p>
        <h4 className={styles.number}>+389 70 262 797</h4>
        <h4 className={styles.mail}>f.mihajlovski93@gmail.com</h4>
      </span>
    </header>
    <body className={styles.body}>
      <aside>
        <section>
          <h2>PROFILE</h2>
          <span>
            Dedicated and hard-working individual with little over 3 years of
            experience in financial accounting. Driven by a desire to change
            careers, in the past two years, I’ve been learning JavaScript, both
            client and server-side. Flexible in working environments, having
            worked in a medium-sized company, subsidiary of an international
            corporation. Focused on continuous learning and improving my skill
            set, by learning new technologies and implementing them in new
            projects.
          </span>
        </section>
        <section>
          <h2>EXPERIENCE</h2>

          <span>
            <h4>Vitek Makedonija DOO / Assistant Accountant</h4>
            <h5 className={styles.duration}>
              May 2017 - Present, Skopje, North Macedonia
            </h5>
            My everyday routine as assistant accountant consists of receiving,
            checking and recording any incoming financial documents. I work
            independently on my daily tasks, thoroughly planning my schedule,
            providing detail checkups, analysis and reports, completing
            important tasks within expected time frame. My daily tasks include:
            <ul>
              <li>
                Recording financial documents in ERP system, Microsoft Dynamic
                NAV.
              </li>
              <li>
                Following changes for all accounts and recording bank statements
                accordingly.
              </li>
              <li>
                Planning payment schedule for domestic and foreign vendors.
              </li>
              <li>
                Detailed analysis of company incomes/expenses and projecting
                expected budget.
              </li>
              <li>Monthly control of inventory with ERP system.</li>
              <li>
                Quarterly checkups with outside consultants and preparing VAT
                reports.
              </li>
              <li>
                Corresponding with auditors at the end of the fiscal year
                providing any reports needed.
              </li>
            </ul>
          </span>
        </section>
        <section>
          <h2>EDUCATION</h2>
          <span>
            <h4>
              Faculty of Economics at University of St. Cyril and Methodius /{" "}
            </h4>
            <h4 className={styles.department}>
              Bachelor degree in Economics - Management department
            </h4>
            <h5 className={styles.department}>
              2013 - 2018, Skopje, North Macedonia{" "}
            </h5>
          </span>
        </section>
        <section>
          <h2>SKILLS</h2>
          <h4>Professional Skill Set:</h4>
          <span>JavaScript (ES6), MySQL, MongoDB, Stripe</span>
          <h4>Frameworks and Libraries:</h4>
          <span>
            React, Node.js, Express, Handlebars, Bootstrap, Material-UI, SASS,
            Redux, Sequelize, Mongoose
          </span>
          <h4>Tools:</h4>
          <span>Trello, InVision Studio, Postman</span>
          <h4>Version Control:</h4>
          <span>Git + GitHub</span>
          <h4>CMS:</h4>
          <span>Strapi, AdminBro</span>
          <h4>Operating Systems:</h4>
          <span>Linux (Unix), Windows</span>
        </section>
      </aside>
    </body>
  </div>
);
export default CV;
