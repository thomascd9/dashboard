// Images to draw from (for testing):
const test_imgs = ["960x0.jpg", "blue.jpg"];
// Actual image names are in image_names.js in const all_img_names

var paused = false;
var max_img_idx = all_img_names.length - 1;
var curr_img_idx = max_img_idx + 1;


function startTime() {
    const today = new Date();
    document.getElementById('clock').innerText =  today.toTimeString().split(' ')[0];
    document.getElementById('date').innerText = today.toDateString();

}

// from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function changeImages() {
    // if gone through all images, shuffle and reset
    if (curr_img_idx > max_img_idx) {
        shuffleArray(all_img_names);
        curr_img_idx = 1;
    }

    const today = new Date();
    const imgChangeInterval = 10; // change images every x seconds
    if (!paused && today.getSeconds() % imgChangeInterval == 0) {
      let rand_img = all_img_names[curr_img_idx++ - 1]
      document.body.style.backgroundImage = "url('" + rand_img + "')";
      document.getElementById('imagename').innerText = rand_img;
      let next_img = all_img_names[curr_img_idx]
      document.getElementById('preloadimg').src = next_img;
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
    const weatherUpdateInterval = 5; // upedate weather and aqi every x minutes
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
    setInterval(startTime, 1000);
    changeImages();
    updateWeather();
}
