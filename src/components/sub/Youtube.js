import Layout from "../common/Layout";
import { useState, useRef } from "react";
import Popup from "../common/Popup";
import { useSelector } from 'react-redux';


export default function Youtube() {
    const Vids = useSelector(store => store.youtubeReducer.youtube);
    const pop = useRef(null);
    const [Index, setIndex] = useState(0);

    return (
        <>
            <Layout name={"Youtube"}>

                <div className="section-wrap">
                    {Vids.map((data, index) => {

                        const tit = data.snippet.title;
                        const desc = data.snippet.description;
                        const date = data.snippet.publishedAt;

                        return (
                            <article key={index}>
                                <div className="pic" onClick={() => {
                                    pop.current.open();
                                    setIndex(index)
                                }}>
                                    <img
                                        src={data.snippet.thumbnails.standard.url}
                                        alt={data.snippet.title} />
                                </div>
                                <h3>{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}</h3>
                                <div className="txt">
                                    <p>{desc.length > 100 ? desc.substr(0, 100) : desc}</p>
                                    <span>{date.split('T')[0]}</span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Layout>

            <Popup ref={pop}>
                {Vids.length !== 0 && (
                    <iframe src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`} frameBorder='0'></iframe>
                )}
            </Popup>

        </>

    );
}  