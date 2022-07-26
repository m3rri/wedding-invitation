import { useRef, useEffect, useState } from 'react';
import Article from './components/atom/Article';
import Layout from "./components/template/Layout";
import Main from "./components/step/Main";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';

const App = ()=>{
  const [pageHeight, setPageHeight] = useState(700);

  const mainRef = useRef();
  const infoRef = useRef();
  const mapRef = useRef();

  useEffect(()=>{
    const {innerHeight} = window;
    setPageHeight(innerHeight);
  },[]);

  return <Layout>
      <Article height={pageHeight} forwardRef={mainRef}>
        <Main/>
      </Article>
      <Article forwardRef={infoRef} background="rgba(200,121,104,0.05)">
        <div style={{width: "70%", margin: "30px 0"}}/>
        <div style={{fontSize: "14px"}}>소중한 분을<br/>초대합니다</div>
        <div style={{width: "70%", margin: "20px 0", borderBottom: "1px solid rgba(200,121,104,0.3)"}}/>
        <div style={{fontSize: "15px", fontStyle: "normal"}}>
          <p>
            20대에 처음 만난 저희는<br/>
            12년의 시간 동안 서로 사랑하고 같이 성장해왔습니다.
          </p>
          <p>
            이런 저희 두 사람, 가을의 탐스러운 열매처럼<br/>
            부부의 결실을 맺으려 합니다.
          </p>
          <p>
            귀한 걸음 하시어 따뜻한 마음으로 축하해 주시면<br/>
            더없는 기쁨이 되겠습니다.
          </p>
        </div>
        <div style={{width: "70%", margin: "20px 0", borderBottom: "1px solid rgba(200,121,104,0.3)"}}/>
        <div style={{fontSize: "16px", fontStyle: "normal", letterSpacing: '0.3em'}}>
          <p>양윤모, 김순임 의 차남 <span style={{fontSize: '18px', fontWeight: 'bold'}}>희영</span></p>
          <p>김용기, 이재경 의 장녀 <span style={{fontSize: '18px', fontWeight: 'bold'}}>혜리</span></p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/img/secondary.jpg`} alt="wedding secondary" width="100%" style={{margin: "20px 0 0"}}/>
        <div style={{display: 'flex', flexDirection: 'row', background: '#fff', width: "100%"}}>
          <div style={{width: "50%", alignItems: 'center', lineHeight: '30px', margin: "20px 0", borderRight: "0.5px solid #ddd"}}>
            <FontAwesomeIcon icon={faComments}/> 신랑에게 연락하기
          </div>
          <div style={{width: "50%", alignItems: 'center', lineHeight: '30px', margin: "20px 0"}}>
            <FontAwesomeIcon icon={faComments}/> 신부에게 연락하기
          </div>
        </div>
      </Article>
      <Article height={pageHeight} forwardRef={mapRef}>
        <div id="map"></div>
      </Article>
    </Layout>;
}

export default App;
