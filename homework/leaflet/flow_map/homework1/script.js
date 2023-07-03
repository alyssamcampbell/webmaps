let map = L.map('map').setView([52.3439, 4.8807], 2.5);

let basemap_urls = {
  watercolor: "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
};

L.tileLayer(basemap_urls.watercolor, {
  maxZoom: 19,
  attribution: '&copy; <a href="">Stamen</a>',
  opacity: 0.4
}).addTo(map);

// H JOURNEY
const hjourney = [
    [47.66159670798355, -122.30817094085475], // Seattle
    [37.80444424121187, -122.43827589048583], // San Francisco
    [40.73112646783126, -73.99780825980085], // New York
    [41.00894863216677, 28.97784715618639], // Istanbul 
    [19.088415322843208, 72.87981284881647], // Mumbai
    [12.982770072181893, 77.58974074657802], // Bangalore
    [18.97307603337172, 99.00470953038322] // Chiang Mai
];

// Add markers with popups and images for each coordinate on the journey
const markersh = [];
const popupTextsh = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g'
];

for (let i = 0; i < hjourney.length; i++) {
  const marker = L.marker(hjourney[i]).addTo(map);
  marker.bindPopup(popupTextsh[i]);

  const icon = L.icon({
    iconUrl: imageUrlsh[i],
    iconSize: [100, 100], // Replace with the desired size of the image
    popupAnchor: [0, -32] // Adjust the anchor if needed
  });

  marker.setIcon(icon);

  markersh.push(marker);
}


// Create polylines
var polyline1 = L.polyline([], { color: '#D3A42E' }).addTo(map);
var polyline2 = L.polyline([], { color: '#A57C00' }).addTo(map);
var polyline3 = L.polyline([], { color: '#D31620' }).addTo(map);

// Animate the polylines
var duration = 2000; // Animation duration in milliseconds
var steps = 75; // Number of animation steps

// Calculate the incremental points for animation with wave effect
var animatedPoints1 = [];
for (var i = 0; i < hjourney.length - 1; i++) {
  var startPoint = L.latLng(hjourney[i]);
  var endPoint = L.latLng(hjourney[i + 1]);

  // Generate parameters for waves
  var waveAmplitude = .4; 
  var waveFrequency = .5; 

  for (var j = 0; j <= steps; j++) {
    var fraction = j / steps;
    var interpolatedLat = startPoint.lat + (endPoint.lat - startPoint.lat) * fraction;
    var interpolatedLng = startPoint.lng + (endPoint.lng - startPoint.lng) * fraction;

    // Add wavy effect to the coordinates
    var offsetLat = waveAmplitude * Math.sin(waveFrequency * j);
    var offsetLng = waveAmplitude * Math.cos(waveFrequency * j);

    var interpolatedPoint = L.latLng(interpolatedLat + offsetLat, interpolatedLng + offsetLng);
    animatedPoints1.push(interpolatedPoint);
  }
}

// T JOURNEY

const tJourney = [
    [51.64600598888888, 5.955066303526449], // Boxmeer
    [53.21949923832306, 6.56289889783151], // Groningen
    [1.3579334154632876, 103.86004290239082], // Singapore
    [3.148790083268786, 101.73642797810834], // Malaysia
    [18.97307603337172, 99.00470953038322] // Chiang Mai
];

var animatedPoints2 = [];
for (var i = 0; i < tJourney.length - 1; i++) {
  var startPoint = L.latLng(tJourney[i]);
  var endPoint = L.latLng(tJourney[i + 1]);

  // Generate parameters for the wavy effect
  var waveAmplitude = .4
  var waveFrequency = .5

  for (var j = 0; j <= steps; j++) {
    var fraction = j / steps;
    var interpolatedLat = startPoint.lat + (endPoint.lat - startPoint.lat) * fraction;
    var interpolatedLng = startPoint.lng + (endPoint.lng - startPoint.lng) * fraction;

    // Add wavy effect to the coordinates
    var offsetLat = waveAmplitude * Math.sin(waveFrequency * j);
    var offsetLng = waveAmplitude * Math.cos(waveFrequency * j);

    var interpolatedPoint = L.latLng(interpolatedLat + offsetLat, interpolatedLng + offsetLng);
    animatedPoints2.push(interpolatedPoint);
  }
}

// JOURNEY TOGETHER

const betterTogether = [
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

  // Generate parameters for the wavy effect
  var waveAmplitude = .9
  var waveFrequency = .5

  for (var j = 0; j <= steps; j++) {
    var fraction = j / steps;
    var interpolatedLat = startPoint.lat + (endPoint.lat - startPoint.lat) * fraction;
    var interpolatedLng = startPoint.lng + (endPoint.lng - startPoint.lng) * fraction;

    // Add wavy effect to the coordinates
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
    var animatePolyline1 = index1 < animatedPoints1.length;
    var animatePolyline2 = index2 < animatedPoints2.length;
    
    if (animatePolyline1) {
      polyline1.addLatLng(animatedPoints1[index1]);
      index1++;
    }
    
    if (animatePolyline2) {
      polyline2.addLatLng(animatedPoints2[index2]);
      index2++;
    }
    
    if ((animatePolyline1 || animatePolyline2) && !playtJourney) {
      setTimeout(animatePolylines, duration / steps);
    } else if (index3 < animatedPoints3.length) {
      playtJourney = true;
      polyline3.addLatLng(animatedPoints3[index3]);
      index3++;
      setTimeout(animatePolylines, duration / steps);
    }
  }

// Start the animation
animatePolylines();
