import React from "react";

const Blog = () => {
  return (
    <section id="blog" className="py-5">
      <div className="container">
        <h2 className="text-center">My Blog</h2>
        <p className="lead">Check out my latest thoughts and articles on web development and technology.</p>
        <ul>
          <li><a href="/blog-post-1">How I Built My Personal Website with React</a></li>
          <li><a href="/blog-post-2">The Future of Web Development</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
