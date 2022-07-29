import { Map as KakaoMap, MapMarker } from 'react-kakao-maps-sdk';

const Map = ()=>{
    const position = {lat: 37.536038, lng: 127.095678};
    return <KakaoMap
        center={position}
        style={{width: '100%', height: '250px'}}
        clickable={true}
        level={3}
    >
        <MapMarker
            position={position}
            image={{
                src: `${process.env.PUBLIC_URL}/asset/map-marker.png`,
                size: {width: 117.6, height: 50},
                options: {
                    offset: {x: 25, y: 25}
                }
            }}
        />
    </KakaoMap>;
}

export default Map;