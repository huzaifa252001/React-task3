import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import './App.css';
import './components/styles.css'; // Import the new CSS file

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/create">Create Blog</Link></li>
            <li><Link to="/blogs">View Blogs</Link></li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/" exact element={<BlogList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
