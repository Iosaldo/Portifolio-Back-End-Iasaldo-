import "../../app/home.css";

export default function Education() {
  return (
    <section className="education-section">
      <div className="edu-left">
        <h2 className="edu-title">Education</h2>
      </div>
      <div className="edu-right">
        <div className="edu-grid">
          <div className="edu-column">
            <h4 className="edu-place">Codecademy - Back-End Engineer</h4>
            <ul>
              <li>REST APIs</li>
              <li>Databases</li>
              <li>Authentication & Authorization (in progress) </li>
              <li>Backend fundamentals</li>
            </ul>
          </div>
          <div className="edu-column">
            <h4 className="edu-place">IFAC - Information Technology</h4>
            <ul>
              <li>
                Technical and Professional Course in Information Technology
              </li>
              <li>Jul 2021 – Out 2022</li>
            </ul>
          </div>
          <div className="edu-column">
            <h4 className="edu-place">National High School of São Tomé</h4>
            <ul>
              <li>Secondary Education, Science and Technology</li>
              <li>Set 2015 – Set 2018</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
