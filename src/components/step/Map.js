/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled  from '@emotion/styled';
import { Map as KakaoMap, MapMarker } from 'react-kakao-maps-sdk';
import CopyToClipboard from 'react-copy-to-clipboard';
import weddingSite, { ADDRESS } from "../../resource/Site";

const mapTitle = css`
    margin: 30px 0;
    letter-spacing: 0.3em;
    &::before{
        content: '오시는길'
    }
`;

const site = css`
    font-style: normal;
    padding: 10px 20px;
    margin: 30px 0;
    &::before{
        font-size: 19px;
        font-weight: bold;
        content: '${weddingSite.site} ${weddingSite.hall}'
    }
    &::after{
        content: '${ADDRESS}';
        display: block;
        margin-top: 0.8rem;
    }
`;

const appLink = css`
    align-items: center;
    background: #efefef;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    width: 100%;
    span{
        margin-right: auto;
    }
    a{
        color: inherit;
        font-style: normal;
        margin: 0 0.8rem;
        text-decoration: none;
    }
    a span{
        font-size: 16px;
        margin-left: 0.5rem;
    }
`;

const icon = css`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const MapLink = ({name, src})=>{
    const url = name==='kakao' ? "https://map.kakao.com/link/search/웨딩스퀘어%20강변점"
    : "https://map.naver.com/v5/search/%EC%9B%A8%EB%94%A9%EC%8A%A4%ED%80%98%EC%96%B4%20%EA%B0%95%EB%B3%80%EC%A0%90/place/31761747";
    const width = 47;
    const height = 47;

    return <a href={url} css={icon} target={'_blank'} rel={'noreferrer'}>
        <img
            src={src}
            height={height} width={width}
            alt="map application"
        />
        <span css={{"&::before": {content: `'${name}'`}}}/>
    </a>;
}

const description = css`
    font-size: 15px;
    font-style: normal;
    margin: 17px 35px;
    text-align: left;
    p{
        margin: 20px 17px 25px;
    }
    span{
        padding-bottom: 0.55rem;
    }
    span.bold{
        font-weight: bold;
    }
    span.title{
        font-size: 1.1rem;
        border-bottom: 1px solid #aaa;
        margin-bottom: 0.55rem;
    }
    span.new-line{
        display: block;
    }
    span.blank{
        display: block;
        padding-bottom: 0.7rem;
    }
    span.clipboard{
        padding-bottom: 0;
        background: #efefef;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const DescriptionSpan = styled.span(props=>({
    '&:before':{
        content: `'`+props.text+`'`
    }
}));

const CopyText = ({text, copyData})=>{
    return <CopyToClipboard
        text={copyData}
        onCopy={()=>alert(`'${copyData}'\n클립보드에 복사되었습니다`)}
    >
        <DescriptionSpan text={text} className="clipboard bold"/>
    </CopyToClipboard>
}

const Map = ()=>{
    const mapPosition = {lat: 37.536038, lng: 127.095678};
    const mapMarkerImage = {
        src: `${process.env.PUBLIC_URL}/asset/map-marker.png`,
        size: {
            width: 140,
            height: 48
        },
        options: {
            offset: {x: 25, y: 25}
        }
    };

    return <>
        <div css={mapTitle} id="map"/>
        <KakaoMap
            center={mapPosition}
            css={css`width: 100%; height: 210px;`}
            clickable={true}
            level={4}
        >
            <MapMarker
                position={mapPosition}
                image={mapMarkerImage}
            />
        </KakaoMap>
        <div css={site}/>
        <div css={appLink}>
            <span></span>
            <MapLink name={'카카오 지도'} src={`${process.env.PUBLIC_URL}/asset/kakao.png`}/>
            <MapLink name={'네이버 지도'} src={`${process.env.PUBLIC_URL}/asset/naver.png`}/>
        </div>
        <div css={description}>
            <p>
                <DescriptionSpan text='자가용' className="bold title new-line"/>
                <DescriptionSpan text='네비게이션' className="bold new-line"/>
                <CopyText text="강변테크노마트" copyData="강변테크노마트"/>
                <DescriptionSpan text=' 또는 '/>
                <CopyText text="웨딩홀 주소" copyData={ADDRESS}/>
                <DescriptionSpan text=' 검색'/>
                <DescriptionSpan text='' className="blank"/>
                <DescriptionSpan text='주차' className="bold new-line"/>
                <DescriptionSpan text='강변 테크노마트 지하 3층~지하 5층' className="new-line"/>
                <DescriptionSpan text='(하객 2시간 무료)' className="new-line"/>
                <DescriptionSpan text='※ 예식장과 가까운 위치 : 기둥 번호 100번대' className="new-line"/>
                <DescriptionSpan text='　주차데스크 : 답례품 받는 곳 옆에 위치'/>
            </p>
            <p>
                <DescriptionSpan text='지하철' className="bold title new-line"/>
                <DescriptionSpan text='2호선 강변역' className="bold new-line"/>
                <DescriptionSpan text='※ 1, 2번 출구사이 지하 연결 통로로 들어온 뒤 엘리베이터를 이용하세요' className="new-line"/>
            </p>
            <p>
                <DescriptionSpan text='버스' className="bold title new-line"/>
                <DescriptionSpan text='시외, 고속버스 | ' className="bold"/>
                <DescriptionSpan text='동서울터미널 하차 후 [지하철] 강변역 내용 참조하세요'/>
                <DescriptionSpan text='' className="blank"/>
                <DescriptionSpan text='지선버스 | ' className="bold"/>
                <DescriptionSpan text='2223, 3212, 3214'/>
                <DescriptionSpan text='' className="blank"/>
                <DescriptionSpan text='광역버스 | ' className="bold"/>
                <DescriptionSpan text='11, 100, 1006, 1112, 1113, 1113-1, 1113-2, 1117, 1650, 1660, 5600, 5700, 9304'/>
                <DescriptionSpan text='' className="blank"/>
                <DescriptionSpan text='※ 지선, 광역, 마을버스 등은 테크노마트 1층 에스컬레이터를 이용하세요'/>
            </p>
        </div>
    </>;
}

export default Map;