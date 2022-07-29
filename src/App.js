import { useRef, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Article from './components/atom/Article';
import Layout from "./components/template/Layout";
import Main from "./components/step/Main";
import Greeting from "./components/step/Greeting";
import Gallery from "./components/step/Gallery";
import Calendar from "./components/step/Calendar";
import Map from "./components/step/Map";

const App = ()=>{
  const [pageHeight, setPageHeight] = useState(700);
  const {type} = useParams();

  const mainRef = useRef();
  const greetingRef = useRef();
  const galleryRef = useRef();
  const calendarRef = useRef();
  const mapRef = useRef();

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
        <Main/>
      </Article>
      <Article forwardRef={greetingRef} background={greetingBackground}>
        <Greeting type={type}/>
      </Article>
      <Article height={pageHeight} forwardRef={galleryRef} background={galleryBackground}>
        <Gallery/>
      </Article>
      <Article forwardRef={calendarRef}>
        <Calendar/>
      </Article>
      <Article forwardRef={mapRef} background={mapBackground}>
        <Map/>
      </Article>
    </Layout>;
}

export default App;
