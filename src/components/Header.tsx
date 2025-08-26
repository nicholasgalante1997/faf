import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { routes } from "../routes";

interface HeaderProps {
  currentRoute: string;
}

function Header({ currentRoute }: HeaderProps) {
  const navRef = useRef<HTMLElement>(null);

  const publicRoutes = routes.filter(route => route.public);

  useEffect(() => {
    if (navRef.current) {
      // Animate header on mount
      gsap.fromTo(
        navRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      );
    }
  }, []);

  return (
    <header className="header">
      <nav className="nav" ref={navRef}>
        <div className="nav-container">
          <a href="/" className="logo">
            <span className="logo-text">Friends Already Foundation</span>
          </a>

          <ul className="nav-links">
            {publicRoutes.map((route) => (
              <li key={route.path}>
                <a href={route.path} className={`nav-link ${currentRoute === route.path ? "active" : ""}`}>
                  {route.title}
                </a>
              </li>
            ))}
          </ul>

          <a href="/blog" className="donate-btn">
            Learn More
          </a>
        </div>
      </nav>
    </header>
  );
}

export default memo(Header);
