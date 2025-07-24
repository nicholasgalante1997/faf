import React, { useEffect, useRef, memo } from "react";
import ReactMarkdown from "react-markdown";
import { gsap } from "gsap";

import { heroContent, impactStats, programsPreview } from "../content/home";

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (heroRef.current) {
      tl.fromTo(
        heroRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      );
    }

    if (statsRef.current) {
      tl.fromTo(
        statsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5",
      );
    }
  }, []);

  return (
    <div className="page home-page">
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            <ReactMarkdown>{heroContent}</ReactMarkdown>
            <div className="hero-actions">
              <a href="/donate" className="btn btn-primary">
                Donate Now
              </a>
              <a href="/programs" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <span>🌟</span>
              <p>Hero Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <ReactMarkdown>{impactStats}</ReactMarkdown>
        </div>
      </section>

      <section className="programs-preview">
        <div className="container">
          <ReactMarkdown>{programsPreview}</ReactMarkdown>
          <div className="text-center">
            <a href="/programs" className="btn btn-outline">
              View All Programs
            </a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>
              Your support helps us reach more communities and change more lives. Every donation, no matter
              the size, creates ripples of positive change.
            </p>
            <a href="/donate" className="btn btn-primary btn-large">
              Start Helping Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default memo(Home);
