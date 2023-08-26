import React from "react";
import "./ProjectPage.css";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import messi1 from "../logos/ScreenshotMessi1.png";
import messi2 from "../logos/ScreenshotMessi2.png";
import messi3 from "../logos/ScreenshotMessi3.png";
import messiVideo from "../logos/messiVideo.mp4";
import realEstate1 from "../logos/realEstate1.png";
import realEstate2 from "../logos/realEstate2.png";
import realEstate3 from "../logos/realEstate3.png";
import realEstateVideo from "../logos/realEstateVideo.mp4";
import farmers1 from "../logos/farmers1.png";
import farmers2 from "../logos/farmers2.png";
import farmers3 from "../logos/farmers3.png";
import goalTicket1 from "../logos/goalTicket1.png";
import goalTicket2 from "../logos/goalTicket2.png";
import goalTicket3 from "../logos/goalTicket3.png";
import cv1 from "../logos/cv1.png";
import cv2 from "../logos/cv2.png";
import cv3 from "../logos/cv3.png";
import cvVideo from "../logos/CV.mp4";

const ProjectPage = () => {
  let { id } = useParams();
  const projects = [
    {
      id: 1,
      name: "The Messi Store",
      description:
        "An all HTML project I build 3 days after strating to code, featuring a Leo Messi about and shirt shopping website ",
      description2:
        "Within a mere three days of embarking on my coding journey, I proudly crafted the Messi Store—a testament to my rapid learning and budding skills. This dynamic website showcases my proficiency in front-end development, offering a glimpse into the illustrious career and impressive stats of football icon Leo Messi. With pages dedicated to his achievements and history, users can explore his journey through various clubs. Additionally, the site features a unique twist—an interactive 'buy' page where visitors can playfully 'purchase' Messi shirts from different teams he has graced. This project encapsulates my early dedication to coding and reflects the potential for growth in this exciting field.",
      image: messi1,
      image2: messi2,
      image3: messi3,
      video: messiVideo,
      tech1: "HTML",
      tech2: "CSS",
      tool1: "Visual Studio Code",
    },
    {
      id: 2,
      name: "Real Estate Website",
      description:
        "My first React.js project featuring a Real Estate website for home seekers",
      description2: "",
      image: realEstate2,
      image2: realEstate1,
      image3: realEstate3,
      video: realEstateVideo,
      tech1: "React.js",
      tech2: "JSON",
      tech3: "CSS",
      tool1: "Github",
      tool2: "Visual Studio Code",
    },
    {
      id: 3,
      name: "Farmers Depot",
      description:
        "A hakaton project done in 32 straight hours of work from scratch trying to connect consumers to farmers and their fresh crop easier",
      description2: "",
      image: farmers1,
      image2: farmers2,
      image3: farmers3,
      video: cvVideo,
      tech1: "React.js",
      tech2: "fireBase",
      tech3: "CSS",
      tech4: "JSON",
      tool1: "Github",
      tool2: "Visual Studio Code",
      tool3: "bootStrap",
    },
    {
      id: 4,
      name: "Goal Ticket",
      description:
        "A footbal website to view your favorite teams information and upcoming games, buy game and seasonal tickets and view recent news",
      description2: "",
      image: goalTicket1,
      image2: goalTicket2,
      image3: goalTicket3,
      video: cvVideo,
      tech1: "React.js",
      tech2: "JSON",
      tech3: "CSS",
      tool1: "Github",
      tool2: "Visual Studio Code",
      tool2: "bootStrap",
      tool2: "Mui",
    },
    {
      id: 5,
      name: "CV Generator",
      description:
        "My first complete full-stack project featuring a CV generator website where you can create, edit and download various CV's",
      description2:
        " I proudly present my first completely Full-Stack project: a CV Generator. As a testament to my growing skill set, this project combines React.js and Node.js to provide an interactive platform for users to select from a range of templates and craft their own personalized CVs. These CVs can be effortlessly tailored, edited, removed, and exported as PDF files, elevating the job application process to a new level of professionalism. Through this endeavor, I not only showcase my technical abilities but also gain invaluable insights into the intricacies of full-stack application development.",
      image: cv2,
      image2: cv1,
      image3: cv3,
      video: cvVideo,
      tech1: "React.js",
      tech2: "Node.js",
      tech3: "MongoDB",
      tech4: "CSS",
      tool1: "Github",
      tool2: "Mui",
      tool3: "Visual Studio Code",
      tool4: "Postman",
    },
  ];

  const found = projects.find((element) => element?.id == id);

  let websiteUrl;
  
  if (found.id == "1") {
    websiteUrl = "https://the-leo-messi-store.netlify.app";
  } else if (found.id == "2") {
      websiteUrl = "https://master--lavis-cv-generator.netlify.app";
  }
  else {
    websiteUrl = "https://master--lavis-cv-generator.netlify.app";
  }
  
  return (
    <>
      <div className="project-page">
        <h1 className="project-title">{found.name}</h1>
        <div className="project-media">
          <div className="project-images-div">
            <img
              src={found.image2}
              alt="Project Screenshot 1"
              className="project-page-image"
              id="project-pic1"
            />
            <img
              src={found.image}
              alt="Project Screenshot 2"
              className="project-page-image"
              id="project-pic2"
            />
            <img
              src={found.image3}
              alt="Project Screenshot 3"
              className="project-page-image"
              id="project-pic3"
            />
          </div>
          <div>
            <iframe
              title="Project Video"
              width="560"
              height="315"
              src={found.video}
              className="project-video"
            ></iframe>
          </div>
        </div>
        <div className="project-description">
          <p>{found.description2}</p>
          
        </div>
        <div className="project-technologies">
          <h2>Technologies Used:</h2>
          <ul>
            <li>{found.tech1}</li>
            <li>{found.tech2}</li>
            <li>{found.tech3}</li>
            <li>{found.tech4}</li>
            <li>{found.tech5}</li>
            <li>{found.tech6}</li>
          </ul>
          <h2>Tools Used:</h2>
          <ul>
            <li>{found.tool1}</li>
            <li>{found.tool2}</li>
            <li>{found.tool3}</li>
            <li>{found.tool4}</li>
            <li>{found.tool5}</li>
          </ul>
        </div>
            <div className="git-and-website-btn">
          <a href="https://github.com/Lavi170/Messi-Shop">  <button className="git-button"> 
  <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <rect fill="none" height="24" width="24"></rect> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path> </g></svg>
  Show with Github 
  </button></a>
<a href={websiteUrl}><button class="to-website-btn">To Website</button></a>
            </div>
      </div>
      <Link
        to={
          found.id != "5"
            ? `/${Number(found.id) + 1}`
            : `/${Number(found.id) - 4}`
        }
        className="next-project-link"
      >
        Next Project &gt;
      </Link>
      <Link to="/" className="home-link">
        Home
      </Link>
    </>
  );
};

export default ProjectPage;
