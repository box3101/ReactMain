import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from "react";

function News() {

  const Pics = useSelector(store => store.flickrReducer.flickr);

  return (
    <>
      <main id="news" className="news">
        <div className="inner">
          <h1>PRODUCTION</h1>
          <ul>
            {Pics.map((pic, idx) => {
              if (idx >= 60) return;
              return (
                <li key={pic.id}>
                  <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} />
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    </>
  )
}

export default News;