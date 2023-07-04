let map = L.map('map').setView([52.3439, 4.8807], 2.5);

let basemap_urls = {
  watercolor: "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
};

L.tileLayer(basemap_urls.watercolor, {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Stamen</a>',
  opacity: 0.4
}).addTo(map);

// H JOURNEY
const hjourney = [
    [47.63391466771252, -122.52729914415487], // Bainbridge Island
    [47.66159670798355, -122.30817094085475], // Seattle
    [37.80444424121187, -122.43827589048583], // San Francisco
    [40.73112646783126, -73.99780825980085], // New York
    [40.64338871425513, -73.78867535842312], // New York JFK
    [32.08807693740594, 34.770466821168405], // Tel Aviv
    [41.00894863216677, 28.97784715618639], // Istanbul 
    [19.088415322843208, 72.87981284881647], // Mumbai
    [12.982770072181893, 77.58974074657802], // Bangalore
    [11.936883123451027, 79.83069418643692], // Pondicherry
    [18.97307603337172, 99.00470953038322] // Chiang Mai
];



// Create an empty polyline
var polyline1 = L.polyline([], { color: '#D3A42E' }).addTo(map);
var polyline2 = L.polyline([], { color: '#008080' }).addTo(map);
var polyline3 = L.polyline([], { color: '#D31620' }).addTo(map);

// Animate the polylines
var duration = 1000; // Animation duration in milliseconds
var steps = 100; // Number of animation steps

// Calculate the incremental points for animation with randomly shaped wavy effect
var animatedPoints1 = [];
for (var i = 0; i < hjourney.length - 1; i++) {
  var startPoint = L.latLng(hjourney[i]);
  var endPoint = L.latLng(hjourney[i + 1]);

  // Generate random parameters for the wavy effect
  var waveAmplitude = Math.random() * 2; // Random amplitude between 0.01 and 0.04
  var waveFrequency = Math.random() * 0.3; // Random frequency between 0.1 and 0.3

  for (var j = 0; j <= steps; j++) {
    var fraction = j / steps;
    var interpolatedLat = startPoint.lat + (endPoint.lat - startPoint.lat) * fraction;
    var interpolatedLng = startPoint.lng + (endPoint.lng - startPoint.lng) * fraction;

    // Add a randomly shaped wavy effect to the coordinates
    var offsetLat = waveAmplitude * Math.sin(waveFrequency * j);
    var offsetLng = waveAmplitude * Math.cos(waveFrequency * j);

    var interpolatedPoint = L.latLng(interpolatedLat + offsetLat, interpolatedLng + offsetLng);
    animatedPoints1.push(interpolatedPoint);
  }
}

var tJourney = [
    [51.64600598888888, 5.955066303526449], // Boxmeer
    [53.21949923832306, 6.56289889783151], // University of Groningen
    [1.3579334154632876, 103.86004290239082], // Singapore
    [3.148790083268786, 101.73642797810834], // Malaysia
    [18.97307603337172, 99.00470953038322] // Chiang Mai
];

var animatedPoints2 = [];
for (var i = 0; i < tJourney.length - 1; i++) {
  var startPoint = L.latLng(tJourney[i]);
  var endPoint = L.latLng(tJourney[i + 1]);

  // Generate random parameters for the wavy effect
  var waveAmplitude = Math.random() * 2; // Random amplitude between 0.01 and 0.04
  var waveFrequency = Math.random() * 0.3; // Random frequency between 0.1 and 0.3

  for (var j = 0; j <= steps; j++) {
    var fraction = j / steps;
    var interpolatedLat = startPoint.lat + (endPoint.lat - startPoint.lat) * fraction;
    var interpolatedLng = startPoint.lng + (endPoint.lng - startPoint.lng) * fraction;

    // Add a randomly shaped wavy effect to the coordinates
    var offsetLat = waveAmplitude * Math.sin(waveFrequency * j);
    var offsetLng = waveAmplitude * Math.cos(waveFrequency * j);

    var interpolatedPoint = L.latLng(interpolatedLat + offsetLat, interpolatedLng + offsetLng);
    animatedPoints2.push(interpolatedPoint);
  }
}

var betterTogether = [
  [18.97307603337172, 99.00470953038322], // Chiang Mai
  [19.882883001616815, 102.1254098035767], // Luang Prabang, Laos
  [21.06792375404227, 105.82597765722478], // Hanoi, Vietnam
  [20.80600956099038, 107.00238129092438], // Cat Ba Island, Halong Bay
  [16.463761983232395, 107.591532750555], // Hue, Vietnam
  [15.880980825683915, 108.3436019722076], // Hoi An, Vietnam
  [16.051353941796656, 108.18386984249825], // Da Nang, Vietnam
  [10.81077730220424, 106.63892270054043], // Saigon, Vietnam
  [11.54299160189004, 104.9760917784752], // Cambodia
  [1.3548443756451851, 103.86210282293456], // Singapore
  [51.52626516273223, -0.16064121179985044], // London
  [52.34309160541729, 4.8807039998906765], // Amsterdam
  [40.77593885158998, -73.97761581716749], // Upper West Side
  [40.68532373108921, -73.98589207753749] // Brooklyn
];

var animatedPoints3 = [];
for (var i = 0; i < betterTogether.length - 1; i++) {
  var startPoint = L.latLng(betterTogether[i]);
  var endPoint = L.latLng(betterTogether[i + 1]);

  // Generate random parameters for the wavy effect
  var waveAmplitude = 0.02; 
  var waveFrequency = 0.03

  for (var j = 0; j <= steps; j++) {
    var fraction = j / steps;
    var interpolatedLat = startPoint.lat + (endPoint.lat - startPoint.lat) * fraction;
    var interpolatedLng = startPoint.lng + (endPoint.lng - startPoint.lng) * fraction;

    // Add a randomly shaped wavy effect to the coordinates
    var offsetLat = waveAmplitude * Math.sin(waveFrequency * j);
    var offsetLng = waveAmplitude * Math.cos(waveFrequency * j);

    var interpolatedPoint = L.latLng(interpolatedLat + offsetLat, interpolatedLng + offsetLng);
    animatedPoints3.push(interpolatedPoint);
  }
}

// Animate the polylines
var index1 = 0;
var index2 = 0;
var index3 = 0;
var playtJourney = false; // Flag to indicate when to start playing tJourney

function animatePolylines() {
  if (!playtJourney && index1 < animatedPoints1.length) {
    polyline1.addLatLng(animatedPoints1[index1]);
    index1++;
  } else if (index2 < animatedPoints2.length) {
    playtJourney = true;
    polyline2.addLatLng(animatedPoints2[index2]);
    index2++;
  } else if (index3 < animatedPoints3.length) {
    polyline3.addLatLng(animatedPoints3[index3]);
    index3++;
  }

  if (index1 < animatedPoints1.length || index2 < animatedPoints2.length || index3 < animatedPoints3.length) {
    setTimeout(animatePolylines, duration / steps);
  }
}

// Start the animation
animatePolylines();
