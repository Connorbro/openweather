const fetch = require('node-fetch');
const fs = require('fs');

const APPID = '224566a483405adb54b0ecf2dbbce14a';

const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${APPID}`;

const getWeather = async()=> {

    let data = await fetch(url)
    let jsonData = await  data.json()
    //fs.writeFileSync('data.json', data)
    console.log(jsonData)
}

getWeather()