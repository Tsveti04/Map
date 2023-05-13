
const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([42.7249925, 25.4833039], 7.1);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: apiKey
}).addTo(mymap);

let marker;


// Adding Marker
function Sofia() {
  if (!!marker)
    mymap.removeLayer(marker)

  marker = L.marker([42.698334, 23.319941]).addTo(mymap);

  // Add popup message
  let template = `
<h3>Sofia</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Sofia.png"/>
</div>
`
  marker.bindPopup(template);
}

function Rila() {
  if (!!marker)
    mymap.removeLayer(marker)

  marker = L.marker([42.1333773, 23.3401215]).addTo(mymap);

  // Add popup message
  let template = `
<h3>Rila National Park</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Rila.jpeg"/>
</div>
`

  marker.bindPopup(template);
}
function Silistra() {
  if (!!marker)
    mymap.removeLayer(marker)

  marker = L.marker([44.114727, 27.267191]).addTo(mymap);

  // Add popup message
  let template = `
<h3>The Srebarna Nature Reserve</h3>
<div style="text-align:center">
    <img width="150" height="150"src="silistra.jpg"/>
</div>
`
  marker.bindPopup(template);
}
function Plovdiv() {
  if (!!marker)
    mymap.removeLayer(marker)
  marker = L.marker([42.136097, 24.742168]).addTo(mymap);

  // Add popup message
  let template = `
<h3>Plovdiv</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Plovdiv.jpg"/>
</div>
`
  marker.bindPopup(template);

}
function Burgas() {
  if (!!marker)
    mymap.removeLayer(marker)
  marker = L.marker([42.510578, 27.461014]).addTo(mymap);

  // Add popup message
  let template = `
<h3>Burgas</h3>
<div style="text-align:center">
    <img width="150" height="150"src="Burgas.jpg"/>
</div>
`
  marker.bindPopup(template);
}

function Varna() {
  if (!!marker)
    mymap.removeLayer(marker)
  marker = L.marker([43.214050, 27.914733]).addTo(mymap);

  // Add popup message
  let template = `
<h3>Varna</h3>
<div style="text-align:center">
    <img width="150" height="150"src="varna.jpg"/>
</div>
`
  marker.bindPopup(template);
}

function Pirin() {
  if (!!marker)
    mymap.removeLayer(marker)
  marker = L.marker([41.7583303, 23.42166498]).addTo(mymap);

  // Add popup message
  let template = `
<h3>Pirin National Park</h3>
<div style="text-align:center">
    <img width="150" height="150"src="pirin.jpg"/>
</div>
`
  marker.bindPopup(template);
}

function StaraPlanina() {
  if (!!marker)
    mymap.removeLayer(marker)
  marker = L.marker([42.711214, 24.761218]).addTo(mymap);

  // Add popup message
  let template = `
<h3>Central Balkan National Park</h3>
<div style="text-align:center">
    <img width="150" height="150"src="staraplanina.jpg"/>
</div>
`
  marker.bindPopup(template);

}


  



