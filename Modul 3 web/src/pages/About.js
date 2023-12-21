import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onSocialIconsClick = useCallback(() => {
    window.open("https://www.instagram.com");
  }, []);

  const onSocialIcons1Click = useCallback(() => {
    window.open("https://www.discord.com");
  }, []);

  const onSocialIcons2Click = useCallback(() => {
    window.open("https://www.github.com");
  }, []);

  return (
    <div className="about2" data-animate-on-scroll>
      <div className="navs2">
        <div className="logo2" />
        <div className="nav-links2">
          <button className="home3" onClick={onHomeClick}>
            Home
          </button>
          <button className="home3">About</button>
          <button className="home3" onClick={onContactClick}>
            Contact
          </button>
          <div />
        </div>
        <img className="pngwing-1-icon2" alt="" src="/pngwing-1@2x.png" />
      </div>
      <img className="image-1-icon2" alt="" src="/image-11@2x.png" />
      <div className="about-page">About Page</div>
      <div className="footer-frame">
        <div className="footer2">
          <img
            className="social-icons6"
            alt=""
            src="/social-icons.svg"
            onClick={onSocialIconsClick}
          />
          <img
            className="social-icons7"
            alt=""
            src="/social-icons1.svg"
            onClick={onSocialIcons1Click}
          />
          <img
            className="social-icons8"
            alt=""
            src="/social-icons2.svg"
            onClick={onSocialIcons2Click}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
