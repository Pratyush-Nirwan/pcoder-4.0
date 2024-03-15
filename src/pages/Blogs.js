import React, { useState, useEffect } from "react";
import '../css/Blogs.css'
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("https://dev.to/api/articles?username=pratyushnirwan");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    function href(url) {
        window.open(url, "_blank");
    }

    // Extract the most recent blog from the array
    const [mostRecentBlog, ...otherBlogs] = blogs;

    return (
        <div id="blogs-main-div">
            <div id="recent-blog-div">
                <h1 className="title" id="main-blog-title">BLOGS</h1>
                {mostRecentBlog && (
                    <div id="recent-blog" onClick={() => href(mostRecentBlog.url)}>
                        <img id="recent-img" alt="most recent blog" src={mostRecentBlog.cover_image}></img>
                        <div id="recent-text">
                            <h1 className="title" id="recent-title">{mostRecentBlog.title.toUpperCase()}</h1>
                            <div className="tag-list">
                                {mostRecentBlog.tag_list.map(tag => (
                                    <p className="text blog-tag" key={tag}>{tag.toUpperCase()}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div id="other-blogs-div">
                {/* Map through other blogs and display them */}
                {otherBlogs.map(blog => (
                    <div className="other-blog" key={blog.id} onClick={() => href(blog.url)}>
                        <h2 className="title other-blog-title" >{blog.title.toUpperCase()}</h2>
                        <div className="tag-list">
                            {blog.tag_list.map(tag => (
                                <p className="text other-tag" key={tag}>{tag.toUpperCase()}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
