// Images to draw from (for testing):
const images = ["960x0.jpg", "blue.jpg"];
// Actual image names are in image_names.js in const all_img_names

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerText =  h + ":" + m + ":" + s;

  document.getElementById('date').innerText = today.toDateString();

  const imgChangeInterval = 10; // change images every x seconds
  if (today.getSeconds() % imgChangeInterval == 0) {
    let rand_img = all_img_names[Math.floor(Math.random() * all_img_names.length)];
    document.body.style.backgroundImage = "url('" + rand_img + "')";
  }

  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
