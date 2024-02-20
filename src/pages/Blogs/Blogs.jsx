import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from '../../components/Blogs/Blog';
import './Blogs.scss';
import Loader from '../../components/Loader/Loader';

export default function Blogs() {
  const [posts, setPosts] = useState(null);
  const [fetching, setFetching] = useState(false);
  
  const url = 'https://newsdata.io/api/1/news?apikey=pub_1237237f365d7ff387104765b2874bb6ca618&q=locomotives'
  
  useEffect(() => {
    setFetching(true);
    axios.request(url).then(function (response) {
      setPosts(response.data.results.filter(item => {return item.image_url != null}));
      setFetching(false);
    }).catch(function (error) {
      console.error(error); 
      setFetching(false);
    });
  }, []);
  return (
    <div className='blogs'>
          {
            posts &&  posts.map((post) => {
              return <Blog key={post.link} post={post}/>
            }) 
          }
          {
            fetching && <><Loader /> <Loader /></>
          }
    </div>
  );
}