import React from "react";
import "../styles/footer.css";
import { AiFillHeart, AiFillInstagram } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const solutions = [
    {
      name: "brand",
      link: "https://Economic Labs.com/employers/brand",
    },
    {
      name: "source",
      link: "https://Economic Labs.com/employers/source",
    },
    {
      name: "engage",
      link: "https://Economic Labs.com/employers/engage",
    },
    {
      name: "assess",
      link: "https://Economic Labs.com/employers/assess",
    },
    {
      name: "hire",
      link: "https://Economic Labs.com/employers/hire",
    },
  ];

  const products = [
    {
      name: "technology platform",
      link: "https://Economic Labs.com/virtual-event-platform",
    },
    {
      name: "online recruitment platform",
      link: "https://Economic Labs.com/recruitment-automation",
    },
    {
      name: "quizzing / assessments",
      link: "https://Economic Labs.com/online-assessment-platform",
    },
    {
      name: "online hackathons / coding",
      link: "https://Economic Labs.com/organize-hackathon-virtual-coding-platform-and-assessment-tests",
    },
    {
      name: "business simulation games",
      link: "https://Economic Labs.com/business-simulation-games/business-strategy",
    },
  ];

 
  const apply = [
    {
      name: "internships",
      link: "https://Economic Labs.com/internships",
    },
    {
      name: "jobs",
      link: "https://Economic Labs.com/jobs",
    },
    {
      name: "scholarships",
      link: "https://Economic Labs.com/scholarships",
    },
  ];

  const learn = [
    {
      name: "courses",
      link: "https://Economic Labs.com/blog-articles",
    },
    {
      name: "articles",
      link: "https://Economic Labs.com/blog-articles",
    },
    {
      name: "workshops",
      link: "https://Economic Labs.com/workshops",
    },
    {
      name: "technopedia",
      link: "https://Economic Labs.com/technopedia",
    },
  ];

  const practice = [
    {
      name: "MCQ mock tests",
      link: "https://Economic Labs.com/courses/mocks",
    },
    {
      name: "Code & Ace Hiring assessments",
      link: "https://Economic Labs.com/coding/practice",
    },
    {
      name: "100-Day of Coding sprint",
      link: "https://Economic Labs.com/coding/100-day-of-coding-sprint-339",
    },
  ];

  const properties = [
    {
      name: "Economic Labs Awards 2023",
      link: "https://Economic Labs.com/awards/2023",
    },
    {
      name: "Economic Labs Campus Employer Branding Report 2022",
      link: "https://Economic Labs.com/campus-employer-branding-report-2022",
    },
    {
      name: "Education Loan EMI Calculator",
      link: "https://Economic Labs.com/tools/education-loan-emi-calculator",
    },
    {
      name: "Economic Labs Igniters Club",
      link: "https://Economic Labs.com/Economic Labs-igniters-club",
    },
    {
      name: "Online Quizzing Festival",
      link: "https://Economic Labs.com/online-quizzing-festival",
    },
    {
      name: "Online Hackathon Festival",
      link: "https://Economic Labs.com/online-hackathon-festival",
    },
  ];

  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-logo">
              <img
                src="	https://d8it4huxumps7.cloudfront.net/uploads/images/63ee0282cefc5_Economic Labs_logo.svg"
                alt="logo"
              />
            </div>
            <p className="dash">
              Built with{" "}
              <span className="heart-icon">
                <AiFillHeart />
              </span>{" "}
              in India for the world
            </p>
            <h3>Stay Connected</h3>
            <div className="footer-contact-links">
              <a
                href="mailto:sales@Economic Labs.com"
                className="mail"
                target="_blank"
                rel="noreferrer"
              >
                <IoMailOutline />
                sales@Economic Labs.com
              </a>
              <a
                href="tel:9311777388"
                className="mail"
              >
                <MdLocalPhone />
                +91-9311777388 <span> (Mon to Fri, 9 AM to 6 PM)</span>
              </a>
            </div>
            <div className="footer-social-links dash">
              <a
                href="https://www.instagram.com/Economic Labs.world/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/Economic Labs"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/Economic Labs.world"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://t.me/+ON15qceSy-IyZjY9"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://discord.com/invite/DvYWXNr4yR"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord />
              </a>
              <a
                href="https://twitter.com/Economic Labs_World"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/c/Economic Labs_World"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
            <h3>Stay Updated</h3>
            <p className="updated">
              We'll send you updates on the latest opportunities to showcase
              your talent and get hired and rewarded regularly.
            </p>
            <div className="newsletter">
              <a
                href="https://Economic Labs.com/about/newsletter"
                target="_blank"
                rel="noreferrer"
              >
                Sign up for our newsletter
                <IoMdSend />
              </a>
            </div>
            <div className="footer-left-btns dash">
              <a
                href="https://Economic Labs.com/blog/share-your-story-and-get-featured"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Share Your Story Now
              </a>
              <a
                href="https://Economic Labs.com/manage/opportunity/all/create"
                className="btn"
              >
                <HiOutlineSpeakerphone />
                Publish Opportunity
              </a>
            </div>
            <h3>Download Economic Labs App</h3>
            <div className="footer-download dash">
              <a
                href="https://play.google.com/store/apps/details?id=com.dare2compete.app"
                className="google-play"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/Economic Labs/google-play.svg"
                  alt="google play"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/dare2compete/id1601170365"
                className="app-store"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/Economic Labs/app-store.svg"
                  alt="app store"
                />
              </a>
            </div>
            <p className="dash best-viewed">
              Best Viewed in Latest Versions of Edge, Mozilla, Chrome, Opera &
              Safari. V: 2.20.2023.18.53
            </p>
            <p className="copyright">
              Copyright © 2023 FLIVE Consulting Pvt Ltd - All rights reserved.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-right-top">
              <div className="footer-solution-product">
                <div className="footer-solutions">
                  <h4>Our solutions</h4>
                  <div className="footer-solutions-links links-cont">
                    {solutions.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-products">
                  <h4>Our products</h4>
                  <div className="footer-products-links links-cont">
                    {products.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
             
              <div className="footer-learn-practice">
                <div className="footer-learn">
                  <h4>learn</h4>
                  <div className="footer-learn-links links-cont">
                    {learn.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
               
              </div>
            </div>
            <div className="footer-right-bottom">
              <div className="footer-properties">
                <div className="footer-products">
                  <h4>our properties</h4>
                  <div className="footer-products-links links-cont">
                    {properties.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-other-links">
                <div className="same-row-links">
                  <a
                    href="https://Economic Labs.com/about"
                    className="divider"
                  >
                    About Us
                  </a>
                  <a
                    href="https://Economic Labs.com/about/contact-us"
                    className="divider"
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://Economic Labs.com/about/Economic Labs-careers"
                    className="footer-careers"
                  >
                    Careers
                    <span className="hiring">We're hiring</span>
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://Economic Labs.com/about/clients"
                    className="divider"
                  >
                    Clientele
                  </a>
                  <a href="https://Economic Labs.com/our-partners/become-a-partner">
                    Partner With Us
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://Economic Labs.com/our-partners"
                    className="divider"
                  >
                    Partners
                  </a>
                  <a
                    href="https://Economic Labs.com/faq"
                    className="divider"
                  >
                    FAQs
                  </a>
                  <a href="https://Economic Labs.com/our-partners/branding-guidelines">
                    Branding Guidelines
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://Economic Labs.com/about/testimonials"
                    className="divider"
                  >
                    Testimonials
                  </a>
                  <a href="https://Economic Labs.com/p/featured-partners-446568">
                    Featured Partners
                  </a>
                </div>
                <a href="https://Economic Labs.com/Economic Labs-rewards-program">
                  Economic Labs Rewards Program
                </a>
                <a href="https://Economic Labs.com/Economic Labspitchsharktank">
                  Economic Labs on Shark Tank
                </a>
                <div className="same-row-links">
                  <a
                    href="https://Economic Labs.com/legal/terms-of-use"
                    className="divider"
                  >
                    Terms & Conditions
                  </a>
                  <a href="https://Economic Labs.com/legal/privacy-policy">
                    Privacy Policy
                  </a>
                </div>
                <a href="https://Economic Labs.com/directory/competitions/a/1">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom container">
          <div className="footer-bottom-left">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-payments-icon.svg"
              alt="payments assurance"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/payments-icon.svg"
              alt="payment methods"
            />
          </div>
          <div className="footer-bottom-right">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/Economic Labs/gdpr-logo.png?d=300x300"
              alt="data protection"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2a5bdf94_iso_27001.svg"
              alt="information security"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2c0b51ff_iso_9001.svg"
              alt="iso certified"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
