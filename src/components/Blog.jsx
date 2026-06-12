import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
// import AdComponent from "./AdComponent.jsx";
import { blogData } from "../data/blogData";
import "../css/Blog.css";
import "../css/StaticPages.css";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "Blog - JSONVIEW.ME | Modern JSON Guide & Tools";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our technical blog for in-depth tutorials on JSON, data structures, and the latest developer tools. Stay updated with modern data serialization patterns.");
    }
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    return ["All", ...new Set(blogData.map((post) => post.category))];
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return blogData;
    return blogData.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  // Determine featured post (always the first post, shown only when "All" category is selected)
  const showFeatured = selectedCategory === "All" && blogData.length > 0;
  const featuredPost = showFeatured ? blogData[0] : null;
  const displayGridPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="blog-container">
      <header className="static-hero">
        <div className="hero-decor-line"></div>
        <h1>Mastering Data Architecture</h1>
        <p>Expert guides on JSON formatting, API performance, and modern developer workflows.</p>
      </header>

      <div className="blog-grid-wrapper">

        {/* Category Filter Pills */}
        <div className="blog-category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post Card */}
        {showFeatured && featuredPost && (
          <div className="featured-section">
            <h2 className="section-subtitle">Featured Article</h2>
            <Link to={`/blog/${featuredPost.id}`} className="featured-blog-card">
              <div className="featured-image-wrapper">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="featured-blog-image"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <div className="featured-blog-content">
                <span className="blog-card-category">{featuredPost.category}</span>
                <h2 className="featured-blog-title">{featuredPost.title}</h2>
                <p className="featured-blog-excerpt">{featuredPost.excerpt}</p>
                <div className="featured-blog-meta">
                  <div className="author-info">
                    <span className="blog-card-author">{featuredPost.author}</span>
                    <span className="blog-meta-dot">•</span>
                    <span className="blog-card-date">{featuredPost.date}</span>
                  </div>
                  <span className="blog-read-time">{featuredPost.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Grid listing */}
        <div className="listing-section" style={{ marginTop: showFeatured ? "50px" : "10px" }}>
          {showFeatured && <h2 className="section-subtitle">Latest Articles</h2>}

          {displayGridPosts.length > 0 ? (
            <div className="blog-grid">
              {displayGridPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
                  <div className="blog-card-image-wrapper">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-card-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-card-category">{post.category}</span>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <div className="author-info">
                        <span className="blog-card-author">{post.author}</span>
                        <span className="blog-meta-dot">•</span>
                        <span className="blog-card-date">{post.date}</span>
                      </div>
                      <span className="blog-read-time">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-posts-found">
              <p>No articles found matching this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
