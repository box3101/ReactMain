import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";

export default function Visual() {

    const path = process.env.PUBLIC_URL;

    return (
        <figure id="visual" className="visual">
            <div className="visual__img">
                <img src={`${path}/img/main-visual.png`} alt="visual-img" />
            </div>
            <div className="visual__aside">
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faBlog} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faPortrait} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="visual__txt">
                <h1>
                    Cy_React_Portfolio
                </h1>
                <p>
                    <span className="bar"></span>
                    a creative agency
                </p>
            </div>
        </figure >
    )
}
