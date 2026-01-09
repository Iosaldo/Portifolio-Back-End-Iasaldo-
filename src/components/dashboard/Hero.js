import Image from "next/image";
import "../../app/home.css";

export default function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="hero-title">Iasaldo</h1>
        <span className="hero-badge">Back-End Developer Student</span>
        <div className="intro-block">
          <p className="intro-text">
            Building REST APIs with Node.js, Express, and SQL through hands-on
            projects.
          </p>
          <a href="#projectos" className="minimal-btn">
            View Projects
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="avatar-wrapper">
          <Image
            src="/avatar.jpg"
            alt="Profile"
            width={420}
            height={560}
            style={{
              objectFit: "cover",
              filter: "grayscale(1)",
              background: "#111",
              display: "block",
              transform: "rotate(-12deg)",
            }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
