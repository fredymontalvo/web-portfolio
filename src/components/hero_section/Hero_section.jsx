import "./hero_section_style.css";

import { Typewriter } from "react-simple-typewriter";

export function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <h2 className="my-name">Fredy Montalvo</h2>
          <h1 className="my-prof">Full-Stack Web developer</h1>
          <h2 className="type-writer">
            <Typewriter
              words={["Transforming Ideas Into Code </>"]}
              loop={0}
              cursor
              cursorStyle="._"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={10000}
            />
          </h2>
        </div>
        <div className="head-img"></div>
      </div>
    </>
  );
}
