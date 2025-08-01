import React, { memo } from "react";
import type { BlogPostMeta } from "../types";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

function BlogCard({ post, featured = false }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className={`blog-card ${featured ? "blog-card--featured" : ""}`}>
      <a href={`/blog/${post.slug}`} className="blog-card-link">
        <div className="blog-card-image">
          <img src={post.author.image} alt={post.author.name} loading="lazy" />
          <div className="blog-card-overlay">
            <span className="read-more">Read Story</span>
          </div>
        </div>

        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className="blog-card-date">{formatDate(post.publishedAt)}</span>
            <span className="blog-card-read-time">{post.readTime} min read</span>
          </div>

          <h3 className="blog-card-title">{post.title}</h3>

          <p className="blog-card-excerpt">{post.excerpt}</p>

          <div className="blog-card-author">
            <div className="author-avatar">
              <img src={post.author.image} alt={post.author.name} loading="lazy" />
            </div>
            <div className="author-info">
              <span className="author-name">{post.author.name}</span>
              {post.author.university && <span className="author-university">{post.author.university}</span>}
              {post.author.location && <span className="author-location">{post.author.location}</span>}
            </div>
          </div>

          <div className="blog-card-tags">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}

export default memo(BlogCard);
