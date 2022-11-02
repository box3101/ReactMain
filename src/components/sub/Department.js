//npm i axios
import Layout from "../common/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Department() {
    // 절대경로
    const path = process.env.PUBLIC_URL;
    // members 상태관리

    // useState 기본값은 []로
    const [Geobug, setGeobug] = useState([]);
    const [Members, setMembers] = useState([]);

    // 화면 처음 시작시
    useEffect(() => {
        // members.json 정보를 가져와 json 화
        axios.get(`${path}/DB/geobug.json`).then((json) => {
            //setMembers에 값을 집어넣음
            setGeobug(json.data.geobug);
        });
        axios.get(`${path}/DB/members.json`).then((json) => {
            //setMembers에 값을 집어넣음
            setMembers(json.data.members);
        });
    }, []);

    return (
        <Layout name={'Department'}>
            <h2>Dancers</h2>
            <p>LACHICA</p>
            <div className="img">
                <img src={`${path}/img/dp01.jpg`} />
            </div>
            <p>거북선</p>
            <div className="img">
                <img src={`${path}/img/dp02.jpg`} />
            </div>
            <p>DANCER</p>
            {/* Members 배열의 반복 */}
            {Members.map((data, index) => {
                // 값 호출
                return (
                    <article key={index}>
                        <div className="inner">
                            <div className="pic">
                                <img src={`${path}/img/${data.pic}`} alt={data.name} />
                            </div>
                            <h3>{data.name}</h3>
                            <p className="name">{data.krName}</p>
                        </div>
                    </article>
                );
            })}
            {Geobug.map((data, index) => {
                // 값 호출
                return (
                    <article key={index}>
                        <div className="inner">
                            <div className="pic">
                                <img src={`${path}/img/${data.pic}`} alt={data.name} />
                            </div>
                            <h3>{data.name}</h3>
                            <p className="name">{data.krName}</p>
                        </div>
                    </article>
                );
            })}


        </Layout>
    );
}