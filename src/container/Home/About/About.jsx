import "./about.style.css";
import MyImg from "../../../assets/imgs/about-me1.png";
import Navbar from "../../../components/nav-bar/nav-bar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-me">
          <div className="text-div">
            <h1 className="about-title">About Me</h1>
            <p className="about-fredy">
              Hello, I am Fredy Montalvo, an experienced hospitality manager
              with over 10 years of experience in leadership and project
              management. As a restaurant manager, I led teams, trained staff,
              introduced a new point-of-sale system, and organized events. I
              have a passion for photography, and during the pandemic, I
              discovered my love for IT. Now, I am a full-stack web developer
              with skills in HTML, CSS, JavaScript and React. I am ready to
              deliver creative digital solutions. Together, we can achieve success!!
            </p>
          </div>
          <div className="photo-div">
            <img src={MyImg} alt="profile pic" className="profile-pic" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
