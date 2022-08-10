import { useRef, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Article from './components/atom/Article';
import Layout from "./components/template/Layout";
import Main from "./components/step/Main";
import Greeting from "./components/step/Greeting";
import Gallery from "./components/step/Gallery";
import Calendar from "./components/step/Calendar";
import Map from "./components/step/Map";
import Message from './components/step/Message';
import SendHeart from './components/step/SendHeart';

const App = ()=>{
  const [pageHeight, setPageHeight] = useState(700);
  const [searchParams] = useSearchParams();
  const queryList = [...searchParams].filter(query=>query[0]==='type');
  const type = queryList.length===0 ? '46' : queryList.map(query=>query[1])[0];

  const mainRef = useRef();
  const greetingRef = useRef();
  const galleryRef = useRef();
  const calendarRef = useRef();
  const mapRef = useRef();
  const rollRef = useRef();
  const heartRef = useRef();

  const greetingBackground = "rgba(200,121,104,0.05)";
  const galleryBackground = "rgba(200,121,104,0.05)";
  const mapBackground = "rgba(200,121,104,0.05)";

  useEffect(()=>{
    const {innerHeight} = window;
    
    setPageHeight(innerHeight);

    window.addEventListener('contextmenu', e=>{
      e.preventDefault();
    });
  },[]);

  return <Layout>
      <Article height={pageHeight} forwardRef={mainRef}>
        <Main pageHeight={pageHeight}/>
      </Article>
      <Article forwardRef={greetingRef} background={greetingBackground}>
        <Greeting type={type}/>
      </Article>
      <Article forwardRef={galleryRef} background={galleryBackground}>
        <Gallery/>
      </Article>
      <Article forwardRef={calendarRef}>
        <Calendar/>
      </Article>
      <Article forwardRef={mapRef} background={mapBackground}>
        <Map/>
      </Article>
      <Article forwardRef={rollRef}>
        <Message pageHeight={pageHeight}/>
      </Article>
      <Article forwardRef={heartRef}>
        <SendHeart/>
      </Article>
    </Layout>;
}

export default App;
