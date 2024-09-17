import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import './About.css';



function About() {

    const { theme } = useContext(ThemeContext);
    return (
      <div
        className="about"
        id="about"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="line-styling">
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-circle"
            style={{ backgroundColor: theme.primary }}
          ></div>
          <div
            className="style-line"
            style={{ backgroundColor: theme.primary }}
          ></div>
        </div>
        <div className="about-body">
          <div className="about-description">
            <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
            {/* <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p> */}

            <p style={{ color: theme.tertiary80 }}>
              I am Emmanuel Sasere, a passionate web developer with experience
              building startups like{" "}
              <a
                style={{ color: theme.primary }}
                href="https://www.studystern.com"
                target="_blank"
              >
                StudyStern
              </a>{" "}
              and{" "}
              <a
                style={{ color: theme.primary }}
                href="talenhttps://talenvo.co"
                target="_blank"
              >
                Talenvo
              </a>
              . I've also contributed to a real estate firm, developing web apps
              to enhance their operations.
              <br />
              <br />
              My volunteer work with NGOs like{" "}
              <a
                style={{ color: theme.primary }}
                href="https://jetpack.switchcon.org"
                target="_blank"
              >
                SwitchCon
              </a>{" "}
              has further honed my skills in creating web solutions for
              conferences. These experiences have taught me the value of
              responsibility, commitment, teamwork, and accountability. In my
              leisure time, I enjoy reading, writing educational{" "}
              <a
                style={{ color: theme.primary }}
                href="https://learnwithsasere.hashnode.dev"
                target="_blank"
              >
                blogs
              </a>{" "}
              for software engineers, and watching movies. My guiding principle
              is "precept upon precept, line upon line." Currently, I'm
              expanding my skills by learning Python to delve into machine
              learning and AI implementation.
            </p>
          </div>
          <div className="about-img">
            <img
              src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default About
