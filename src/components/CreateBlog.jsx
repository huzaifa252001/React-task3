import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import the new CSS file

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const newBlog = { id: Date.now(), title, content };
    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    navigate('/blogs');
  };

  return (
    <div className="create-blog">
      <h2>Create Blog</h2>
      <input 
        type="text" 
        placeholder="Blog Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={handleSave}>Save Blog</button>
    </div>
  );
};

export default CreateBlog;
