// Images to draw from:
const images = ["960x0.jpg", "blue.jpg"];

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;

  document.getElementById('date').innerHTML = today.toDateString();
  setTimeout(startTime, 1000);

  if (today.getSeconds() % 5 == 0) {
    let rand_img = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = "url('" + rand_img + "')";
  }
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
