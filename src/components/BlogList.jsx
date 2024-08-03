import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the new CSS file

const BlogList = () => {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  return (
    <div className="blog-list">
      <h2>Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
