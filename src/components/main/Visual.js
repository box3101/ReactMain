import React from 'react';
// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'

function Vids() {
    return (
        <>
            <main id="vids" className='myScroll'>
                <div className="inner">
                    <iframe id="ytplayer" src="https://www.youtube.com/embed/kYRh3hxfD_s?autoplay=1&loop=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </main>
        </>
    );
}
export default Vids;