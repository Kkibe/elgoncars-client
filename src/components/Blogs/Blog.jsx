import React from 'react';
import './Blog.scss';
const Blog = ({post}) => {
    return (
        <a href={post.link} className='blog' title='post'>
            <div className="image-container">
                <img src={post.image_url} alt="" />
            </div>
            <h2>{post.title}</h2>
            <div className="content">
                {post.description}
            </div>
            <div className="info">
                <span>By: {post.creator ? post.creator[0] : post.source_id}</span>
                <span>{new Date().toDateString(post.pubDate)}</span>
            </div>
        </a>
    );
}
export default Blog;