import { text } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";
export default function Community() {

  const dummyPosts = [
    { title: 'HELLO5', content: 'Here comes desription in details' },
    { title: 'HELLO4', content: 'Here comes desription in details' },
    { title: 'HELLO3', content: 'Here comes desription in details' }, // enableUpdate : true
    { title: 'HELLO2', content: 'Here comes desription in details' },
    { title: 'HELLO1', content: 'Here comes desription in details' },
  ];

  /*
    보통 데이터들은 새로고침이나 재접속시 초기화 된다. <--- section srorage 브라우저를 종료하면 날라가는 휘발성 저장공간
  
    이러한 데이터를 기억하기 위해서는
    1. 서버로 보내서 데이터베이스에 저장
    2. 브라우저가 가지고 있는 임시저장공간 즉 localstro`age에 저장한다.
    브라우저를 청소하거나 직접 localstroge를 지우지 않는한 사라지지 않을 5GB정도 "텍스트"를 저장할 수 있음 */

  const getLocalData = () => {
    const dummyPosts = [
      { title: '아이유너무 이뻐요', content: '아이유 너무 이뻐요' },
      { title: '텍스트를 적어보아요', content: '텍스트를 적어보아요텍스트를 적어보아요텍스트를 적어보아요텍스트를 적어보아요' },
      // { title: 'HELLO3', content: 'Here comes desription in details' }, // enableUpdate : true
      // { title: 'HELLO2', content: 'Here comes desription in details' },
      // { title: 'HELLO1', content: 'Here comes desription in details' },
    ];

    const data = localStorage.getItem('post');

    if (data) {
      return JSON.parse(data);
    } else {
      return dummyPosts;
    }

  }

  const input = useRef(null);
  const textarea = useRef(null);
  const inputEdit = useRef(null);
  const textareaEdit = useRef(null);
  const [Posts, setPosts] = useState(getLocalData);
  const [Allowed, setAllowed] = useState(true);

  // 초기화
  const resetForm = () => {
    input.current.value = '';
    textarea.current.value = '';
    // 초기화 함수에서 해당모드 즉 해당 값을 참조했을 때만 초기화 되도록
    if (inputEdit.current) {
      inputEdit.current.value = '';
      textareaEdit.current.value = '';
    }
  }

  // 글 저장 함수
  const createPost = () => {

    //아무 내용이 없을땐 경고창
    if (!input.current.value.trim() || !textarea.current.value.trim()) {
      resetForm();
      return alert("제목과 본문을 모두 입력하세요.")
    }

    setPosts(
      [
        //전개연산자로 복사 후 새로운 값 추가  배열안의 객체 -> 새로운 배열을 추가
        {
          title: input.current.value,
          content: textarea.current.value,
        },
        ...Posts,
      ]
    );

    resetForm();
  }

  // 글 삭제 함수
  const deletePost = (index) => {
    console.log(index);

    // filter() 메서드는 자바스크립트 배열의 내장 함수.
    // 주어진 함수의 테스트를 통과하는 모든 요소를 모아 true이면 요소를 유지하고 false면 삭제.
    // 새로운 배열로 변환하기 때문에 전개연산자를 쓰지 않아도 불변성이 유지된다.
    // 처리할 대상이 되는 배열.filter((처리할 요소값, 요소의 인덱스)=>조건값 즉 테스트 값)
    //글삭제함수로 들어온 index는 밑에 delete버튼을 클릭한 특정 인덱스 값
    //idx는 filter안에서 반복을 돌리고 있는 순번을 나타난다.
    //idx !== index 는 지워야하는 인덱스가 반복을 돌리고 있는 인덱스와 같은 값이 되면 false 라는 요건을 충족 시켜야한다.
    setPosts(Posts.filter((post, idx) => idx !== index));

  }

  //글 수정 함수
  const enableUpdate = (index) => {
    if (!Allowed) return; // false이면 return으로 막음
    setAllowed(false);
    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) post.enableUpdate = true;
        return post;
      })
    );
  }


  const disableUpdate = (index) => {
    setAllowed(true);
    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) post.enableUpdate = false;
        return post;
      })
    );
  }


  //실제 글 수정함수
  const updatePost = (index) => {
    if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
      resetForm();
      return alert("수정할 제목과 본문을 모두 입력하세요.")
    }
    setAllowed(true);
    setPosts(
      Posts.map((post, idx) => {
        if (idx === index) {
          post.title = inputEdit.current.value;
          post.content = textareaEdit.current.value;
          post.enableUpdate = false;
        }

        return post;
      })
    );
  }

  //Posts의 값이 변경될때마다 콘솔 출력해서 우리가 볼 수 있는
  useEffect(() => {
    console.log(Posts);

    // 저장할 데이터들
    // 데이터를 스토리지에 저장하기 : setItem("key","value"); JSON.STRING메소드로 문자화 시켜서 저장
    localStorage.setItem("post", JSON.stringify(Posts));

  }, [Posts]);

  return (
    <Layout name={"Community"} >
      <div class="boxes">
        {/* <details id="bts">
          <summary>BTS<span class="realname">(Bangtan Boys)</span></summary>
          <ul class="info">
            <li>7-member boyband from South Korea, active since 2013</li>
            <li><a href="https://www.youtube.com/watch?v=GEIU_7v40Dw" target="_blank" rel="noopener noreferrer">Really</a> <a href="https://www.youtube.com/watch?v=sWuYspuN6U8" target="_blank" rel="noopener noreferrer">good</a> <a href="https://www.youtube.com/watch?v=_AlODdAInRY" target="_blank" rel="noopener noreferrer">at</a> <a href="https://www.youtube.com/watch?v=vJwHIpEogEY" target="_blank" rel="noopener noreferrer">dancing</a></li>
            <li>Has a <a href="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX" target="_blank" rel="noopener noreferrer">great discography</a> with <a href="https://genius.com/artists/Bts" target="_blank" rel="noopener noreferrer">~deep~ lyrics</a></li>
            <li>Won Top Social Artist at Billboard Music Awards 2017 &amp; 2018</li>
            <li>Has a literal army of fans called ARMY, who will flood your social media if you mention BTS, 0/10 do not recommend</li>
          </ul>
        </details>
        <details id="rm">
          <summary>RM<span class="realname">(Kim Namjoon)</span></summary>
          <ul>
            <li>Born in 1994, rapper of the group</li>
            <li>The only one in the group who speaks decent English</li>
            <li>Is supposedly very smart</li>
            <li>But also very clumsy and forgetful, prone to losing his passport, among other things</li>
            <li>Tend to sound fake deep but actually just very sweet and nice</li>
          </ul>
        </details> */}
        <details id="jin">
          <summary>JIN<span class="realname">(Kim Seokjin)</span></summary>
          <ul>
            <li>Born in 1992, vocalist + resident good looking guy of the group</li>
            <li>The only one in the group who goes to actual college, majored in acting</li>
            <li>Is very (VERY!!!) proud of his face</li>
            <li><a href="https://twitter.com/Shazam/status/998371896813993984/photo/1" target="_blank" rel="noopener noreferrer">Randomly blows kisses</a> to the camera and is very funny in general</li>
            <li>Constantly makes Korean dad jokes</li>
          </ul>
        </details>
        <details id="suga">
          <summary>SUGA<span class="realname">(Min Yoongi)</span></summary>
          <ul>
            <li>Born in 1993, rapper of the group</li>
            <li>Is very!!! passionate about music it's so endearing</li>
            <li>Has an amazing mixtape titled <a href="https://open.spotify.com/album/2nz4nG3HiOUkceO1NYvJnP" target="_blank" rel="noopener noreferrer">Agust D</a></li>
            <li>Looks like he'd rather die than be here 99% of the time</li>
            <li>Makes the <a href="https://giphy.com/gifs/yoongi-xYkOXpNXnjRsI" target="_blank" rel="noopener noreferrer">best</a> <a href="https://giphy.com/gifs/bangtan-boys-sonyeondan-22pSte4vdGvok" target="_blank" rel="noopener noreferrer">meme</a> <a href="https://giphy.com/gifs/kpop-gif-jungkook-3LJ7AQcTvYP8k" target="_blank" rel="noopener noreferrer">faces</a></li>
          </ul>
        </details>
        <details id="jhope">
          <summary>j-hope<span class="realname">(Jung Hoseok)</span></summary>
          <ul>
            <li>Born in 1994, rapper + dancer of the group</li>
            <li>Also the moodmaker of the group</li>
            <li>Probably the <a href="https://www.youtube.com/watch?v=dj42sqcbnCg" target="_blank" rel="noopener noreferrer">best dancer</a> you'd ever see in your lifetime</li>
            <li>Generally super happy and hyper and loud it's embarassing</li>
            <li>Scared of anything and everything</li>
          </ul>
        </details>
        <details id="jimin">
          <summary>Jimin<span class="realname">(Park Jimin)</span></summary>
          <ul>
            <li>Born in 1995, vocalist + dancer of the group</li>
            <li>Was a dance student, supposedly so good that his teachers urged him not to be in a boyband</li>
            <li>Really hardworking and tends to be hard on himself</li>
            <li>Tweets a lot</li>
            <li>Supposedly used to be top of the class, best student, etc</li>
          </ul>
        </details>
        <details id="v">
          <summary>V<span class="realname">(Kim Taehyung)</span></summary>
          <ul>
            <li>Born in 1995, vocalist + resident look-good-in-anything guy of the group</li>
            <li>Likes and sings jazzy and easy listening music</li>
            <li>Prone to wearing questionable fashion, but THAT FACE saves it</li>
            <li>Is a very sweet and soft kid but also gets annoyed easily</li>
            <li>Has a Leica and I am very jealous</li>
          </ul>
        </details>
        <details id="jungkook">
          <summary>Jungkook<span class="realname">(Jeon Jungkook)</span></summary>
          <ul>
            <li>Born in 1997, vocalist + dancer + baby of the group</li>
            <li>Is good at anything except studying</li>
            <li>Supposedly <a href="https://www.reddit.com/r/Overwatch/comments/7tymfj/massive_kpop_group_bts_12m_twitter_followers_just/" target="_blank" rel="noopener noreferrer">plays Overwatch like a pro</a></li>
            <li>Great at <a href="https://www.youtube.com/watch?v=PMEkmiQP5bg" target="_blank" rel="noopener noreferrer">editing videos</a> and <a href="https://www.youtube.com/watch?v=VLzRQCIZrmE" target="_blank" rel="noopener noreferrer">covering songs</a></li>
            <li>Joined the group when he was 16, considers himself raised by the group</li>
          </ul>
        </details>
      </div>


      <div className="wrap">
        <div className="inputBox">
          <input type="text" placeholder="제목을 입력하세요" ref={input} />
          <span className="err"></span>
          <br />
          <textarea cols="30" rows="5" placeholder="본문을 입력하세요." ref={textarea}>
          </textarea>
          <br />
          <div className="btnSet">
            <button onClick={createPost}>WRITE</button>
            <button onClick={resetForm}>CANCEL</button>
          </div>
        </div>

        <div className="showBox">
          {Posts.map((post, idx) => {
            return (
              <article key={idx}>
                {
                  post.enableUpdate ? (
                    <>
                      <div className="ediTxt">
                        <input type="text" defaultValue={post.title} ref={inputEdit} />
                        <br />
                        <textarea cols="30" rows="4" defaultValue={post.content} ref={textareaEdit}>

                        </textarea>
                      </div>
                      <div className="btnSet">
                        <button onClick={() => disableUpdate(idx)}>CanCel</button>
                        <button onClick={() => updatePost(idx)}>Update</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="txt">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                      </div>
                      <div className="btnSet">
                        <button onClick={() => enableUpdate(idx)}>EDIT</button>
                        <button onClick={() => deletePost(idx)}>DELEETE</button>
                      </div>
                    </>
                  )
                }
                {/* <div className="txt">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
              <div className="btnSet">
                <button onClick={() => enableUpdate(idx)}>EDIT</button>
                <button onClick={() => deletePost(idx)}>DELELTE</button>
              </div> */}
              </article>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}