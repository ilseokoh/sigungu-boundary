function downloadObjectAsJson(exportObj, exportName){
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

console.log("start .........");
console.log(damyang.cood.length)

let damyang_loc = [];
damyang.cood.forEach(element => {
    damyang_loc.push(ol.proj.transform(element, 'EPSG:5179', 'EPSG:4326'));
});

console.log(damyang_loc.length);


downloadObjectAsJson(damyang_loc, "damyang");

var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
var mapOption = { 
    center: new kakao.maps.LatLng(35.466571849939896, 127.034722148552), // 지도의 중심좌표
    level: 8 // 지도의 확대 레벨
};  

var map = new kakao.maps.Map(mapContainer, mapOption);

// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
var linePath = [];

damyang_loc.forEach(element => {
    linePath.push(new kakao.maps.LatLng(element[1], element[0]));
});
   
// 지도에 표시할 선을 생성합니다
var polyline = new kakao.maps.Polyline({
    path: linePath, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: '#FF3DE5', // 선의 색깔입니다
    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid' // 선의 스타일입니다
});

// 지도에 선을 표시합니다 
polyline.setMap(map);  

console.log("......... end");