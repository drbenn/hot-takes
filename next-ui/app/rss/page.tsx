"use client"

import React, { useEffect, useState } from 'react';
import fetchRSSFeed from '../utils/fetchRss';

export default function Rss() {
    const [feed, setFeed] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const rssFeed = await fetchRSSFeed('https://rss.nytimes.com/services/xml/rss/nyt/US.xml');
        //   setFeed(rssFeed);
        // console.log(rssFeed);
        
        } catch (error) {
          console.error('Error fetching RSS data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    if (!feed) {
      return <div>RSS</div>;
    }
  
    return (
    //   <div>
    //     <h1>{feed.title}</h1>
    //     {feed.items.map((item, index) => (
    //       <div key={index}>
    //         <a href={item.link} target="_blank" rel="noopener noreferrer">
    //           {item.title}
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    <div>
        YOLO
    </div>
    )
    // return (
    //   <main>
    //       <div>RSS</div>
    //   </main>
    // )
  }
  