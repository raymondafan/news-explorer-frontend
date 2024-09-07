import aboutImage from "../../assets/raymond.svg";
import "./About.css";
const About = ({}) => {
  return (
    <section className="about">
      <div className="about__container">
        <img src={aboutImage} alt="about" className="about__image" />
        <div className="about__content">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            I'm Raymond Afan, a web developer with expertise in creating dynamic
            and responsive applications using technologies like JavaScript,
            React, Node.js, and MongoDB. Through my experience with TripleTen,
            I've honed my skills in full-stack development, problem-solving, and
            project management, working on real-world projects that required
            implementing best practices in software engineering.
          </p>
          <p className="about__description-2">
            At TripleTen, I learned to build efficient, user-friendly web
            applications and gained hands-on experience with modern development
            tools and frameworks. I am passionate about crafting clean,
            maintainable code and helping clients turn their ideas into reality
            through innovative digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
