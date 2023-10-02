import React from "react";
import "./Homepage.css";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import Loader1 from "./Loader1";
import SocialMedia from "./SocialMedia";
import reactLogo from "../logos/icons8-react-100.png";
import jsLogo from "../logos/icons8-javascript-30.png";
import mongoDBLogo from "../logos/icons8-mongodb-48.png";
import nodeJSLogo from "../logos/icons8-nodejs-48.png";
import htmlLogo from "../logos/icons8-html-50.png";
import pythonLogo from "../logos/icons8-python-50.png";
import sqlLogo from "../logos/icons8-sql-50.png";
import cssLogo from "../logos/icons8-css-50.png";
import expressLogo from "../logos/icons8-express-js-50.png";
import jsonLogo from "../logos/icons8-json-50.png";
import messi1 from "../logos/messiPic1.png";
import messi2 from "../logos/messiPic2.png";
import realEstate1 from "../logos/realEstate1.png";
import realEstate2 from "../logos/realEstate2.png";
import farmers1 from "../logos/farmers1.png";
import farmers2 from "../logos/farmers2.png";
import goalTicket1 from "../logos/goalTicket1.png";
import goalTicket2 from "../logos/goalTicket2.png";
import cv1 from "../logos/cv1.png";
import cv2 from "../logos/cv2.png";
import endProject1 from "../logos/endProject1.png";
import endProject2 from "../logos/endProject2.png";

const Homepage = () => {
  const technologies = [
    { name: "React.js", logo: reactLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JSON", logo: jsonLogo },
    { name: "Node.js", logo: nodeJSLogo },
    { name: "MongoDB", logo: mongoDBLogo },
    { name: "Python", logo: pythonLogo },
    { name: "SQL", logo: sqlLogo },
    { name: "Express", logo: expressLogo },
  ];

  const projects = [
    {
      id: 1,
      name: "The Messi Store",
      description:
        "An all HTML project I build 3 days after strating to code, featuring a Leo Messi about and shirt shopping website ",
      image: messi1,
      image2: messi2,
    },
    {
      id: 2,
      name: "Real Estate Website",
      description:
        "My first React.js project featuring a Real Estate website for home seekers",
      image: realEstate2,
      image2: realEstate1,
    },
    {
      id: 3,
      name: "Farmers Depot",
      description:
        "A hakaton project done in 32 straight hours of work from scratch trying to connect consumers to farmers and their fresh crop easier",
      image: farmers1,
      image2: farmers2,
    },
    {
      id: 4,
      name: "Goal Ticket",
      description:
        "A footbal website to view your favorite teams information and upcoming games, buy game and seasonal tickets and view recent news",
      image: goalTicket1,
      image2: goalTicket2,
    },
    {
      id: 5,
      name: "CV Generator",
      description:
        "My first complete full-stack project featuring a CV generator website where you can create, edit and download various CV's",
      image: cv1,
      image2: cv2,
    },
    {
      id: 6,
      name: "Real Estate Project Dashboard",
      description:
        "A Real estate project managing dashboard that offers an all-encompassing solution that revolutionizes the way projects are managed. Working with one of the biggest construction companies in Israel, and pitched to others.",
      image: endProject1,
      image2: endProject2,
    },
  ];
  return (
    <>
      <div className="homepage">
        <div className="sidebar">
          <img
            src={jsLogo}
            alt="Node.js Logo"
            className="floating-logo"
            id="javaScript-logo"
          />
          <img
            src={mongoDBLogo}
            alt="Node.js Logo"
            className="floating-logo"
            id="nodejs-logo"
          />
          <img
            src={nodeJSLogo}
            alt="Node.js Logo"
            className="floating-logo"
            id="react-logo"
          />
          <img
            src={htmlLogo}
            alt="React Logo"
            className="floating-logo"
            id="javaScript-logo"
          />
          <img
            src={pythonLogo}
            alt="Node.js Logo"
            className="floating-logo"
            id="nodejs-logo"
          />
          <img
            src={reactLogo}
            alt="Node.js Logo"
            className="floating-logo"
            id="react-logo"
          />
          <img
            src={sqlLogo}
            alt="Node.js Logo"
            className="floating-logo"
            id="javaScript-logo"
          />
          <img
            src={cssLogo}
            alt="JavaScript Logo"
            className="floating-logo"
            id="nodejs-logo"
          />
        </div>
        <div className="content">
          <div className="about-section">
            <h1 className="my-name">Lavi Reichman</h1>
            <h2 className="my-title">
              Software Engineer, Full Stack Developer
            </h2>
          </div>
        </div>
      </div>
      <div className="technologies-container">
        <img id="image1" src="./src/logos/codeBack.png" alt="" />
        <div className="technologies-box">
          <h2 id="technologies-header">Technologies</h2>
          <ul className="technologies-list">
            {technologies.map((tech) => (
              <li key={tech.name} className="technology">
                <img
                  src={tech.logo}
                  alt={`${tech.name} Logo`}
                  className="technology-logo"
                />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="projects-div">
        <div className="project-top">
          <div className="projects-description1">
            <h2 id="projects-h2">My Projects</h2>
            <br />
            <p id="projects-p">
              This section provides a snapshot of the diverse projects I have
              created, either alone or as part of a team, that have been
              instrumental in shaping my journey as a developer. From crafting
              user-friendly interfaces to constructing robust backend systems,
              each project encapsulates a unique blend of creativity and
              technical expertise. Here's a showcase of some various projects
              I've created:
            </p>
          </div>
          <div id="loader-div">
            <Loader1 />
          </div>
        </div>
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-block" key={project.id}>
              <Link to={`${project.id}`}>
                <div className="project-image">
                  <img
                    id="first-project-pic"
                    src={project.image}
                    alt={project.name}
                  />
                  <img
                    id="second-project-img"
                    src={project.image2}
                    alt={project.name}
                  />
                </div>
              </Link>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="expreience-container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="experience-header">Experience</h1>
        <br />
        <br />
        <br />
        <div className="experience-content">
          <div className="experience-block">
            <h1 className="first-exp-h1">
              Combat Engineer, Commander And Sergeant
            </h1>
            <h1 className="first-exp-h1">2020-2023</h1>
          </div>
          <br />
          <br />
          <div className="experience-block">
            <h1 className="first-exp-h1">
              700+ Hours Full Stack developer bootcamp, CyberPro Ramat Gan
            </h1>
            <h1 className="first-exp-h1">2023</h1>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="contact-container">
        <div className="contact-head">Please Feel Free To Contact Me:</div>
        <h1 id="email">Lavireichman@gmail.com</h1>
        <div className="social-media">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Homepage;
