

mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

var mapOptions = {
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/dark-v11', // dark basemap
    center: [-74.05, 40.68], // starting position [lng, lat]
    zoom: 10.4, // starting zoom,
}

// instantiate the map
const map = new mapboxgl.Map(mapOptions);

// add a navitation control
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

// loop over the pizzaData array to make a marker for each record
pizzaData.forEach(function (pizzaRecord) {

    var color

    // use if statements to assign colors based on pizzaData.program
    if (pizzaRecord.program === 'Professor') {
        color = '#8dd6a1'
    }
    if (pizzaRecord.program === 'MUP') {
        color = '#d67ea6'
    }
    if (pizzaRecord.program === 'MPA') {
        color = '#1f8f39'
    }
    if (pizzaRecord.program === 'MSPP') {
        color = '#8f5b1f'
    }


    // create a popup to attach to the marker
    const popup = new mapboxgl.Popup({
        offset: 24,
        anchor: 'bottom'
    }).setText(
        `${pizzaRecord.name} loves to eat 🍕 at ${pizzaRecord.pizza_restaurant_name}`
    );

    // create a marker, set the coordinates, add the popup, add it to the map
    new mapboxgl.Marker({
        scale: 0.65,
        color: color
    })
        .setLngLat([pizzaRecord.longitude, pizzaRecord.latitude])
        .setPopup(popup)
        .addTo(map);
})

