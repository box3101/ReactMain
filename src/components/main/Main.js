import Header from "../common/Header";
import News from "./News";
import Pics from "./Pics";
import Vids from "./Vids";
import Visual from "./Visual";
import Message from "./Message";
import Review from "./Review";

function Main() {

  return (
    <>

      <Header type='main' />
      <Visual />
      <News />
      <Vids />
      <Message />
      <Review />
      <Pics />
    </>
  );
}

export default Main;