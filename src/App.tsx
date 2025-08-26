import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Impact from "./pages/Impact";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import CreationStory from "./pages/CreationStory";
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
  Blog,
  Impact,
  Donate,
  Contact,
  CreationStory
};

export default function App({ initialRoute = "/" }: AppProps) {
  const [currentRoute, setCurrentRoute] = useState(initialRoute);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };

    // Handle client-side navigation
    const handleLinkClick = (e: Event) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (anchor && anchor.origin === window.location.origin) {
        e.preventDefault();
        const path = anchor.pathname;
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

  // Check if this is a blog post route
  const isBlogPostRoute = currentRoute.startsWith("/blog/") && currentRoute !== "/blog";

  if (isBlogPostRoute) {
    const slug = currentRoute.replace("/blog/", "");
    return (
      <div className="app">
        <Header currentRoute={currentRoute} />
        <main>
          <BlogPost slug={slug} />
        </main>
        <Footer />
      </div>
    );
  }

  const publicRoutes = routes.filter(route => route.public);
  const currentRouteData = publicRoutes.find((route) => route.path === currentRoute) || publicRoutes[0];
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
