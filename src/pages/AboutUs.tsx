import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <main className="about-us">
      <h1>About us</h1>

      <article>
        <section aria-label="Who we are section">
          <h2>Who we are?</h2>
          <p>
            I'm a passionate front-end web developer dedicated to my craft.
            Sincerity and quality are my basic principles.I approach each
            project with the goal of producing a high-performing, SEO-friendly,
            and accessible website / web App with an good UI/UX design. I adhere
            to industry best practices to ensure your project's success
            InshaaAllah.
            <br /> <br /> Here are some of the technologies I'm proficient in:
            <br /> <br />
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Sass</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Material UI/Joy UI</li>
              <li>Figma for UI design</li>
              <li>Git & GitHub for version control</li>
              <li>Firebase for backend</li>
            </ul>
            <br />I look forward to the opportunity to collaborate with you and
            bring to you something special InshaaAllah."
          </p>
        </section>
        <section aria-label="Services section">
          <h2>Services</h2>
          <ul>
            <li>Font-End web development</li>
            <li>Full-Stack web development using Firebase</li>
            <li>Web error fix or optimization</li>
          </ul>
        </section>
        <section aria-label="Certificates section">
          <h2>Certificates</h2>
          <ul>
            <li>Basic web Development (1-month)</li>
            <li>Introduction to Front-End Development </li>
            <li>Programming with JavaScript</li>
            <li>Version Control</li>
            <li>HTML and CSS in depth </li>
            <li>React Basics</li>
            <li>Advanced React</li>
            <li>Principles of UI/UX Design</li>
            <li>Front-End Developer Capstone</li>
            <li>Coding Interview Preparation</li>
            <li>Meta Front-End Developer (final certificate)</li>
          </ul>
        </section>
        <section aria-label="More information section">
          <h2>More Information</h2>
          <ul>
            <li>
              <Link to="#">Resume</Link>
            </li>
            <li>
              <Link to="#">Portfolio website</Link>
            </li>
          </ul>
        </section>
        <section aria-label="Contact info section">
          <h2>Contact</h2>
          <ul>
            <li>
              <Link to="#">+355 68 839 3968</Link>
            </li>
            <li>
              <Link to="#">info.fl29@gmail.com</Link>
            </li>
            <li>
              <Link to="#">Up Work</Link>
            </li>
            <li>
              <Link to="#">Linkedin</Link>
            </li>
            <li>
              <Link to="#">Facebook</Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default AboutUs;
