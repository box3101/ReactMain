// useRef , useEffect 사용
import { useRef, useEffect } from 'react'

//매개변수를 받아옴
function Layout(props) {

  // useRef 로 특정 DOM 선택하기
  const frame = useRef(null);

  // useEffect 라는 Hook 을 사용하여 컴포넌트가 마운트 됐을 때(처음 나타났을 때), 언마운트 됐을 때(사라질 때), 그리고 업데이트 될 때(특정 props가 바뀔 때) 특정 작업을 처리하는 방법

  useEffect(() => {
    // 마운트되었을때
    frame.current.classList.add("on");
    console.log("컴포넌트가 화면에 나타나");
    return () => {
      // 언마운트되었을때
    }
  }, []);

  return (
    <section className={`content ${props.name}`} ref={frame}>
      <figure></figure>
      <div className="inner">
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </section>
  )
}

export default Layout;

/*
useEffect

- 컴포넌트가 마운트 되었을때
=> 처음나타났을때 <---
=> props로 받은 값을 컴포넌트의 로컬상태로 설정할때
=> 외부 API요청이 있을때
=> setInterval , setTimeout 통해 작업이 예약될때

- 컴포넌트가 언마운트 되었을때
=> 사라질때
=> setInterval , setTimeout 통해 작업이 클리어 되었을때
=> 라이브러리 인스턴스가 제거됐을때

- 컴포넌트가 업데이트 될때
=> 특정 props가 바뀔때


*/