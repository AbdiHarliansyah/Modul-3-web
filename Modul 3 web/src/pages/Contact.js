import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
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

  const onAboutClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onSocialIconsClick = useCallback(() => {
    window.open("https://www.instagram.com");
  }, []);

  const onSocialIcons1Click = useCallback(() => {
    window.open("https://www.discord.com");
  }, []);

  const onSocialIcons2Click = useCallback(() => {
    window.open("https://www.gitthub.com");
  }, []);

  return (
    <div className="contact1" data-animate-on-scroll>
      <div className="navs1">
        <div className="logo1" />
        <div className="nav-links1">
          <button className="home2" onClick={onHomeClick}>
            Home
          </button>
          <button className="home2" onClick={onAboutClick}>
            About
          </button>
          <button className="home2">Contact</button>
          <div />
        </div>
        <img className="pngwing-1-icon1" alt="" src="/pngwing-1@2x.png" />
      </div>
      <img className="image-1-icon1" alt="" src="/image-11@2x.png" />
      <div className="footer-container">
        <div className="footer1">
          <img
            className="social-icons3"
            alt=""
            src="/social-icons.svg"
            onClick={onSocialIconsClick}
          />
          <img
            className="social-icons4"
            alt=""
            src="/social-icons1.svg"
            onClick={onSocialIcons1Click}
          />
          <img
            className="social-icons5"
            alt=""
            src="/social-icons2.svg"
            onClick={onSocialIcons2Click}
          />
        </div>
      </div>
      <div className="contact-page">Contact Page</div>
    </div>
  );
};

export default Contact;
