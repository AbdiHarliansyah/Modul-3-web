import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
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

  const onAboutClick = useCallback(() => {
    navigate("/about");
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
    <div className="home" data-animate-on-scroll>
      <div className="navs">
        <div className="logo" />
        <div className="nav-links">
          <button className="about">Home</button>
          <button className="about" onClick={onAboutClick}>
            About
          </button>
          <button className="about" onClick={onContactClick}>
            Contact
          </button>
          <div />
        </div>
        <img className="pngwing-1-icon" alt="" src="/pngwing-1@2x.png" />
      </div>
      <img className="image-1-icon" alt="" src="/image-11@2x.png" />
      <div className="mount-fuji">Mount Fuji</div>
      <div className="standing-at-3776">
        Standing at 3,776 meters, Mt. Fuji is the tallest peak in Japan, the
        result of volcanic activity that began approximately 100,000 years ago.
        Today, Mt. Fuji and the surrounding area are a popular recreational
        destination for hiking, camping and relaxation.
      </div>
      <div className="footer-wrapper">
        <div className="footer">
          <img
            className="social-icons"
            alt=""
            src="/social-icons.svg"
            onClick={onSocialIconsClick}
          />
          <img
            className="social-icons1"
            alt=""
            src="/social-icons1.svg"
            onClick={onSocialIcons1Click}
          />
          <img
            className="social-icons2"
            alt=""
            src="/social-icons2.svg"
            onClick={onSocialIcons2Click}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
