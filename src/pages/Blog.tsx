import React, { memo } from "react";
import { getAllBlogPosts } from "../content/blog/posts";
import BlogCard from "../components/BlogCard";

function Blog() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="page blog-page">
      <div className="container">
        {/* Header Section */}
        <div className="blog-header">
          <h1>Friend Partner Stories</h1>
          <p className="blog-description">
            Real stories from our community members who are making a difference in their own lives and the
            lives of others. Each story represents courage, growth, and the power of human connection.
          </p>
        </div>

        {/* Featured Posts Section */}
        <div className="featured-posts">
          <h2>Featured Stories</h2>
          <div className="featured-posts-grid">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
          </div>
        </div>

        {/* All Posts Section */}
        <div className="all-posts">
          <h2>All Stories</h2>
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="blog-cta">
          <h2>Share Your Story</h2>
          <p>
            Do you have a story of growth, connection, or positive change? We'd love to hear from you and
            potentially feature your journey.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Share Your Story
            </a>
            <a href="/programs" className="btn btn-outline">
              Learn About Our Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Blog);
