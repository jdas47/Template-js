/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Music App",
    description:
      "Built using Html,Css and Js.With a user-friendly interface and robust features",
    url: "https://drive.google.com/drive/folders/1J3BkqMgmRSr1NqDk-R-n1Rpt7do-CR99?usp=sharing",
  },
  {
    title: "Text to Image",
    description:
      "text-to-image converter project created using HTML, CSS, and API requests.",
    url: "https://drive.google.com/drive/folders/1xi0PhedcbMN3L5iDGDsrFhWroziFYTsM?usp=sharing",
  },
  {
    title: "Image Processing",
    description:
      "Created using only C++ language.This project creates the negative output image of the input image.",
    url: "https://github.com/jdas47/Image-Processing.git",
  },
  {
    title: "Weather App",
    description:
      "weather app built with HTML, CSS,and JavaScript",
    url: "https://drive.google.com/drive/folders/1WxO9jZV6XEqwCqGWjV7YeyY1k-kjPFpU?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
