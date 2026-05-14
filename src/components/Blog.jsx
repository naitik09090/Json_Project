import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import "../css/Blog.css";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - JSONVIEWER.io | Modern JSON Guide & Tools";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our technical blog for in-depth tutorials on JSON, data structures, and the latest developer tools. Stay updated with modern data serialization patterns.");
    }
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);


  return (
    <div className="blog-container">
      <div className="blog-grid-wrapper">
        <section className="blog-hero">
          <h1>Mastering Data Architecture</h1>
          <p>Expert guides on JSON formatting, API performance, and modern developer workflows.</p>

        </section>


        <div className="blog-grid">
          {blogData.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
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

              <div className="blog-card-content">
                <span className="blog-card-category">{post.category}</span>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-card-author">{post.author}</span>
                  <span className="blog-card-date">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer className="static-footer">
        © {new Date().getFullYear()} JSONVIEWER.io — All Rights Reserved.
      </footer>
    </div>

  );
};

export default Blog;
