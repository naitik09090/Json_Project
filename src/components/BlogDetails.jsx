import React, { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import "../css/Blog.css";

const BlogDetails = () => {
  const { id } = useParams();

  const post = useMemo(() => {
    return blogData.find((p) => p.id === id);
  }, [id]);

  useEffect(() => {
    if (post) {
      document.title = `${post.seo.title} | JSONVIEWER.io`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.seo.description);
      }
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", post.seo.keywords.join(", "));
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", window.location.href);
      }
    }
    // Scroll to top of main container on post change
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [post]);

  const suggestions = useMemo(() => {
    return [...blogData]
      .filter((p) => p.id !== id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, [id]);

  if (!post) {
    return (
      <div className="blog-detail-container" style={{ textAlign: "center" }}>
        <h1 className="blog-detail-title">Post Not Found</h1>
        <p>Return to our <Link to="/blog">Blog listing</Link> page.</p>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-detail-container">

        <Link to="/blog" className="blog-back-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Back to Blog
        </Link>

        <article className="blog-article">
          <header className="blog-detail-header">
            <span className="blog-detail-category">{post.category}</span>
            <h1 className="blog-detail-title">{post.title}</h1>
            <div className="blog-detail-meta">
              <span className="blog-detail-author">By {post.author}</span>
              <span className="blog-detail-divider">•</span>
              <span className="blog-detail-date">{post.date}</span>
            </div>
          </header>

          <img
            src={post.image}
            alt={post.title}
            className="blog-detail-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80";
            }}

          />


          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* <div style={{ marginTop: "60px", padding: "40px", background: "#f8fafc", borderRadius: "24px" }}>
        <h3 style={{ margin: "0 0 16px" }}>Share this guide</h3>
        <p style={{ color: "#64748b", margin: "0 0 24px" }}>Help other developers by sharing this tutorial.</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert("Sharable link copied to clipboard!");
          }}
          style={{
            padding: "12px 24px",
            background: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "opacity 0.2s"
          }}
          onMouseOver={(e) => e.target.style.opacity = "0.9"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          Copy Link
        </button>
      </div> */}

        <section style={{ marginTop: "80px", borderTop: "1px solid #e2e8f0", paddingTop: "60px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "32px", color: "#0f172a" }}>More to Explore</h2>
          <div className="blog-grid">
            {suggestions.map((suggestion) => (
              <Link to={`/blog/${suggestion.id}`} key={suggestion.id} className="blog-card">
                  <img
                    src={suggestion.image}
                    alt={suggestion.title}
                    className="blog-card-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80";
                    }}

                  />

                  <div className="blog-card-content">
                    <span className="blog-card-category">{suggestion.category}</span>
                    <h3 className="blog-card-title">{suggestion.title}</h3>
                    <p className="blog-card-excerpt">{suggestion.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-author">{suggestion.author}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
      <footer className="static-footer">
        © {new Date().getFullYear()} JSONVIEWER.io — All Rights Reserved.
      </footer>
    </div>

  );
};

export default BlogDetails;
