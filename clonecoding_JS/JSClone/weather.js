const weather = document.querySelector(".js-weather")

const API_KEY = "613a58fe2558ccec2357dcbb9e5f4f3e"
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(
        `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${API_KEY}&units=metric`
        ).then(function(resopnse){
            return (resopnse.json());
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });// then: 데이터가 완전히 들어온 후 함수호출
}//fetch에는 따옴표가 아닌 ` 사용

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude =position.coords.latitude;
    const longitude =position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("위치정보를 읽을 수 없습니다");
}

function askForCoords(){ 
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError) //API
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();

}

init();