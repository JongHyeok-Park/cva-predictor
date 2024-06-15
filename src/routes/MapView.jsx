import { Map, MapMarker, MapTypeControl, ZoomControl, useKakaoLoader } from "react-kakao-maps-sdk";
import { useSearchParams } from "react-router-dom";

function MapView(props) {
  useKakaoLoader({
    appkey: process.env.REACT_APP_KAKAO_MAP_API_KEY,
    libraries: ["clusterer", "drawing", "services"]
  });
  const [searchParams] = useSearchParams();
  const [lat, lng] = [searchParams.get('lat'), searchParams.get('lng')]
  const center = {
    lat: lat,
    lng: lng
  }

  return (
    <main className="map-wrapper">
      <Map 
        center={center}
        isPanto={true}
        style={{ width: "100%", height: "100vh" }}
      >
        <MapMarker position={center}>
          {/* <div style={{color:"#000"}}>경북대학교 병원</div> */}
        </MapMarker>
        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
      </Map>
    </main>
  )
}

export default MapView;