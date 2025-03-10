import React from "react";
import "../styles/homehero.css";

const HomeHero = () => {
  const images = [
    {
      title: "learn",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-learn.png?d=324x406",
      link: "https://lms-websitee.vercel.app/",
    },
    {
      title: "practice",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-practice.png?d=324x406",
      link: "",
    },
    {
      title: "mentorships",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-mentorships.png?d=324x406",
      link: "",
    },
   
    {
      title: "jobs",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-jobs.png?d=324x406",
      link: "",
    },
    {
      title: "blogs",
      image:
        "https://cdn.unstop.com/uploads/images/home/home-hero-blogs.png?d=324x406",
      link: "",
    },
  ];

  return (
    <section className="home-hero">
      <div className="home-hero-container container">
        <div className="home-hero-left">
          <h1>
            Connecting
            <br />
            <strong>Talent, Colleges, Recruiters</strong>
          </h1>
          <p>
            Explore opportunities from across the globe to learn, showcase
            skills, gain CV points, & get hired by your dream company.
          </p>
        </div>
        <div className="home-hero-right">
          <div className="home-hero-right-images">
            {images.map((ele) => {
              return (
                <div
                  className="home-hero-image"
                  key={ele.image}
                >
                  <span>{ele.title}</span>
                  <a href={ele.link}>
                    <img
                      src={ele.image}
                      alt={ele.title}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
