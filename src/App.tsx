import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import { routes } from "./routes";

function ErrorPage() {
  return <p>Error 404</p>;
}

interface AppProps {
  initialRoute?: string;
}

const componentMap = {
  Home,
  About,
  Programs,
  Impact,
  Donate,
  Contact,
};

export default function App({ initialRoute = "/" }: AppProps) {
  const [currentRoute, setCurrentRoute] = useState(initialRoute);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };

    // Handle client-side navigation
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName.toUpperCase() === "A" && target.origin === window.location.origin) {
        e.preventDefault();
        const path = target.pathname;
        window.history.pushState({}, "", path);
        setCurrentRoute(path);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handlePopState);
      document.addEventListener("click", handleLinkClick);

      return () => {
        window.removeEventListener("popstate", handlePopState);
        document.removeEventListener("click", handleLinkClick);
      };
    }
  }, []);

  const currentRouteData = routes.find((route) => route.path === currentRoute) || routes[0];
  const Component = currentRouteData
    ? componentMap[currentRouteData.component as keyof typeof componentMap]
    : ErrorPage;

  return (
    <div className="app">
      <Header currentRoute={currentRoute} />
      <main>
        <Component />
      </main>
      <Footer />
    </div>
  );
}
