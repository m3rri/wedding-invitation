import { useRef, useEffect, useState } from 'react';
import Article from './components/atom/Article';
import Layout from "./components/template/Layout";
import Main from "./components/step/Main";

const App = ()=>{
  const [pageHeight, setPageHeight] = useState(700);

  const mainRef = useRef();

  useEffect(()=>{
    const {innerHeight} = window;
    setPageHeight(innerHeight);
  },[]);

  return <Layout>
      <Article height={pageHeight} forwardRef={mainRef}>
        <Main/>
      </Article>
      
    </Layout>;
}

export default App;
