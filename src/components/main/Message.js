import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

function Message() {
  const path = process.env.PUBLIC_URL;
  const Members = useSelector((store) => store.memberReducer.members);
  const GeoBug = useSelector((store) => store.geobugReducer.geobug);

  return (
    <main id="Message" className="message">
      <div className="inner">
        <div className="tit-wrap">
          <h1>ARTIST</h1>
          <h2>Dancers</h2>
        </div>
        <div className='mem1'>
          <p>LACHICA</p>
          <section>
            {Members.map((data, index) => {
              return (
                <article key={index}>
                  <div className="inner">
                    <div className="pic">
                      <img src={`${path}/img/${data.pic}`} alt={data.name} />
                    </div>
                    <h3>{data.name}</h3>
                    <p>{data.krName}</p>
                  </div>
                </article>
              );
            })}
          </section>
        </div>
        <div className='mem2'>
          <p>거북선</p>
          <section>
            {GeoBug.map((data, index) => {
              return (
                <article key={index}>
                  <div className="inner">
                    <div className="pic">
                      <img src={`${path}/img/${data.pic}`} alt={data.name} />
                    </div>
                    <h3>{data.name}</h3>
                    <p>{data.krName}</p>
                  </div>
                </article>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  )
}

export default Message;
