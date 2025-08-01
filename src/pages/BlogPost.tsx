import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug } from "../content/blog/posts";

interface BlogPostProps {
  slug: string;
}

function BlogPost({ slug }: BlogPostProps) {
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="page blog-post-page">
        <div className="container">
          <div className="blog-post-not-found">
            <h1>Story Not Found</h1>
            <p>Sorry, we couldn't find the story you're looking for.</p>
            <a href="/blog" className="btn btn-primary">
              Back to Stories
            </a>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="page blog-post-page">
      <div className="container">
        {/* Back Navigation */}
        <nav className="blog-post-nav">
          <a href="/blog" className="back-link">
            ← Back to Stories
          </a>
        </nav>

        {/* Article Header */}
        <header className="blog-post-header">
          <div className="blog-post-meta">
            <span className="blog-post-date">{formatDate(post.publishedAt)}</span>
            <span className="blog-post-read-time">{post.readTime} minute read</span>
          </div>

          <h1 className="blog-post-title">{post.title}</h1>

          <div className="blog-post-author-section">
            <div className="author-avatar-large">
              <img src={post.author.image} alt={post.author.name} />
            </div>
            <div className="author-details">
              <h3 className="author-name">{post.author.name}</h3>
              {post.author.university && <p className="author-university">{post.author.university}</p>}
              {post.author.location && <p className="author-location">{post.author.location}</p>}
            </div>
          </div>

          <div className="blog-post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="blog-post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Article Footer */}
        <footer className="blog-post-footer">
          <div className="blog-post-cta">
            <h3>Inspired by this story?</h3>
            <p>Join our community and help us support more people like {post.author.name}.</p>
            <div className="cta-buttons">
              <a href="/donate" className="btn btn-primary">
                Support Our Mission
              </a>
              <a href="/contact" className="btn btn-outline">
                Share Your Story
              </a>
            </div>
          </div>

          <div className="blog-post-share">
            <h4>Share this story</h4>
            <div className="share-buttons">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-twitter"
              >
                🐦 Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-facebook"
              >
                📘 Facebook
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-linkedin"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default memo(BlogPost);
