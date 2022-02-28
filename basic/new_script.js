// Images to draw from (for testing):
const all_img_names = ["960x0.jpg", "blue.jpg"];
// Actual image names are in image_names.js in const all_img_names

var paused = false;

function startTime() {
    const today = new Date();
    document.getElementById('clock').innerText =  today.toTimeString().split(' ')[0];
    document.getElementById('date').innerText = today.toDateString();
    setTimeout(startTime, 1000);
}

function changeImages() {
    const today = new Date();
    const imgChangeInterval = 10; // change images every x seconds
    if (!paused && today.getSeconds() % imgChangeInterval == 0) {
      let rand_img = all_img_names[Math.floor(Math.random() * all_img_names.length)];
      document.body.style.backgroundImage = "url('" + rand_img + "')";
      document.getElementById('imagename').innerText = rand_img;
    }

    // Keep image changing tied to clock (personal preference)
    //  so image changes when clock seconds divisible by 10
    if (today.getSeconds() % imgChangeInterval != 0) {
        setTimeout(changeImages, 1000);
    } else {
        setTimeout(changeImages, imgChangeInterval * 1000);
    }

}

function updateWeather() {
    const weatherUpdateInterval = 10; // upedate weather and aqi every x minutes
    document.getElementById('aqi').src += '';
    document.getElementById('weather').src += '';
    setTimeout(updateWeather, weatherUpdateInterval * 60 * 1000);
}

// Add pausing functionality for background image
document.addEventListener('keydown', (event) => {
    if (event.key == 'p' || event.key == ' ') {
        paused = !paused
        console.log('paused = ' + paused);
    }
})

function startup() {
    startTime();
    changeImages();
    updateWeather();
}
