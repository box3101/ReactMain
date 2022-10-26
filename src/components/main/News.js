function News() {
  const path = process.env.PUBLIC_URL;

  return (
    <main id="news" className="news">
      <div className="inner p0-50">
        <div className="news__row-wrap">
          <div className="news__row">
            <div className="news__img">
              <img src={`${path}/img/news-img.png`} alt="news-img" />
            </div>
            <div className="news__txt-wrap">
              <div className="inner com-type01">
                <span className="num">01</span>
                <h2>
                  ABOUT ME
                </h2>
                <h3>
                  publishing a website require great teamwork and responsibility.
                  While traveling around the world, I met people from different countries and
                  learned how to get along with them. Also, I found what I like. Designing and
                  coding is endless difficult field but I always ENJOY my work!
                </h3>
                <a href="#">
                  view capabilities
                </a>
              </div>
            </div>
          </div>
          <div className="news__row">
            <div className="lef">
              <div className="news__img">
                <img src={`${path}/img/news-img02.jpg`} alt="news-img" />
              </div>
              <div className="news__txt-wrap">
                <div className="inner com-type01 typ2">
                  <span className="num">02</span>
                  <h2>
                    WHAT I DO
                  </h2>
                  <h3>
                    HTML5+CSS3
                    With HTML5, CSS3 and Java Script, I code mobile web,
                    responsive web, and websites for PC.
                    JAVASCRIPT
                    I am working on Javascript very hard. I can use Jquery
                    plugins and revise the code.
                  </h3>
                  <a href="#">
                    view capabilities
                  </a>
                </div>
              </div>
            </div>
            <div className="ref">
              <div className="news__img">
                <img src={`${path}/img/new-img03.png`} alt="news-img" />
              </div>
              <div className="news__txt-wrap">
                <div className="inner com-type01 typ3">
                  <span className="num">03</span>
                  <h2>
                    VISION
                  </h2>
                  <h3>
                    There have been people who have shown that there is no impossibility for mankind. They did not give up even though the limits were approaching with the will that they could do in spite of the surrounding breeze, and they repeatedly failed to gain valuable lessons and achieved the goal in the end. By the accomplishments of such people, mankind has been further developed into one footprint. My goal is to be a front-end developer who can start with a new web publisher, but be called a first-class developer.
                  </h3>
                  <a href="#">
                    view capabilities
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default News;