import React, { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
// import AdComponent from "./AdComponent.jsx";
import { blogData } from "../data/blogData";
import "../css/Blog.css";

const BlogDetails = () => {
  const { id } = useParams();

  const post = useMemo(() => {
    return blogData.find((p) => p.id === id);
  }, [id]);

  // Extract TOC items dynamically from content H2s
  const tocItems = useMemo(() => {
    if (!post || !post.content) return [];
    // Match h2 tags and extract content
    const regex = /<h2>(.*?)<\/h2>/g;
    const items = [];
    let match;
    while ((match = regex.exec(post.content)) !== null) {
      const text = match[1];
      const linkId = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      items.push({ id: linkId, text });
    }
    return items;
  }, [post]);

  // Inject IDs to H2 tags in the HTML string dynamically
  const processedContent = useMemo(() => {
    if (!post || !post.content) return "";
    let content = post.content;
    return content.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
      const linkId = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      return `<h2 id="${linkId}">${text}</h2>`;
    });
  }, [post]);

  useEffect(() => {
    if (post) {
      document.title = `${post.seo.title} | JSONVIEW.ME`;
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

        <div className="blog-detail-layout">
          {/* Left Column: Article Content */}
          <article className="blog-article">
            <header className="blog-detail-header">
              <span className="blog-detail-category">{post.category}</span>
              <h1 className="blog-detail-title">{post.title}</h1>
              <div className="blog-detail-meta">
                <span className="blog-detail-author">By {post.author}</span>
                <span className="blog-meta-dot">•</span>
                <span className="blog-detail-date">{post.date}</span>
                <span className="blog-meta-dot">•</span>
                <span className="blog-read-time">{post.readTime}</span>
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

            {/* Blog Post Mid Ad */}
            {/* <div style={{ margin: "2rem 0", background: "transparent" }}>
              <AdComponent adSlot="BLOG_DETAILS_MID_SLOT_ID" />
            </div> */}

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </article>

          {/* Right Column: Sticky Table of Contents */}
          {tocItems.length > 0 && (
            <aside className="blog-toc-sidebar">
              <div className="blog-toc-card">
                <h3>Table of Contents</h3>
                <nav>
                  <ul>
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          )}
        </div>

        {/* Blog Post Bottom Ad */}
        {/* <div style={{ marginTop: "4rem", background: "transparent" }}>
          <AdComponent adSlot="BLOG_DETAILS_BOTTOM_SLOT_ID" />
        </div> */}

        <section style={{ marginTop: "80px", borderTop: "1px solid #e2e8f0", paddingTop: "60px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "32px", color: "#0f172a" }}>More to Explore</h2>
          <div className="blog-grid">
            {suggestions.map((suggestion) => (
              <Link to={`/blog/${suggestion.id}`} key={suggestion.id} className="blog-card">
                <div className="blog-card-image-wrapper">
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
                </div>

                <div className="blog-card-content">
                  <span className="blog-card-category">{suggestion.category}</span>
                  <h3 className="blog-card-title">{suggestion.title}</h3>
                  <p className="blog-card-excerpt">{suggestion.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="author-info">
                      <span className="blog-card-author">{suggestion.author}</span>
                      <span className="blog-meta-dot">•</span>
                      <span className="blog-card-date">{suggestion.date}</span>
                    </div>
                    <span className="blog-read-time">{suggestion.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;
