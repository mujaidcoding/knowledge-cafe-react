import { useEffect } from 'react';
import { useState } from 'react';

const Blogs = () => {
  const [blogs, useBlogs] = useState([]);
  useEffect(() => {
    fetch('blog.json')
      .then((res) => res.json())
      .then((data) => useBlogs(data));
  }, []);
  return <div>
    
  </div>;
};

export default Blogs;
