import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css'; // Import the new CSS file

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blog = blogs.find(blog => blog.id === parseInt(id));

  return (
    <div className="blog-details">
      <h2>{blog?.title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: blog?.content }} />
    </div>
  );
};

export default BlogDetails;
